import jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";
import usersService from "../users/users.service.js";

const PRIVATE_KEY = Buffer.from(process.env.PRIVATE_KEY_B64, "base64").toString(
  "utf-8"
);
const PUBLIC_KEY = Buffer.from(process.env.PUBLIC_KEY_B64, "base64").toString(
  "utf-8"
);

function validateJwt(token) {
  try {
    const payload = jwt.verify(token, PUBLIC_KEY, {
      algorithms: ["RS256"],
    });

    return payload;
  } catch (error) {
    return null;
  }
}

function getToken(user) {
  return jwt.sign({ ...user }, PRIVATE_KEY, {
    algorithm: "RS256",
    expiresIn: process.env.JWT_EXPIRATION,
  });
}

async function validatePassword(password, hash) {
  return await bcrypt.compare(password, hash);
}

function formatUser(user) {
  const result = { ...user };
  delete result.password;
  return result;
}

async function login(email, password) {
  let user = await usersService.findByEmail(email);
  if (!user || !(await validatePassword(password, user.password))) {
    return null;
  }
  return {
    user: formatUser(user),
    token: await getToken(user),
  };
}

async function register(data) {
  const password = await bcrypt.hash(data.password, 10);
  const user = await usersService.create({ ...data, password });
  delete user.password;
  return user;
}

export default {
  validateJwt,
  getToken,
  validatePassword,
  login,
  register,
};

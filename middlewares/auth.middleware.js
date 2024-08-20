import authService from "../api/auth/auth.service.js";

export default function authMiddleware(req, res, next) {
  try {
    const token = req.headers.authorization || req.query.token;
    const payload = authService.validateJwt(token);
    if (payload) {
      delete payload.iat;
      delete payload.exp;
      req["auth"] = payload;
      next();
    } else {
      res.status(401).send({ message: "Unauthorized" });
    }
  } catch (error) {
    res.status(401).send({ message: "Unauthorized" });
  }
}

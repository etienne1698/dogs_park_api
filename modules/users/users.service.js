import db from "../../config/db/database.js";

async function findByEmail(email) {
  return new Promise((resolve, reject) => {
    db.get("SELECT * FROM users WHERE email = ?", [email], (err, row) => {
      if (err) {
        reject(err);
      }
      resolve(row);
    });
  });
}

async function findById(id) {
  return new Promise((resolve, reject) => {
    db.get("SELECT * FROM users WHERE id = ?", [id], (err, row) => {
      if (err) {
        reject(err);
      }
      resolve(row);
    });
  });
}

async function create({ name, email, password }) {
  return new Promise((resolve, reject) => {
    db.run(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name, email, password],
      function (err) {
        if (err) {
          reject(err);
        }
        resolve({ id: this.lastID, name, email });
      }
    );
  });
}

export default {
  findByEmail,
  findById,
  create,
};

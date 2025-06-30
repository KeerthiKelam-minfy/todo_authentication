// temp file => to get the hash of admin password

import bcrypt from "bcrypt";

const passwordToHash = "admin123";
const SALT_ROUNDS = 10;

bcrypt.hash(passwordToHash, SALT_ROUNDS, (err, hash) => {
  if (err) {
    console.error("Error hashing password:", err);
  } else {
    console.log("Hashed password:", hash);
  }
});

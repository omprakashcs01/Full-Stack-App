const bcrypt = require("bcrypt");

//HASH FUNCTION
exports.hashPassword = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        reject(err);
      }
      bcrypt.hash(password, salt, (err, hash) => {
        if (err) {
          reject(err);
        }
        resolve(hash);
      });
    });
  });
};

// COMPARE || DECRYPT FUNCTION
exports.comparePassword = (password, hashed) => {
  return bcrypt.compare(password, hashed);
};
// //async/await way

// const bcrypt = require("bcrypt");

// // Async hash function
// exports.hashPassword = async (password) => {
//   try {
//     const saltRounds = 10; // Define the number of salt rounds here
//     const hashedPassword = await bcrypt.hash(password, saltRounds);
//     return hashedPassword;
//   } catch (err) {
//     throw err; // Rethrow the error to handle it outside this function if needed
//   }
// };

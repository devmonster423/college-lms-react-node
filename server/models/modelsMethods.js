const jwt = require('jsonwebtoken');
const _ = require('lodash');
const bcrypt = require('bcryptjs');

//  StudentSchema.methods.toJSON = function toJSON() {
//   const user = this;
//   const userObject = user.toObject();

//   return _.pick(userObject, ['_id', 'email']);
// };
const toJSON = function toJSON() {
  const user = this;
  const userObject = user.toObject();
  return _.pick(userObject, ['_id', 'email']);
};

// StudentSchema.methods.generateAuthToken = function generateAuthToken() {
//   const user = this;
//   const access = 'auth';
//   const token = jwt
//     .sign(
//       {
//         _id: user._id.toHexString(),
//         access,
//       },
//       'process.Env'
//     )
//     .toString();
//   user.tokens = user.tokens.concat([{ access, token }]);
//   return user.save().then(() => token);
// };
const generateAuthToken = function generateAuthToken() {
  const user = this;
  const access = 'auth';
  const token = jwt
    .sign(
      {
        _id: user._id.toHexString(),
        access,
      },
      'process.Env'
    )
    .toString();
  user.tokens = user.tokens.concat([{ access, token }]);
  return user.save().then(() => token);
};
// StudentSchema.statics.findByToken = function findByToken(token) {
//   const User = this;
//   let decoded;
//   try {
//     decoded = jwt.verify(token, 'process.Env');
//   } catch (e) {
//     return Promise.reject();
//   }
//   return User.findOne({
//     _id: decoded._id,
//     'tokens.token': token,
//     'tokens.access': 'auth',
//   });
// };
const findByToken = function findByToken(token) {
  const User = this;
  let decoded;
  try {
    decoded = jwt.verify(token, 'process.Env');
  } catch (e) {
    return Promise.reject();
  }
  return User.findOne({
    _id: decoded._id,
    'tokens.token': token,
    'tokens.access': 'auth',
  });
};
// StudentSchema.pre('save', function pre(next) {
//   const user = this;
//   if (user.isModified('password')) {
//     bcrypt.genSalt(10, (err, salt) => {
//       bcrypt.hash(user.password, salt, (error, hash) => {
//         user.password = hash;
//         next();
//       });
//     });
//   } else {
//     next();
//   }
// });

// StudentSchema  = function findByCredentials(
//   email,
//   password
// ) {
//   const User = this;
//   return User.findOne({ email }).then((user) => {
//     if (!user) {
//       return Promise.reject();
//     }

//     return new Promise((resolve, reject) => {
//       bcrypt.compare(password, user.password, (err, res) => {
//         if (res) {
//           resolve(user);
//         } else {
//           reject();
//         }
//       });
//     });
//   });
// };
const findByCredentials = function findByCredentials(email, password) {
  const User = this;
  return User.findOne({ email }).then((user) => {
    if (!user) {
      return Promise.reject();
    }

    return new Promise((resolve, reject) => {
      bcrypt.compare(password, user.password, (err, res) => {
        if (res) {
          resolve(user);
        } else {
          reject();
        }
      });
    });
  });
};

// StudentSchema.methods.removetoken = function removetoken(token) {
//   const user = this;
//   return user.update({
//     $pull: {
//       tokens: { token },
//     },
//   });
// };

const removetoken = function removetoken(token) {
  const user = this;
  return user.update({
    $pull: {
      tokens: { token },
    },
  });
};
module.exports = {
  toJSON,
  generateAuthToken,
  findByToken,
  findByCredentials,
  removetoken,
};

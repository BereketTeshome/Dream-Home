// const jwt = require('jsonwebtoken')

// const auth = async (req, res, next) => {
//   const authHeader = req.headers.authorization

//   const token = authHeader

//   try {
//     const payload = jwt.verify(token, process.env.JWT_SECRET)
//     req.user = { userId: payload.userId }
//     next()
//   } catch (error) {
//     console.error(error)
//   }
// }

// module.exports = auth
    
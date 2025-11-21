import asyncHandeler from "express-async-handler";
import jwt from "jsonwebtoken";

const verifyToken = asyncHandeler(async (req, res, next) => {
  let token;
  const authHeader = req.headers.authorization || req.headers.Authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        res.status(401);
        throw new Error("User not authrozed");
      }
      req.user = decoded.users;
      next();
    });

    if (!token) {
      res.status(401);
      throw new Error("Token not given");
    }
  }
});

export default verifyToken;

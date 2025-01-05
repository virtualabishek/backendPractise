export default (req, res, next) => {
  const token = req.header.token;

  if (token && token === "abc") {
    next();
  } else {
    res.status(403).send({ success: false, message: "Invalid token" });
  }
};

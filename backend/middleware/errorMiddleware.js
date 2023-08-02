const node_env = process.env.NODE_ENV || "development";

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  res.status(statusCode);
  res.json({
    message: err.message,
    stack: node_env === "production" ? null : err.stack,
  });
};

module.exports = { errorHandler };

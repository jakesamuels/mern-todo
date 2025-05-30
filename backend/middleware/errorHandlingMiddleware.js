const errorHandler = (err, req, res, next) => {
  console.error("Caught by error handling middleware:", err);

  // Set default status code and message
  let statusCode = err.statusCode || 500;
  let message = err.message || "Something went wrong!";

  // Mongoose CastError (e.g., invalid MongoDB ID format)
  if (err.name === "CastError") {
    statusCode = 400;
    message = `Invalid ${err.path}: ${err.value}`;
  }

  // Mongoose ValidationError (e.g., missing required fields, invalid data types)
  if (err.name === "ValidationError") {
    statusCode = 400; // Bad Request
    // Extract detailed error messages from Mongoose validation errors
    const errors = Object.values(err.errors).map((el) => el.message);
    message = `Invalid input data. ${errors.join(". ")}`;
  }

  // Mongoose duplicate key error (e.g., unique field violation)
  if (err.code === 11000 || err.code === 11001) {
    statusCode = 400;

    const value = err.message.match(/(["'])(\\?.)*?\1/)[0];
    message = `Duplicate field value: ${value}. Please use another value!`;
  }

  res.status(statusCode).json({
    error: err,
  });
};

export default errorHandler;

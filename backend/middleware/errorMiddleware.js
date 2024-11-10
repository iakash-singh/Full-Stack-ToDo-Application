const errorMiddleware = (err, req, res, next) => {
    console.error(`[ERROR] ${err.stack}`);
  
    
    const statusCode = err.status || 500;
  
    res.status(statusCode).json({
      message: err.message || "An unexpected error occurred",
      details: err.details || null,
    });
  };
  
  module.exports = errorMiddleware;
  
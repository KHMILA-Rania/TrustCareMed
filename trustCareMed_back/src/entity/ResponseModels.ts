const ResponseModels = {
    SUCCESS: {
      status: 200,
      message: "Success"
    },
    BAD_REQUEST: {
      status: 400,
      message: "Bad Request"
    },
    UNAUTHORIZED: {
      status: 401,
      message: "Unauthorized"
    },
    NOT_FOUND: {
      status: 404,
      message: "Not Found"
    },
    INTERNAL_SERVER_ERROR: {
      status: 500,
      message: "Internal Server Error"
    },
    Conflict: {
      status: 409,
      message: "Email already exists in the database"
    }
  };
  
  export default ResponseModels;
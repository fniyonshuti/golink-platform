const createUserValidator = {
    fname: {
        notEmpty: {
            errorMessage: "First name should not be empty",
        },
        isString: {
            errorMessage: "First name should be a string"
        }
    },
    lname: {
        notEmpty: {
            errorMessage: "Last name should not be empty",
        },
        isString: {
            errorMessage: "Last name should be a string"
        }
    },
    email: {
        notEmpty: {
            errorMessage: "Email should not be empty",
        },
        isEmail: {
            errorMessage: "email should be a valid email"
        }
    },
    phone: {
        notEmpty: {
            errorMessage: "Phone should not be empty",
        },
        isString: {
            errorMessage: "Phone should be a string"
        },
        isLength: {
            options: {
                min: 12,
                max: 12,
            },
            errorMessage: "Phone should have 12 characters"
        }
    },

    password: {
        notEmpty: {
            errorMessage: "Password should not be empty",
        },
        isString: {
            errorMessage: "Password should be a string"
        },
        isLength: {
            options: {
                min: 6,
                max: 10,
            },
            errorMessage: "Password should have 6 to 10 characters"
        }
    },
    confirmPassword: {
        notEmpty: {
            errorMessage: "Password should not be empty",
        },
        isString: {
            errorMessage: "Password should be a string"
        },
        isLength: {
            options: {
                min: 6,
                max: 10,
            },
            errorMessage: "Password should have 6 to 10 characters"
        }
    },
    isAdmin: {
        optional: {options: {nullable: true}},
        isBoolean: {
            errorMessage: "User type should be a boolean"
        }
    }
}


const loginUserValidator = {
    email: {
        notEmpty: {
            errorMessage: "Email should not be empty",
        },
        isEmail: {
            errorMessage: "email should be a valid email"
        }
    },
    password: {
        notEmpty: {
            errorMessage: "Password should not be empty",
        },
        isString: {
            errorMessage: "Password should be a string"
        },
        isLength: {
            options: {
                min: 6,
                max: 10,
            },
            errorMessage: "Password should have 6 to 10 characters"
        }
    },
}



export {loginUserValidator, createUserValidator}
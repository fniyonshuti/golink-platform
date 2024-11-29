const createJobValidator = {
    title: {
        notEmpty: {
            errorMessage: "Title should not be empty",
        },
        isString: {
            errorMessage: "Title should be a string",
        },
    },
    description: {
        notEmpty: {
            errorMessage: "Description should not be empty",
        },
        isString: {
            errorMessage: "Description should be a string",
        },
    },
    deadline: {
        notEmpty: {
            errorMessage: "Deadline should not be empty",
        },
        isISO8601: {
            errorMessage: "Deadline should be a valid ISO 8601 date",
        },
    },
    location: {
        optional: {options: {nullable: true}},
        isString: {
            errorMessage: "Location should be a string",
        },
    },
    websiteUrl: {
        optional: {options: {nullable: true}},
        isString: {
            errorMessage: "link to the website should be a string",
        },
    }
};

export default createJobValidator;

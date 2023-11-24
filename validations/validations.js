const validationSchema = {
	title: {
		notEmpty: {
			errorMessage: "Title is required"
		},
		isString: {
			errorMessage: "Title must be a string"
		}
	},
	content: {
		notEmpty: {
			errorMessage: "Content is required"
		},
		isString: {
			errorMessage: "Content must be a string"
		}
	},
	published: {
		notEmpty: {
			errorMessage: "Published is required"
		},
		isBoolean: {
			errorMessage: "Published must be true or false"
		}
	},
};

module.exports = {
	validationSchema,
};

import joi from 'joi';

const createUser = joi.object({
    email: joi.string()
      .email()
      .required()
      .messages({
        'string.empty': 'EMPTY_FIELD',
        'string.email': 'INVALID_EMAIL',
        'any.required': 'REQUIRED_FIELD',
      }),
    password: joi.string()
      .required()
      .messages({
        'string.empty': 'EMPTY_FIED',
        'any.required': 'REQUIRED_FIELD',
      }),
}).options({ abortEarly: false });

export default {
  createUser,
}

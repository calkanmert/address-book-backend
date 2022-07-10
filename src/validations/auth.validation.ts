import joi from 'joi';

const generateToken = joi.object({
  email: joi.string()
    .required()
    .messages({
      'string.empty': 'EMPTY_FIELD',
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
  generateToken,
}

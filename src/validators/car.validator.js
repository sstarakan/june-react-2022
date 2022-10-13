import Joi from "joi";

const carValidator = Joi.object({
    model: Joi.string().regex(/^[a-zA-ZА-яїЇіІґҐєЄ]{1,20}$/).required().messages({
        'string.pattern.base': 'Тільки букви не менше 2 і не більше 20'
    }),
    price: Joi.number().min(0).max(1000000).required().messages({
        'number.max': 'Ціну потрібно вказати до 1 000 000',
        'number.min': 'Ціну потрібно вказати не нижче 0',
        'number.base': 'Ціну потрібно вказати у цифрах'
    }),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required().messages({
        'number.max': `Рік потрібно вказати до ${new Date().getFullYear()}`,
        'number.min': 'Рік потрібно вказати не нижче 1990',
        'number.base': 'Рік потрібно вказати у цифрах'
    }),
});

export {carValidator}

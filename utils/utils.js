export const getRandomInt = (max = 20) => Math.ceil(Math.random() * Math.floor(max));

export const isInt = (num) => (typeof num === 'number');

export const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * Math.ceil(max) - Math.floor(min) + 1) + min;
};
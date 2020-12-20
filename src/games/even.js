import { getRandomInt } from '../../utils/utils.js'

export const showRules = () => console.log('Answer "yes" if the number is even, otherwise answer "no".')

export const isValid = (input) => ['yes', 'no'].includes(input)

const isEven = (number) => number % 2 === 0

export const getTask = () => [getRandomInt(100)]

export const getRightAnswer = (task) => (isEven(task) ? 'yes' : 'no')

export const isVictory = (task, input) => isEven(task) === (input === 'yes')

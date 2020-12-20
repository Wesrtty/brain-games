import { getRandomInt, isInt } from '../../utils/utils.js'

export const showRules = () => console.log('What is the result of the expression?')

const getRandomSign = () => {
  const operations = ['+', '-', '*']
  return operations[Math.ceil(Math.random() * operations.length - 1)]
}

const getResultMathOperation = (number1, operation, number2) => {
  switch (operation) {
    case '+':
      return number1 + number2
    case '-':
      return number1 - number2
    case '*':
      return number1 * number2
    default:
      console.log(`${operation} is not found.`)
  }
  return null
}

export const getTask = () => [getRandomInt(40), getRandomSign(), getRandomInt(40)]

export const getRightAnswer = (task) => getResultMathOperation(...task)

export const isValid = (input) => isInt(Number(input))

export const isVictory = (task, input) => getResultMathOperation(...task) === Number(input)

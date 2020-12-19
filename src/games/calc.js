import { showQuestion, setUserInput } from '../../utils/interaction.js'
import { getRandomInt, isInt } from '../../utils/utils.js'

export const getRules = () => 'What is the result of the expression?'

const getRandomOperationSign = () => {
  const operations = ['+', '-', '*']
  return operations[Math.ceil(Math.random() * operations.length - 1)]
}

const getResultMathOperation = (number1, number2, operation) => {
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

export const run = () => {
  let resultGame = true
  const [number1, number2] = [getRandomInt(20), getRandomInt(30)]
  const operation = getRandomOperationSign()

  showQuestion(`${number1} ${operation} ${number2}`)
  const inputStr = setUserInput()
  const inputInt = Number(inputStr)
  const resultMathOperation = getResultMathOperation(number1, number2, operation)

  if (!isInt(inputInt) || inputInt !== resultMathOperation) {
    resultGame = false
  }

  return [resultMathOperation, inputStr, resultGame]
}

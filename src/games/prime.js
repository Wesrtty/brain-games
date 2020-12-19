import { showQuestion, setUserInput } from '../../utils/interaction.js'
import { getRandomInt } from '../../utils/utils.js'

export const getRules = () => 'Answer "yes" if given number is prime. Otherwise answer "no".'

const isValid = (input) => ['yes', 'no'].includes(input)

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false
  }
  return number > 1
}

export const run = () => {
  let resultGame = true
  const number = getRandomInt(50)

  showQuestion(number)
  const input = setUserInput()

  if (!isValid(input) || !(isPrime(number) === (input === 'yes'))) {
    resultGame = false
  }
  return [input === 'yes' ? 'no' : 'yes', input, resultGame]
}

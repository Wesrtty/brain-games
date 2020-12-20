import readlineSync from 'readline-sync'
import * as brainEven from './games/even.js'
import * as brainCalc from './games/calc.js'
import * as brainGcd from './games/gcd.js'
import * as brainProgression from './games/progression.js'
import * as brainPrime from './games/prime.js'
import setUserName from './cli.js'

const getModuleByGameName = (gameName) => {
  switch (gameName) {
    case 'brain-even':
      return brainEven
    case 'brain-calc':
      return brainCalc
    case 'brain-gcd':
      return brainGcd
    case 'brain-progression':
      return brainProgression
    case 'brain-prime':
      return brainPrime
    default:
      console.log(`${gameName} is not found.`)
      return null
  }
}

const showEndGame = (correctAnswer, incorrectAnswer, username) => {
  console.log(`'${incorrectAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
  console.log(`Let's try again, ${username}!`)
}

export default (gameName) => {
  const game = getModuleByGameName(gameName)
  const username = setUserName()
  const attemptsCount = 3

  game.showRules()

  for (let attempt = 0; attempt < attemptsCount; attempt += 1) {
    const task = game.getTask()

    console.log(`Question: ${task.join(' ')}`)
    const input = readlineSync.question('Your answer: ')

    if (!game.isValid(input) || !game.isVictory(task, input)) {
      const correctAnswer = game.getRightAnswer(task)
      showEndGame(correctAnswer, input, username)
      return
    }
    console.log('Correct!')
  }
  console.log(`Congratulations, ${username}!`)
}

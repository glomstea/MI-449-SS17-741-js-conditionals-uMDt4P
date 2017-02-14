var startButton = document.getElementById('start')
startButton.addEventListener('click', startFunction)

function startFunction () {
  var start = confirm('Are you sure you are brave enough?')
  if (start === true) {
    firstFunction()
  }
}

function firstFunction () {
  var firstChoice = window.prompt('You stumble upon youre first obstacle where you must find the misspelled word in this sentence and spell it correctly.')
  if (firstChoice === null) {
    window.alert('Backing out? Feel free to try again by clicking on the button.')
  } else {
    firstChoice = firstChoice.trim().toLowerCase()
    if (firstChoice === 'your') {
      window.alert('You may continue your quest.')
      secondFunction()
    } else {
      window.alert('Nope. Try again.')
      firstFunction()
    }
  }
}

function secondFunction () {
  var secondChoice = window.prompt('Your second obstacle. How do I shorten the word "okay"?')
  if (secondChoice === null) {
    window.alert('Backing out? Feel free to try again by clicking on the button.')
  } else {
    secondChoice = secondChoice.trim().toLowerCase()
    if (secondChoice === 'ok') {
      window.alert('Wow, the Grammar Nazi is impressed. You may continue.')
      thirdFunction()
    } else {
      window.alert('Sorry, but "' + secondChoice + '" is not the right answer. Try again.')
      secondFunction()
    }
  }
}

function thirdFunction () {
  var randomNumber = Math.random()
  var thirdChoice = window.prompt('The third test. How do you correctly abbreviate the word "missus" or the word "miss"? Either answer will work.')
  if (thirdChoice === null) {
    window.alert('Backing out? Feel free to try again by clicking on the button.')
  } else {
    thirdChoice = thirdChoice.trim().toLowerCase()
    if (thirdChoice === 'mrs.' || thirdChoice === 'ms.') {
      if (randomNumber > 0.7) {
        window.alert('Random warning #1. Next room is the final chapter.')
        fourthFunction()
      } else if (randomNumber > 0.5) {
        window.alert('Random warning #2. This next room will be your last.')
        fourthFunction()
      } else if (randomNumber < 0.3) {
        window.alert('Random warning #3. Your doom awaits in the next room.')
        fourthFunction()
      }
    } else {
      window.alert('Sorry, but "' + thirdChoice + '" is not the right answer. Try again.')
      thirdFunction()
    }
  }
}

function fourthFunction () {
  var fourthChoice = window.prompt('Youre last obsticle. If you can count the right number of erors in this sentense, you may leave.')
  if (fourthChoice === null) {
    window.alert('Backing out? Feel free to try again by clicking on the button.')
  } else {
    fourthChoice = fourthChoice.trim()
    fourthChoice = parseInt(fourthChoice)
    if (isNaN(fourthChoice)) {
      window.alert('The Grammar Nazi demands a number. Try again.')
      fourthFunction()
    } else {
      if (fourthChoice === 4) {
        window.alert('Congratulations. You have beat the Grammar Nazi.')
      } else if (fourthChoice === 5) {
        window.alert('NOOO! Your guess was one too high. The Grammar Nazi steals your soul.')
      } else if (fourthChoice === 3) {
        window.alert('UH OH! Your guess was one too low. YOU WILL BE STUCK HERE FOREVER.')
      } else {
        window.alert('Sorry, you are way off. The Grammar Nazi traps you here forever.')
      }
    }
  }
}

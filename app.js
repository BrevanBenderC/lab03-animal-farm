// import functions and grab DOM elements
const horseImg = document.getElementById('horse')
const horseSound = document.getElementById('horsenoise')
const dogImg = document.getElementById('dog')
const dogSound = document.getElementById('dognoise')
const catImg = document.getElementById('cat')
const catSound = document.getElementById('catnoise')


// initialize global state





horseImg.addEventListener('click', ()=>

    horseSound.play()

)

dogImg.addEventListener('click', ()=>

    dogSound.play()
)

catImg.addEventListener('click', ()=>

   catSound.play()
)

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

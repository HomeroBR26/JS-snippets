
let base = 5
let height = 7

//---------- Calculate triangle's base ------------------------
function triangleArea(base, height) {
    return base * height / 2
}

//---------- Triangles'area with triangle function ------------
const triangleArea = (base, height) => base * height / 2

// ------------------------------------------------------------
console.log(`A triangle's area is: ${triangleArea(base, height)}`)

//=============================================================
//=============================================================

function lowUp(str) {
  const len = str.length
  let translation = ''
  let capitalize = true
  for (let i = 0; i < len; i++){
    const char = str.charAt(i)
    translation += capitalize ? char.toUpperCase() : char.toLowerCase()
    capitalize = !capitalize
  }

  return translation
}

function platzom(str) {
  let translation = str
  const reverse = (str) => str.split('').reverse().join('')

  //If the word ends with "ar", those letters are removed
  if (str.toLowerCase().endsWith('ar')) {
    translation = str.slice(0, -2)
  }

  //If the word starts with "z", add "pe" at the end
  if (str.toLowerCase().startsWith('z')) {
    translation += 'pe'
  }

  //If the words contains more than 10 letters, put a hyppen in half
  const len = translation.length
  const half = Math.round(len/2)
  if (len >= 10) {
    translation = `${translation.slice(0, half)}-${translation.slice(half)}`
  }

  //if word is palindrome, abolish all other rules and make
  //ever other letter uppercase.
  if (str == reverse(str)) {
    return lowUp(str)
  }

  return translation
}

console.log(platzom("programar"))
console.log(platzom("zorrar"))
console.log(platzom("wertyuiops"))
console.log(platzom("sometemos"))

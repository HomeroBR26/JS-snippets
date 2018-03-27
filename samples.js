
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

function platzom(str) {
  let translation = str

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

  return translation
}

console.log(platzom("programar"))
console.log(platzom("zorrar"))
console.log(platzom("wertyuiops"))

function doubleAll(arr) {
  const x = []
  for (let i=0; i<arr.length; i++){
    x.push(arr[i]*2)
  }
  return x
}

function absoluteValues(arr) {
  const x = []
  for (let i=0; i<arr.length; i++){
    if (arr[i]>=0){
      x.push(arr[i])
    }
    else if (arr[i]<0){
      x.push(arr[i]*-1)
    }
  }
  return x
}

function yelledGreetings(arr){
  const x = []
  for (let i=0; i<arr.length; i++){
    x.push(arr[i]+'!')
  }
  return x
}

function changeToInitials(arr) {
  const x = []
  let y = ''
  for (let a=0; a<arr.length; a++){
    y += arr[a]
    if (y.includes(' ')){
      x.push(y[0]+y[y.indexOf(' ')+1])
      y = ''
    }
  }
  return x
}

function doubleOdd(arr) {
  const x = []
  let y = ''
  for (let i=0; i<arr.length; i++){
    y = arr[i].toString()
    if (arr[i]%2===0 || y.includes('.')){
      x.push(arr[i])
    }
    else {
      x.push(arr[i]*2)
    }
  }
  return x
}

function upperCaseFirstLetters(arr) {
  const x = []
  let y = ''
  let z = ''
  for (let i=0; i<arr.length; i++){
    y = arr[i]
    z = (y.substring(1, y.length)).toLowerCase()
    x.push(y[0].toUpperCase()+z)
  }
  return x
}

function add1ToLeft(arr) {
  const x = []
  let y = ''
  let z = ''
  for (let i=0; i<arr.length; i++){
      y = arr[i].toString()
      if (y[0]==='-'){
        z = '-1'+y.substring(1, y.length)
        x.push(Number(z))
      }
      else {
        z = '1'+y
        x.push(Number(z))
      }
  }
  return x
}


module.exports = {
  doubleAll,
  absoluteValues,
  yelledGreetings,
  changeToInitials,
  doubleOdd,
  upperCaseFirstLetters,
  add1ToLeft,
}
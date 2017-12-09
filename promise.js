function addition(nombre ) {
  const nb = Number(nombre)
  return new Promise((fullfil, reject) => {
  if (isNaN(nb)) {
    setTimeout( () => {reject('not a number !')}, 2000)
  } else {
    setTimeout( () =>  {fullfil(nb + 12)}, 2000)
  }
  })
}


function main() {
  addition('12')
    .then((data)=> {
        console.log(data)
        return addition(data)
    })
    .then((data)=> { console.log(data)})
    .catch((err) => {
      console.error(err)
    })
}

main()
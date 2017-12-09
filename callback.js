function addition(nombre, cb ) {
  var nb = Number(nombre)
  if (isNaN(nb)) {
    setTimeout(function() {cb('not a number !', null)}, 2000)
  } else {
    setTimeout(function() {cb(null, nb + 12)}, 2000)
  }
}


function main() {
  addition('12a', function(err, result) {
    if (err) {
      console.error(err)
    } else {
      console.log(result)
    }  
  })
}

main()
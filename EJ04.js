fs.readFile("./txt/dai.txt", "utf8", (err, data) => {
    if (err) return console.error(err)
    console.log(data)
    fs.writeFile("./txt/dai2.txt", data , err =>{
      if (err) return console.log(err)
      console.log("El archivo fue copiado correctamente")
    })
  })
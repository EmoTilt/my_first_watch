var fs = require("fs")

var content = `var stdin = process.openStdin();
var date = new Date();
var hours = date.getHours()
var minutes = date.getMinutes()
var seconds = date.getSeconds()`

for (let h = 0; h < 24; h++) {
    for (let m = 0; m < 60; m++) {
        for (let s = 0; s < 60; s++) {
            content += `\nif(hours == ${h} && minutes == ${m} && seconds == ${s}) {\nconsole.log("Ваше время - ${h}:${m}:${s}")\n}`
        }
    }
}

fs.writeFile('index.js', content, (err) => {
    if (err) {
      console.error(err)
      return
    }
    //файл записан успешно
  })

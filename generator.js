const fs = require("fs")

let content = `let date = new Date();
let hours = date.getHours()
let minutes = date.getMinutes()
let seconds = date.getSeconds()`

for (let h = 0; h < 24; h++) {
    for (let m = 0; m < 60; m++) {
        for (let s = 0; s < 60; s++) {
            content += `\nif(hours == ${h} && minutes == ${m} && seconds == ${s}) {\nconsole.log("Ваше время - ${h}:${m}:${s}")\n}`
        }
    }
}

fs.writeFile('index.js', content, (err) => {
    if (err) {
      return console.error(err)
    }
    //файл записан успешно
})

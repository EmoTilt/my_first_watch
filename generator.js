var fs = require("fs")

var date = [00, 00, 00]

var content = `function prompt(question, callback) {
    var stdin = process.stdin,
        stdout = process.stdout;

    stdin.resume();
    stdout.write(question);

    stdin.once('data', function (data) {
        callback(data.toString().trim());
    });
}
var fs = require("fs")
var stdin = process.openStdin();
var date = new Date();
var hours = date.getHours()
var minutes = date.getMinutes()
var seconds = date.getSeconds()`

for (let h = date[0]; h < 24; h++) {
    for (let m = date[1]; m < 60; m++) {
        for (let s = date[2]; s < 60; s++) {
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
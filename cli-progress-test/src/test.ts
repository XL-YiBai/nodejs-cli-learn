import ansiEscapes from 'ansi-escapes'

// process.stdout 返回一个对象表示标准输出，该对象的 write 方法等同于于 console.log 可用在标准输出向用户显示内容
// 只不过 console.log 会默认打印一个换行符，而 process.stdout.write 不会。

// 隐藏光标
process.stdout.write(ansiEscapes.cursorHide)
// 保存光标初始位置
process.stdout.write(ansiEscapes.cursorSavePosition)
process.stdout.write('░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░')

setTimeout(() => {
  // 回到之前保存的初始位置，继续打印。
  process.stdout.write(ansiEscapes.cursorRestorePosition)
  process.stdout.write('████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░')
}, 1000)

setTimeout(() => {
  process.stdout.write(ansiEscapes.cursorRestorePosition)
  process.stdout.write('███████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░')
}, 2000)

setTimeout(() => {
  process.stdout.write(ansiEscapes.cursorRestorePosition)
  process.stdout.write('██████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░')
}, 3000)

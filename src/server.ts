let i: number = 0
const printer = () => (console.log(i), i++)
setInterval(() => printer(), 1000)

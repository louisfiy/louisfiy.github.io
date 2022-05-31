// 计算网站的运行时间
(function() {
  // https://api.github.com/repos/louisfiy/louisfiy.github.io
  let start = new Date('2021-11-12 15:27:52'.replace(/-/g, '/'))
  const padNum = (num) => {
    return num.toString().padStart(2, '0')
  }
  const update = () => {
    let end = new Date()
    let time = (end.getTime() - start.getTime()) / 1000
    let day = parseInt(time / 3600 / 24)
    let hour = parseInt(time / 3600 - (24 * day))
    let minute = parseInt(time / 60 - (24 * 60 * day) - (60 * hour))
    let second = parseInt(time - (24 * 3600 * day) - (3600 * hour) - (60 * minute))
    document.getElementById('site_date').innerHTML = `
      本站已运行 ${day} 天 ${padNum(hour)} 时 ${padNum(minute)} 分 ${padNum(second)} 秒
    `
  }
  update()
  setInterval(update, 1000)
})()

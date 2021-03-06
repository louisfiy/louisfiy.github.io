let chartIncome = echarts.init(document.getElementById('chart_income'))
chartIncome.setOption({
  tooltip: {
    formatter: '{b} {d}%'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: '类别',
      type: 'pie',
      radius: '70%',
      data: [
        { value: 95.24, name: '工资' },
        { value: 4.62, name: '补贴' },
        { value: 0.03, name: '零散' },
        { value: 0.11, name: '电子' },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
})

let chartExpense = echarts.init(document.getElementById('chart_expense'))
chartExpense.setOption({
  tooltip: {
    formatter: '{b} {d}%'
  },
  legend: {
    type: 'scroll'
  },
  series: [
    {
      name: '类别',
      type: 'pie',
      radius: ['35%', '70%'],
      itemStyle: {
        borderRadius: 4,
        borderColor: '#fff',
        borderWidth: 1
      },
      data: [
        { value: 37.05, name: '饮食' },
        { value: 5.35, name: '居家' },
        { value: 28.88, name: '住所' },
        { value: 9.86, name: '衣饰' },
        { value: 5.48, name: '出行' },
        { value: 3.81, name: '数码' },
        { value: 0.33, name: '文娱' },
        { value: 1.88, name: '健康' },
        { value: 4.54, name: '家庭' },
        { value: 1.04, name: '事务' },
        { value: 1.78, name: '电子' }
      ]
    }
  ]
})

let chartDiary = echarts.init(document.getElementById('chart_diary'))
chartDiary.setOption({
  tooltip: {
    trigger: 'axis'
  },
  legend: {},
  xAxis: {
    type: 'category',
    data: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021']
  },
  yAxis: [
    {
      type: 'value',
      min: 0,
      max: 150000
    },
    {
      type: 'value',
      min: 0,
      max: 150,
      position: 'right'
    }
  ],
  series: [
    {
      name: '字数',
      type: 'line',
      data: [3649, 134914, 17043, 34964, 31137, 10814, 15255, 17576, 14495, 17386, 2259, 16561],
      smooth: true
    },
    {
      name: '篇数',
      type: 'line',
      data: [7, 145, 36, 38, 34, 23, 15, 18, 20, 3, 2, 11],
      smooth: true,
      yAxisIndex: 1
    }
  ]
})

let chartMovie = echarts.init(document.getElementById('chart_movie'))
chartMovie.setOption({
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {},
  xAxis: {
    type: 'category',
    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: '电影',
      data: [5, 5, 1, 5, 4, 14, 21, 12, 14, 29, 9, 14],
      type: 'bar',
      stack: '观影量'
    },
    {
      name: '剧集',
      data: [7, 5, 6, 12, 8, 7, 2, 0, 1, 2, 4, 1],
      type: 'bar',
      stack: '观影量'
    },
    {
      name: '短片',
      data: [6, 16, 4, 10, 12, 0, 0, 0, 1, 9, 4, 0],
      type: 'bar',
      stack: '观影量'
    }
  ]
})

window.addEventListener('resize', () => {
  chartIncome.resize()
  chartExpense.resize()
  chartDiary.resize()
  chartMovie.resize()
})

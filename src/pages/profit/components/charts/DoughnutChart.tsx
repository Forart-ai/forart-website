import React from 'react'
import ReactECharts from 'echarts-for-react'
import { useMediaQuery } from 'react-responsive'

const DoughnutChart: React.FC = () => {

  const isMobile = useMediaQuery({ query: '(max-width: 1100px)' })

  const option = {
    tooltip: {
      show:false,
      trigger: 'item',
      formatter: '{b} : {c} ({d}%)'
    },
    legend: {
      show: false
    },
    color:['#7900FF','#93FFD8','#548CFF'],
    series: [
      {
        type: 'pie',
        radius: ['45%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 1,
          shadowColor: 'white',
          shadowBlur: 20
        },
        label: {
          show: true,
          position: isMobile ? 'inside' : 'outside',
          color: isMobile ? 'white' : 'inherit',
          formatter: '{b}  {d}%',
          fontSize: '18',
        },
        emphasis: {
          itemStyle:{
            color:'#191c21'
          },
          label: {
            show: true,
            fontWeight: 'bold',
            color:'inherit',
          },
        },
        labelLine: {
          show: true
        },
        data: [
          { value: 600, name: 'Artist' },
          { value: 300, name: 'Forart' },
          { value: 100, name: 'Creator' }
        ]
      }
    ]
  }

  return (

    <div>
      <ReactECharts
        option={option}
        style={isMobile ? { height: '400px', width: '100vw', margin: '0 auto' } : { height: '500px', width: '1500px', margin: '0 auto', paddingBottom: '100' }}
      />
    </div>
  )
}

export default DoughnutChart

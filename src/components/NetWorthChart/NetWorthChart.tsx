import * as React from 'react'
import {Chart} from 'chart.js'

class NetWorthChart extends React.Component {
  chartRef = React.createRef<HTMLCanvasElement>()

  state = {
    fidelity: [0, 3000, 6000, 12370, 18371],
    wisebanyan: [0, 1000, 1400, 3000, 4500],
  }

  componentDidMount() {
    const myChartRef = this.chartRef.current

    if (myChartRef) {
      const context = myChartRef.getContext('2d')
      if (context) {
        const data = this.state.fidelity.map((value, index) => {
          return (value += this.state.wisebanyan[index])
        })

        new Chart(context, {
          type: 'line',
          data: {
            labels: ['2016', '2017', '2018', '2019', '2020'],
            datasets: [
              {
                label: 'Savings Networth',
                data: data,
                backgroundColor: '#525252',
              },
            ],
          },
          options: {
            // customize chart options
          },
        })
      }
    }
  }

  render() {
    return (
      <div>
        <canvas ref={this.chartRef} />
      </div>
    )
  }
}

export default NetWorthChart

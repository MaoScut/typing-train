import highCharts from 'highcharts';
import React from 'react';

export default class Static extends React.Component {
  componentDidMount() {
    console.log('mount');
    this.props.actions.fetchSingleCharData();
  }
  componentDidUpdate() {
    console.log('update');
    const data = [];
    if (this.props.singleCharData) {
      Object.keys(this.props.singleCharData).forEach((key) => {
        data.push({
          name: key,
          data: this.props.singleCharData[key],
        });
      });
    }
    console.log(data);
    highCharts.chart(this.container, {
      title: {
        text: '近段时间字符的反应时间统计表',
      },
      yAxis: {
        title: {
          text: '反应时间',
        },
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
      },
      plotOptions: {
        series: {
          label: {
            connectorAllowed: false,
          },
          pointStart: 1,
        },
      },
      series: data,
      responsive: {
        rules: [{
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom',
            },
          },
        }],
      },
    });
  }
  render() {
    return (
      <div>
        <div ref={(container) => { this.container = container; }} />
        <button onClick={() => this.props.actions.enterSetting()}>返回</button>
      </div>
    );
  }
}

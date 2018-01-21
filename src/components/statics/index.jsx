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
        text: '2010 ~ 2016 年太阳能行业就业人员发展情况',
      },
      subtitle: {
        text: '数据来源：thesolarfoundation.com',
      },
      yAxis: {
        title: {
          text: '就业人数',
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
          pointStart: 2010,
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

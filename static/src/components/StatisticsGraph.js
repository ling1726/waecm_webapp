import React, {Component} from 'react';
import Chart from 'chart.js'

export default class StatisticsGraph extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return <div>
        <div className="row">
            <div className="col s12">
                <div className="card darken-1">
                    <div className="card-content">
                        <canvas id="stats-graph"></canvas>
                    </div>
                </div>
            </div>
        </div>
        </div>
    }

    componentDidUpdate(prevProps){
        console.log('component did update');

        if(prevProps.data !== this.props.data){
            // sorting object
            let keys = Object.keys(this.props.data).sort();
            let i, len = keys.length;

            let values = [];

            for (i = 0; i < len; i++) {
                let k = keys[i];
                values.push(this.props.data[k])
            }

            let ctx = document.getElementById("stats-graph");
            let myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: keys,
                    datasets: [{
                        label: 'Expenses',
                        data: values,
                        backgroundColor: [
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
        }

    }
}

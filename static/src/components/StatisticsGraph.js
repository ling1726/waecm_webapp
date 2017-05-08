import React, {Component} from 'react';
import Chart from 'chart.js'

export default class StatisticsGraph extends Component{
    constructor(props){
        super(props);
        this.state = {}
        this.state.chart = null;
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

        if(prevProps.data !== this.props.data || prevProps.diff !== this.props.diff){
            // sorting object
            let keys = Object.keys(this.props.data).sort();
            let i, len = keys.length;

            let values = [];

            for (i = 0; i < len; i++) {
                let k = keys[i];
                values.push(this.props.data[k])
            }

            let label = "Expenses";
            let borderColor = 'rgba(255, 159, 64, 1)';
            let backColor = 'rgba(255, 159, 64, 0.2)';
            if(this.props.diff){
                for(let i = 1; i < values.length; ++i){
                    values[i] = values[i] - values[i-1]
                }
                values.splice(0,1);
                keys.splice(0,1);
                label = "Difference to last";
                borderColor = 'rgba(224, 100, 100, 1)';
                backColor = 'rgba(224, 100, 100, 0.2)'
            }



            let ctx = document.getElementById("stats-graph");
            if(this.state.chart != null){
                this.state.chart.destroy();
            }
            this.state.chart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: keys,
                    datasets: [{
                        label: label,
                        data: values,
                        backgroundColor: [
                            backColor
                        ],
                        borderColor: [
                            borderColor
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

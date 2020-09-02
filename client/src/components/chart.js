import React from 'react';
import {Pie} from 'react-chartjs-2';


const PieChart = (props) => {
		let vote = props.vote;
		let votername = props.name;

		
		const data = {
			labels: votername,

			datasets: [{
				data: vote,
				backgroundColor: [
				'red',
				'#36A2EB',
				],
				hoverBackgroundColor: [
				'red',
				'#36A2EB',
				]
			}],

			options : { 
				  ///Other configurable options
				  tooltips: {

				 }
			}
		};
		
		return (
				<div className="card2">
	                    <Pie data={data} /> 
	            </div>
		);
	}

export default PieChart;
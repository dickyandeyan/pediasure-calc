const ctx = document.querySelectorAll('.myChart')

const data = {
	labels: ['Overweight', 'Normal', 'Undeweight'],
	datasets: [
		{
			label: 'My First Dataset',
			data: [300, 50, 100],
			backgroundColor: ['#0075FF', '#4318FF', '#E9EDF7'],
			hoverOffset: 10,
		},
	],
}

for (let i = 0; i < ctx.length; i++) {
	const myChart = new Chart(ctx[i], {
		type: 'doughnut',
		data: data,
		options: {
			plugins: {
				legend: {
					display: true,
					position: 'right',
					labels: {
						usePointStyle: true,
						pointStyle: 'circle',
						padding: 30,
					},
				},
            maintainAspectRatio: false,
				labels: {
					font: {
						size: 22,
					},
				},
			},
		},
	})
}

// const myChart = new Chart(ctx, {
// 	type: 'doughnut',
// 	data: data,
// 	options: {
// 		plugins: {
// 			legend: {
// 				display: true,
// 				position: 'right',
// 				labels: {
// 					usePointStyle: true,
// 					pointStyle: 'circle',
// 					padding: 30,
// 				},
// 			},
// 			title: {
// 				display: true,
// 				text: 'Custom Chart Title',
// 				align: 'center',
// 				fullSize: true,
// 			},
// 			labels: {
// 				font: {
// 					size: 18,
// 				},
// 			},
// 		},
// 	},
// })

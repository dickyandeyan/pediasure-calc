var header = document.getElementById('parent-li')
var btns = header.getElementsByClassName('menu')
for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener('click', function () {
		var current = document.getElementsByClassName('active-menu')
		current[0].className = current[0].className.replace(' active-menu', '')
		this.className += ' active-menu'
	})
}

const ctx = document.getElementById('myChart')
const data = {
	labels: ['Overweight', 'Normal', 'Undeweight'],
	datasets: [
		{
			label: 'My First Dataset',
			data: [300, 50, 100],
			backgroundColor: [
				'#0075FF',
				'#4318FF',
				'#E9EDF7',
			],
			hoverOffset: 10,
		},
	],
}
const myChart = new Chart(ctx, {
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
               padding: 30
            }
			},
			title: {
				display: true,
				text: 'Custom Chart Title',
				align: 'center',
				fullSize: true,
			},
			labels: {
				font: {
					size: 18,
				},
			},
		},
	},
})

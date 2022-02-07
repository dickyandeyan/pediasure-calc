// (() => {
// 	const month = [
// 		'Jan',
// 		'Feb',
// 		'March',
// 		'Apr',
// 		'May',
// 		'Jun',
// 		'Jul',
// 		'Aug',
// 		'Sep',
// 		'Oct',
// 		'Nov',
// 		'Des',
// 	]

// 	for (let i = 0; i < month.length; i++) {
// 		const spanElement = document.createElement('div')
// 		const monthLabel = document.createTextNode(month[i])
// 		spanElement.appendChild(monthLabel)
// 		document.getElementById('month').appendChild(spanElement)
// 	}
// })()

var header = document.getElementById('parent-li')
var btns = header.getElementsByClassName('menu')
for (var i = 0; i < btns.length; i++) {
   btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
}

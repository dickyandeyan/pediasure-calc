var header = document.getElementById('parent-li')
var btns = header.getElementsByClassName('menu')
for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener('click', function () {
		var current = document.getElementsByClassName('active-menu')
		current[0].className = current[0].className.replace(' active-menu', '')
		this.className += ' active-menu'
	})
}

const closeNav = async () => {
	const expandBtn = document.getElementById('expand-btn')
	const menuTitle = document.getElementById('support-title')
	const menuList = document.querySelector('.nav-sidebar-mobile')
	const getMainMenuList = menuList.querySelector('.main-menu')
	const getSupportMenuList = menuList.querySelector('.support-menu')
	const liListMain = getMainMenuList.childNodes
	const liListSupport = getSupportMenuList.childNodes
	const dataLiMain = liListMain[1].childNodes
	const dataLiSupport = liListSupport[3].childNodes

	document.getElementById('sidebar-mobile').style.width = '80px'
	document.getElementById('page-content').style.marginLeft = '80px'
	document.getElementById('page-content').classList.remove('moved')
	document.getElementById('doc-profile').style.display = 'none'
	expandBtn.classList.remove('d-none')
	menuTitle.classList.add('d-none')
	for (let i = 0; i < dataLiMain.length; i++) {
		if (i % 2 == 1) {
			let li = dataLiMain[i]
			let selectSpan = li.firstChild.nextSibling.querySelector('span')
			selectSpan.classList.add('d-none')
		}
	}
	for (let i = 0; i < dataLiSupport.length; i++) {
		if (i % 2 == 1) {
			let li = dataLiSupport[i]
			let selectSpan = li.firstChild.nextSibling.querySelector('span')
			selectSpan.classList.add('d-none')
		}
	}
}

const showNav = () => {
	const expandBtn = document.getElementById('expand-btn')
	const menuTitle = document.getElementById('support-title')
	const menuList = document.querySelector('.nav-sidebar-mobile')
	const getMainMenuList = menuList.querySelector('.main-menu')
	const getSupportMenuList = menuList.querySelector('.support-menu')
	const liListMain = getMainMenuList.childNodes
	const liListSupport = getSupportMenuList.childNodes
	const dataLi = liListMain[1].childNodes
	const dataLiSupport = liListSupport[3].childNodes

	document.getElementById('sidebar-mobile').style.width = '280px'
	document.getElementById('page-content').style.marginLeft = '0px'
	document.getElementById('page-content').classList.add('moved')
	document.getElementById('doc-profile').style.display = 'block'
	expandBtn.classList.add('d-none')
	menuTitle.classList.remove('d-none')
	for (let i = 0; i < dataLi.length; i++) {
		if (i % 2 == 1) {
			let li = dataLi[i]
			let selectSpan = li.firstChild.nextSibling.querySelector('span')
			selectSpan.classList.remove('d-none')
		}
	}
	for (let i = 0; i < dataLiSupport.length; i++) {
		if (i % 2 == 1) {
			let li = dataLiSupport[i]
			let selectSpan = li.firstChild.nextSibling.querySelector('span')
			selectSpan.classList.remove('d-none')
		}
	}
}

function resizeListener() {
	const width = window.innerWidth
	if (width >= 768) {
		document.getElementById('page-content').style.marginLeft = '280px'
	}

	if (width < 768) {
		closeNav()
	}
}

window.addEventListener('resize', resizeListener)


let searchPatientModal = new bootstrap.Modal(document.getElementById('searchPatient'))

const searchPatient = () => {
   searchPatientModal.show()
}


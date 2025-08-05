// slider start 

let _figure = document.querySelectorAll('#img>figure')

document.getElementById('img').style.width = 1000 * _figure.length + 'px'

for (i = 0; i < _figure.length; i++) {
    let _span = document.createElement('span')
    document.getElementById('bottom').appendChild(_span)
}

let _spanSelect = document.querySelectorAll('#bottom>span')

_spanSelect.forEach(function (val, index) {
    val.addEventListener('click', function () {

        for (i = 0; i < _spanSelect.length; i++) {
            _spanSelect[i].style.background = 'darkblue'
        }

        val.style.background = 'purple'
        document.getElementById('img').style.transform = 'translateX(-' + index * 1000 + 'px)'

    })
})

// end of slider 

// menu scroll 

let _main = document.getElementsByTagName('main')[0]
_main.addEventListener('scroll', function () {
    let _scrollTop = _main.scrollTop
    if (_scrollTop > 300) {
        document.getElementById('menu').classList.add('menuscroll')
    } else {
        document.getElementById('menu').classList.remove('menuscroll')
    }
})

// end of menu scroll  

// terms start 

let _ph = document.getElementById('_p').clientHeight - 400
document.getElementById('tc').addEventListener('scroll', function () {
    let _tcst = this.scrollTop
    console.log(_ph + '-' + _tcst)
    if (_tcst > _ph) {
        document.getElementsByTagName('input')[0].removeAttribute('disabled')
    }
})
document.getElementsByTagName('input')[0].addEventListener('click', function () {
    document.getElementById('_btn').removeAttribute('disabled')
})

// end of terms 
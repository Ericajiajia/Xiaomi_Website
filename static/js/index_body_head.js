// 轮播图相关元素
var imgs = document.getElementsByClassName("page-body-head-imgs")[0]
var imglis = imgs.getElementsByTagName('li')
var order = document.getElementsByClassName("page-body-head-order")[0]
var orderlis = order.getElementsByTagName('li')
var leftArray = document.getElementsByClassName('left-array')[0]
var rightArray = document.getElementsByClassName('right-array')[0]
var num = 0
var interval
// 偷懒使用统一产品
var boxBarImg = {
    'src': 'static/pic/box_bar_img.png',
    'name': '小米手机5c',
    'tag': '选购'
}
// 产品分类相关元素
var containerBar = document.getElementsByClassName('container-bar')[0]
var barLis = document.getElementsByClassName('page-body-head-box')[0].getElementsByTagName('li')
var boxBarImgs = document.getElementsByClassName('box-bar-img')
var boxBarName = document.getElementsByClassName('box-bar-name')
var boxBarTag = document.getElementsByClassName('box-bar-tag')
var boxBar = [
    document.getElementsByClassName('box-bar1')[0],
    document.getElementsByClassName('box-bar2')[0],
    document.getElementsByClassName('box-bar3')[0],
    document.getElementsByClassName('box-bar4')[0]
]

// 让当前图片及时显现
var play = function (num) {
  for (var i = 0; i < imglis.length; i++){
    imglis[i].className = ''
    orderlis[i].className = ''
  }
  imglis[num].className = 'on'
  orderlis[num].className = 'on'
}
// 让图片自动播放
var autoplay = function () {
  interval = setInterval (function () {
    num++
    num = num % 5
    play (num)
  }, 5000)
}
// 给按钮添加事件委托
for (var i = 0; i < orderlis.length; i++) {
    let _i = i
    orderlis[_i].addEventListener('click', function (e) {
        num = e.target.dataset.index
        play (num)
    })
}
leftArray.addEventListener('click', function () {
    num --
    num += 5
    num = num % 5
    play (num)
})
rightArray.addEventListener('click', function () {
    num ++
    num = num % 5
    play (num)
})
// 自动播放
autoplay()
// 产品分类按钮事件委托
containerBar.addEventListener('mouseover', function (e) {
    var num = e.target.parentNode.dataset.num, i
    for (i = 0; i < barLis.length; i ++) {
        let _i = i
        barLis[_i].style.display = 'none'
        if (_i < num) {
            barLis[_i].style.display = 'block'
            boxBarImgs[_i].src = boxBarImg.src
            boxBarImgs[_i].alt = boxBarImg.name
            boxBarName[_i].innerHTML = boxBarImg.name
            if (boxBarImg.tag) {
                boxBarTag[_i].innerHTML = boxBarImg.tag
            }   else {
                boxBarTag[_i].style.display = 'none'
            }
        }
    }
    for (i = 0; i < boxBar.length; i ++) {
        let _i = i
        boxBar[_i].style.display = 'none'
        if (_i < Math.ceil(num/6)) {
            boxBar[_i].style.display = 'block'
        }
    }
})
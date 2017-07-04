// 取出装所有明星产品的容器
var picsContainer = document.getElementsByClassName('pics-container')[0]
// 取出产品的相关信息
var picsImg = document.getElementsByClassName('pics-img')
var picsName = document.getElementsByClassName('pics-name')
var picsDetail = document.getElementsByClassName('pics-detail')
var picsPrice = document.getElementsByClassName('pics-price')
// 取出左右切换箭头
var moreLeftArray = document.getElementsByClassName('summary-more')[0].getElementsByTagName('div')[0]
var moreRightArray = document.getElementsByClassName('summary-more')[0].getElementsByTagName('div')[1]
// 计时器
var interval

// 给明星产品赋值
for (var i = 0; i < starsProduct.length; i ++) {
    let _i = i
    picsImg[_i].getElementsByTagName('img')[0].src = starsProduct[_i].src
    picsImg[_i].getElementsByTagName('img')[0].alt = starsProduct[_i].name
    picsName[_i].getElementsByTagName('a')[0].innerHTML = starsProduct[_i].name
    picsDetail[_i].innerHTML = starsProduct[_i].detail
    picsPrice[_i].innerHTML = starsProduct[_i].price
}
// 给明星产品栏添加自动变换事件
var starsChange = function () {
    interval = setInterval (function () {
        moreLeftArray.className = 'more-left-array'
        moreRightArray.className = 'more-right-array'
        if (picsContainer.offsetLeft === 0) {
            picsContainer.style.left = '-1230px'
            moreLeftArray.className = 'more-left-array1'
        }   else {
            picsContainer.style.left = '0px'
            moreRightArray.className = 'more-right-array1'
        }
    }, 6000)
}
starsChange()
// 给左右切换箭头添加事件
moreLeftArray.addEventListener('click', function () {
    if (picsContainer.offsetLeft === -1230) {
        picsContainer.style.left = '0px'
        moreLeftArray.className = 'more-left-array'
        moreRightArray.className = 'more-right-array1'
    }
})
moreRightArray.addEventListener('click', function () {
    if (picsContainer.offsetLeft === 0) {
        picsContainer.style.left = '-1230px'
        moreLeftArray.className = 'more-left-array1'
        moreRightArray.className = 'more-right-array'
    }
})
// 取出热评产品的元素进行赋值
var hotProductImg = document.getElementsByClassName('hot-product-img')
var hotProductUse = document.getElementsByClassName('hot-product-use')
var hotProductAuthor = document.getElementsByClassName('hot-product-author')
var hotProductName = document.getElementsByClassName('hot-product-name')
var hotProductPrice = document.getElementsByClassName('hot-product-price')
// 取出视频元素进行赋值
var videoImg = document.getElementsByClassName('video-img')
var videoLiName = document.getElementsByClassName('video-li-name')
var videoLiDescription = document.getElementsByClassName('video-li-description')
// 指示当前图片的序号
var index = [0, 0, 0, 0]
// 取出图片的元素
var contentContainer0 = document.getElementsByClassName('content-container0')
var contentContainer1 = document.getElementsByClassName('content-container1')
// 取出显示图片的点的元素
var contentPoints = document.getElementsByClassName('content-points')
// 取出每栏的左右箭头
var contentLeftArray = document.getElementsByClassName('content-left-array')
var contentRightArray = document.getElementsByClassName('content-right-array')


// 给视频元素赋值
for (var i = 0; i < videoImg.length; i ++) {
    let _i = i
    videoImg[_i].getElementsByTagName('img')[0].src = video[_i].src
    videoLiName[_i].getElementsByTagName('a')[0].innerHTML = video[_i].name
    videoLiDescription[_i].innerHTML = video[_i].description
}
// 给热评产品赋值
for (var i = 0; i < hotProductImg.length; i ++) {
    let _i = i
    hotProductImg[_i].getElementsByTagName('img')[0].src = hot[_i].src
    hotProductImg[_i].getElementsByTagName('img')[0].alt = hot[_i].name
    hotProductUse[_i].getElementsByTagName('a')[0].innerHTML = hot[_i].use
    hotProductAuthor[_i].innerHTML = hot[_i].author
    hotProductName[_i].innerHTML = hot[_i].name
    hotProductPrice[_i].innerHTML = hot[_i].price
}

// 定义点显示的函数
var pointsShow = function (_i, _j, index) {
    for (var i = 0; i < contentPoints[_i].getElementsByTagName('li').length; i ++) {
        let _k = i
        contentPoints[_i].getElementsByTagName('li')[_k].id = ''
    }
    contentPoints[_i].getElementsByTagName('li')[index].id = 'points-on'
}
// 给左右箭头和显示图片的点添加事件委托
for (var i = 0; i < contentLeftArray.length; i += 2) {
    let _i = i          // _i表示第几个框
    let _j = i / 2         //_j表示这种框的第几个
    contentLeftArray[_i].addEventListener('click', function () {
        switch (contentContainer0[_j].offsetLeft) {
            case 0:
                index[_i] = 0
                pointsShow(_i, _j, index[_i])
                break
            case -296:
                contentContainer0[_j].style.left = contentContainer0[_j].offsetLeft + 296 + 'px'
                index[_i] = 0
                pointsShow(_i, _j, index[_i])
                break
            case -592:
                contentContainer0[_j].style.left = contentContainer0[_j].offsetLeft + 296 + 'px'
                index[_i] = 1
                pointsShow(_i, _j, index[_i])
                break
            deflaut:
                break
        }
    })
    contentRightArray[_i].addEventListener('click', function () {
        switch (contentContainer0[_j].offsetLeft) {
            case -592:
                index[_i] = 2
                pointsShow(_i, _j, index[_i])
                break
            case -296:
                contentContainer0[_j].style.left = contentContainer0[_j].offsetLeft - 296 + 'px'
                index[_i] = 2
                pointsShow(_i, _j, index[_i])
                break
            case 0:
                contentContainer0[_j].style.left = contentContainer0[_j].offsetLeft - 296 + 'px'
                index[_i] = 1
                pointsShow(_i, _j, index[_i])
                break
            deflaut:
                break
        }
    })
    for (var ind = 0; ind < contentPoints[_i].getElementsByTagName('li').length; ind ++) {
        let _ind = ind
        contentPoints[_i].getElementsByTagName('li')[_ind].addEventListener('click', function (e) {
            let k = e.target.dataset.num*(-296)
            contentContainer0[_j].style.left = k + 'px'
            index[_i] = e.target.dataset.num
            pointsShow(_i, _j, index[_i])
        })
    }
}
for (var i = 1; i < contentLeftArray.length; i += 2) {
    let _i = i          // _i表示第几个框
    let _j = Math.floor(i / 2)         //_j表示这种框的第几个
    contentLeftArray[_i].addEventListener('click', function () {
        switch (contentContainer1[_j].offsetLeft) {
            case 0:
                index[_i] = 0
                pointsShow(_i, _j, index[_i])
                break
            case -296:
                contentContainer1[_j].style.left = contentContainer1[_j].offsetLeft + 296 + 'px'
                index[_i] = 0
                pointsShow(_i, _j, index[_i])
                break
            case -592:
                contentContainer1[_j].style.left = contentContainer1[_j].offsetLeft + 296 + 'px'
                index[_i] = 1
                pointsShow(_i, _j, index[_i])
                break
            case -888:
                contentContainer1[_j].style.left = contentContainer1[_j].offsetLeft + 296 + 'px'
                index[_i] = 2
                pointsShow(_i, _j, index[_i])
                break
            deflaut:
                break
        }
    })
    contentRightArray[_i].addEventListener('click', function () {
        switch (contentContainer1[_j].offsetLeft) {
            case -888:
                index[_i] = 3
                pointsShow(_i, _j, index[_i])
                break
            case -592:
                contentContainer1[_j].style.left = contentContainer1[_j].offsetLeft - 296 + 'px'
                index[_i] = 3
                pointsShow(_i, _j, index[_i])
                break
            case -296:
                contentContainer1[_j].style.left = contentContainer1[_j].offsetLeft - 296 + 'px'
                index[_i] = 2
                pointsShow(_i, _j, index[_i])
                break
            case 0:
                contentContainer1[_j].style.left = contentContainer1[_j].offsetLeft - 296 + 'px'
                index[_i] = 1
                pointsShow(_i, _j, index[_i])
                break
            deflaut:
                break
        }
    })
    for (var ind = 0; ind < contentPoints[_i].getElementsByTagName('li').length; ind ++) {
        let _ind = ind
        contentPoints[_i].getElementsByTagName('li')[_ind].addEventListener('click', function (e) {
            let k = e.target.dataset.num*(-296)
            contentContainer1[_j].style.left = k + 'px'
            index[_i] = e.target.dataset.num
            pointsShow(_i, _j, index[_i])
        })
    }
}
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
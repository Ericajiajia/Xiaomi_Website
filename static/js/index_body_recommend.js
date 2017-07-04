// 取出推荐产品的元素进行赋值
var recommendProducts = document.getElementsByClassName('recommend-products')[0]
var recommendProductsLis = document.getElementsByClassName('recommend-products')[0].getElementsByTagName('li')
var recommendProductImg = document.getElementsByClassName('recommend-product-img')
var recommendProductName = document.getElementsByClassName('recommend-product-name')
var recommendProductPrice = document.getElementsByClassName('recommend-product-price')
var recommendProductFavor = document.getElementsByClassName('recommend-product-favor')
// 取出左右切换箭头
var recommendLeftArray = document.getElementsByClassName('recommend-title-array')[0].getElementsByTagName('div')[0]
var recommendRightArray = document.getElementsByClassName('recommend-title-array')[0].getElementsByTagName('div')[1]

// 给产品信息赋值
for (var i = 0; i < recommendProductsLis.length; i ++) {
    let _i = i
    recommendProductImg[_i].getElementsByTagName('img')[0].src = recommend[_i].src
    recommendProductImg[_i].getElementsByTagName('img')[0].alt = recommend[_i].name
    recommendProductName[_i].getElementsByTagName('a')[0].innerHTML = recommend[_i].name
    recommendProductPrice[_i].innerHTML = recommend[_i].price
    recommendProductFavor[_i].innerHTML = recommend[_i].favor
}
// 给左右切换箭头添加事件
recommendLeftArray.addEventListener('click', function () {
    switch (recommendProducts.offsetLeft) {
        case 0: 
            recommendLeftArray.className = 'recommend-title-left-array'
            recommendRightArray.className = 'recommend-title-right-array1'
            break
        case -1227: 
            recommendProducts.style.left = recommendProducts.offsetLeft + 1227 + 'px'
            recommendLeftArray.className = 'recommend-title-left-array'
            recommendRightArray.className = 'recommend-title-right-array1'
            break
        case -2454: 
        case -3681: 
            recommendProducts.style.left = recommendProducts.offsetLeft + 1227 + 'px'
            recommendLeftArray.className = 'recommend-title-left-array1'
            recommendRightArray.className = 'recommend-title-right-array1'
            break
        default:
            break
    }
})
recommendRightArray.addEventListener('click', function () {
    switch (recommendProducts.offsetLeft) {
        case -3681: 
            recommendLeftArray.className = 'recommend-title-left-array1'
            recommendRightArray.className = 'recommend-title-right-array'
            break
        case -2454: 
            recommendProducts.style.left = recommendProducts.offsetLeft - 1227 + 'px'
            recommendLeftArray.className = 'recommend-title-left-array1'
            recommendRightArray.className = 'recommend-title-right-array'
            break
        case -1227: 
        case 0: 
            recommendProducts.style.left = recommendProducts.offsetLeft - 1227 + 'px'
            recommendLeftArray.className = 'recommend-title-left-array1'
            recommendRightArray.className = 'recommend-title-right-array1'
            break
        default:
            break
    }
})
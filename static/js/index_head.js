var sortsContainer = document.getElementsByClassName('sorts-container')[0]
var sortsProduct = document.getElementsByClassName('sorts-product')
var productApart = document.getElementsByClassName('product-apart')
var productTag = document.getElementsByClassName('product-tag')
var productImg = document.getElementsByClassName('product-img')
var productImgLink = document.getElementsByClassName('product-img-link')
var productName = document.getElementsByClassName('product-name')
var productPrice = document.getElementsByClassName('product-price')
var followSorts = document.getElementsByClassName('follow-sorts')[0]
var followSortsLI = followSorts.getElementsByTagName('li')
// 搜索栏的元素
var searchInput = document.getElementsByClassName('search-input')[0]
var searchSubmit = document.getElementsByClassName('search-submit')[0]
var searchKeywords = document.getElementsByClassName('search-keywords')[0]
var searchHotWords = document.getElementsByClassName('search-hot-words')[0]

// 对产品展示传参
var productShow = function (sort1) {
    var i
    sortsContainer.style.display = 'block'
    for (i = 0; i < sortsProduct.length; i++) {
        let _i = i
        if (_i < productApart.length) {
            productApart[_i].style.display = 'none'
        }
        sortsProduct[_i].style.display = 'none'
    }
    for (i = 0; i < sort1.length; i++) {
        let _i = i
        sortsProduct[_i].style.display = 'block'
        if (sort1[_i].tag) {
            productImg[_i].className = 'product-img'
            productTag[_i].style.display = 'block'
            productTag[_i].innerHTML = sort1[_i].tag
        } else {
            productImg[_i].className = 'product-img product-img-add'
            productTag[_i].style.display = 'none'
        }
        productImgLink[_i].getElementsByTagName('img')[0].src = sort1[_i].src
        productImgLink[_i].getElementsByTagName('img')[0].alt = sort1[_i].name
        productName[_i].getElementsByTagName('a')[0].innerHTML = sort1[_i].name
        productPrice[_i].innerHTML = sort1[_i].price
        if (_i < sort1.length - 1) {
            productApart[_i].style.display = 'block'
        }
    }
}
// 鼠标滑过产品分类的事件委托
followSorts.addEventListener('mouseover', function (e) {
    switch (e.target.innerHTML) {
        case '小米手机': productShow(sort1)
            break
        case '红米': productShow(sort2)
            break
        case '平板·笔记本': productShow(sort3)
            break
        case '电视': productShow(sort4)
            break
        case '盒子·影音': productShow(sort5)
            break
        case '路由器': productShow(sort6)
            break
        case '智能硬件': productShow(sort7)
            break
        case '服务': sortsContainer.style.display = 'none'
            break
        case '社区': sortsContainer.style.display = 'none'
            break
        default: break
    }
})
followSorts.addEventListener('mouseout', function () {
})
// 搜索栏的事件委托
searchInput.addEventListener('focus', function () {
    searchKeywords.style.display = 'block'
    searchHotWords.style.opacity = '0'
    searchSubmit.className = 'search-submit search-border'
    searchInput.className = 'search-input search-border'
})
searchInput.addEventListener('blur', function () {
    searchKeywords.style.display = 'none'
    searchHotWords.style.opacity = '1'
    searchSubmit.className = 'search-submit'
    searchInput.className = 'search-input'
})
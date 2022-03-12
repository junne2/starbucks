// 돋보기 아이콘에도 효과 적용
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener('click',function () {
    //Logic..
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus',function () {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur',function () {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});

//  연도변수
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //2021

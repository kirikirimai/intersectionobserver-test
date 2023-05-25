$(function () {
    $('nav a[href^="#"]').click(function () {
        var adjust = 0;
        var speed = 400;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top + adjust;
        $('body,html').animate({ scrollTop: position }, speed, 'swing');
        return false;
    });

})

window.addEventListener('DOMContentLoaded', function () {

    let observer = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                console.log(entry.target.id + ' is intersecting');


                //すでにアクティブになっているものが0個の時（=null）以外は、activeクラスを除去
                const currentActiveImg = document.querySelector("#js-photo .active");
                if (currentActiveImg !== null) {
                    currentActiveImg.classList.remove("active");
                }

                let targetId = entry.target.id;
                let imgElement = document.querySelector(`.${targetId}`);
                if (imgElement) {
                    imgElement.classList.add("active");
                }

                // すでにアクティブになっているものが0個の時（=null）以外は、activeクラスを除去
                const currentActiveIndex = document.querySelector("#js-nav .active");
                if (currentActiveIndex !== null) {
                    currentActiveIndex.classList.remove("active");
                }

                // 引数で渡されたDOMが飛び先のaタグを選択し、activeクラスを付与
                const newActiveIndex = document.querySelector(`#js-nav a[href='#${entry.target.id}']`);
                newActiveIndex.classList.add("active");


            } else {

                if (entry.target.id === 'content1') {
                    let getActiveIndex = document.querySelector("#js-nav .active");
                    let getActiveImg = document.querySelector("#js-photo .active");

                    if (getActiveIndex !== null) {
                        //active削除
                        getActiveIndex.classList.remove("active");
                    }

                    if (getActiveImg !== null) {
                        //active削除
                        getActiveImg.classList.remove("active");
                    }
                }
            }

        });
    }, { rootMargin: '-50% 0px' });

    let targets = document.querySelectorAll('.scroll__target');

    targets.forEach(target => {
        if (target) {
            observer.observe(target);
        } else {
            console.log('target element not found');
        }
    });

});


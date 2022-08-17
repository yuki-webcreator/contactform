// drawer
$('.drawer-icon, .drawer-background, .drawer-content-item, .drawer-item-link, .drawer-nav-item-link-sub').on('click', function () {
    // クリックした時にis-activeがついていたら外す、ついていなかったら付ける！
    $('.drawer-icon').toggleClass('is-active');
    $('.drawer-content').toggleClass('is-active');
    $('.drawer-background').toggleClass('is-active');

});


// model
$(function() {
    $('.open').click(function(){
     $('.model').fadeIn();
    });
     $('.close').click(function(){
    $('.model').fadeOut();
    });
    $('.model-bg').click(function(){
      $('.model').fadeOut();
      });
  });  


  // スムーススクロール
$(function(){
    // #で始まるa要素をクリックした場合に処理（"#"←ダブルクォーテンションで囲むのを忘れずに。忘れるとjQueryのバージョンによっては動かない。。）
    $('a[href^="#"]').click(function(){
      // 移動先を0px調整する。0を30にすると30px下にずらすことができる。
      var adjust = 60;
      // スクロールの速度（ミリ秒）
      var speed = 1000;
      // アンカーの値取得 リンク先（href）を取得して、hrefという変数に代入
      var href= $(this).attr("href");
      // 移動先を取得 リンク先(href）のidがある要素を探して、targetに代入
      var target = $(href == "#" || href == "" ? 'html' : href);
      // 移動先を調整 idの要素の位置をoffset()で取得して、positionに代入
      var position = target.offset().top - adjust;
      // スムーススクロール linear（等速） or swing（変速）
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
    });
  });


  // wow.js アニメーション
new WOW().init();

// bird
VANTA.BIRDS({
  el: "#bird",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00
});

$(function () {
  $(".me-inner > ul > li").mouseover(function () {
    $("s-menu > ul > li > ul").stop().slideDown();
  });

  $(".me-inner > ul > li").mouseout(function () {
    $("s-menu > ul > li > ul").stop().slideUp();
  });

  const slideList = $(".s-list");
  const slideWidth = $(".slide").width();
  const slideInitFnc = () => {
    slideList.css({ marginLeft: 0 }).find("li:first").appendTo(slideList);
  };

  const moveSlideFnc = () => {
    slideList.animate({ marginLeft: -slideWidth }, 1000, slideInitFnc);
  };

  setInterval(moveSlideFnc, 3000);

  $(document).ready(function () {
    // 페이지 로드 시 팝업 창 표시
    $("#overlay, #alert-box").fadeIn();

    // 팝업 창 닫기 버튼 클릭 시 숨기기
    $("#close-alert").click(function () {
      $("#overlay, #alert-box").fadeOut();
    });
  });
});

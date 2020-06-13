$(window).scroll(function () {
  var height = document.body.scrollHeight - window.innerHeight;
  var scrollY = window.scrollY;
  percent = 100;
  if (height > 0) {
    percent = Math.floor((scrollY / height) * 100);
    $("#scrollbar").css("width", percent + "%");
  }
});

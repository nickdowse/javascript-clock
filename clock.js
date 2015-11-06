$(document).ready(function () {
  function setTime() {
    var today = new Date();
    $("#hours").text(today.getHours())
    $("#minutes").text(today.getMinutes())
    $("#seconds").text(today.getSeconds())
    $("#milliseconds").text(today.getMilliseconds())
  }

  var myTime = setInterval(
    function() { 
      setTime()
    },
    1000
  );

});

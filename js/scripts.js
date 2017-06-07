$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var stringToTranslate = [];
    var str = $("#userInput").val();
    var splitStr = str.split();
    stringToTranslate.push(splitStr);
    console.log(stringToTranslate);
    var vow = ['a','e','i','o','u'];

    var stringToTranslate = stringToTranslate.toString();


    if(vow.indexOf(stringToTranslate.charAt(0)) !== -1) {
      stringToTranslate += "way";
    }
    while(vow.indexOf(stringToTranslate.charAt(0)) === -1) {
      stringToTranslate = str.substr(1) + str.charAt(0) + "ay";
    }

    alert(stringToTranslate);
  });
});

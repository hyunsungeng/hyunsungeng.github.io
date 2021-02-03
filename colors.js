
var Body = {
  setColor: function(color){
    // var target = document.querySelector('body');
    // target.style.color=color;
    $('body').css('color',color);
  },
  setBGColor: function(color){
    // var target = document.querySelector('body');
    // target.style.backgroundColor=color;
    $('body').css('backgroundColor',color);
  }
}
var Links = {

  setColor: function(color){
    // var alist = document.querySelectorAll('a');
    // var i=0;
    // while (i < alist.length){
    //   alist[i].style.color = color;
    //   i = i + 1;
    // }
    $('a').css('color', color);
  }
}
function bwaColor(self){
  if(self.value === 'black'){
   Body.setBGColor('black');
   Body.setColor('white');
   self.value = 'white';
   Links.setColor('powderblue');
 }
 else {
   Body.setBGColor('white');
   Body.setColor('black');
   self.value = 'black';
   Links.setColor('black');
      }
  }

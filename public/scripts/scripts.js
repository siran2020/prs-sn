var player_name = localStorage.getItem("player_name");


console.log("test");

///////////////////Event Listions//////////////////
document.getElementById("player_weapon").addEventListener("change", function(){
  console.log("player weapon working");


});
//console.log(document.getElementById("villain_dropdown"));

document.getElementById("villain_dropdown").addEventListener("change", function(){
  console.log("villain image working");
  var image = document.getElementById("villain_image");
  var select = document.getElementsByTagName('select')[1];
  console.log(select);
  image.src = select.value;
  //console.log(image.src);
  console.log('set src to ' + select.value);

});

///////////////////Helper function//////////////////
function updateNames(name){
  var name_spots=document.getElementsByClassName("player_name_span");
  for(var i=0; i<name_spots.length;i++){
    console.log(name_spots[i]);
    name_spots[i].innerHTML = name;
  }
}

/*function showOrNot(div_element, show){
  if(show && div_element.classList.contains("hidden")){
    div_element.classList.remove("hidden");
    div_element.classList.add("visible");
  }else if(!show && div_element.classList.contains("visible")){
    div_element.classList.remove("visible");
    div_element.classList.add("hidden");
    }
    //
}

function toggleVisibility(button_element, div_element){
  button_element.addEventListener("click", function(){
    if(div_element.classList.contains("hidden")){
      div_element.classList.remove("hidden");
      div_element.classList.add("visible");
    }else{
      div_element.classList.remove("visible");
      div_element.classList.add("hidden");
      }
  });
}*/

//function villainImage() {
//  console.log("villainImage working");
//  var image = document.getElementById("villain_image");
//  var select = document.getElementsByTagName('select')[1];
//  image.src = select.value.charAt(0).toLowerCase();
//  console.log('set src to ' + select.value);
//}

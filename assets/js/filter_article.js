filterSelection("all")
function filterSelection() {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  filter1=document.getElementsByClassName('selector')[0].value
  filter2=document.getElementsByClassName('selector')[1].value
  filter3=document.getElementsByClassName('selector')[2].value

  if (filter1 == "all") filter1 = "";
  if (filter2 == "all") filter2 = "";
  if (filter3 == "all") filter3 = "";

  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(filter1) > -1 && x[i].className.indexOf(filter2) > -1 && x[i].className.indexOf(filter3) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

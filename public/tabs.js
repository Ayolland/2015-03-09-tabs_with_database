function bootVars(){
  navElement = document.getElementsByTagName("nav")[0];
  navLinksArray = navElement.firstElementChild.children;
  generalInfoLink = navLinksArray[0].firstElementChild;
  technicalSpecsLink = navLinksArray[1].firstElementChild;
  whereToBuyLink = navLinksArray[2].firstElementChild;
  adminLink = navLinksArray[3].firstElementChild;
  generalInfoDiv = document.getElementById("general_info");
  technicalSpecsDiv = document.getElementById("technical_specs");
  whereToBuyDiv = document.getElementById("where_to_buy");
  adminDiv = document.getElementById("admin")
  
  surface(navLinksArray[0]);
  surface(generalInfoDiv);
  
  generalInfoLink.addEventListener("click", showGeneralInfo);
  technicalSpecsLink.addEventListener("click", showTechnicalSpecs);
  whereToBuyLink.addEventListener("click", showWhereToBuy);
  adminLink.addEventListener("click",showAdmin);
  
}

window.onload = bootVars;

function surface(element){
  element.style.background = "lightyellow";
  element.style.zIndex = "4"
}

function sink(element){
  element.style.background = "white";
  element.style.zIndex = "0"
}

function showGeneralInfo(){
  surface(navLinksArray[0]);
  sink(navLinksArray[1]);
  sink(navLinksArray[2]);
  sink(navLinksArray[3]);
  surface(generalInfoDiv);
  sink(technicalSpecsDiv);
  sink(whereToBuyDiv);
  sink(adminDiv);
}

function showTechnicalSpecs(){
  sink(navLinksArray[0]);
  surface(navLinksArray[1]);
  sink(navLinksArray[2]);
  sink(navLinksArray[3]);
  sink(generalInfoDiv);
  surface(technicalSpecsDiv);
  sink(whereToBuyDiv);
  sink(adminDiv);
}

function showWhereToBuy(){
  sink(navLinksArray[0]);
  sink(navLinksArray[1]);
  surface(navLinksArray[2]);
  sink(navLinksArray[3]);
  sink(generalInfoDiv);
  sink(technicalSpecsDiv);
  surface(whereToBuyDiv);
  sink(adminDiv);
}

function showAdmin(){
  sink(navLinksArray[0]);
  sink(navLinksArray[1]);
  sink(navLinksArray[2]);
  surface(navLinksArray[3]);
  sink(generalInfoDiv);
  sink(technicalSpecsDiv);
  sink(whereToBuyDiv);
  surface(adminDiv);
}



const categorias ={
    gestion : ["SQLSERVER","MONGODB","MYSQL","PANDAS"],
    lenguajes : ["C#","PYTHON","JAVASCRIPT","PHP","JAVA"],
    aplicaciones : ["UNITY","GIT","Anydesk",]
}


const DataManagement = document.getElementById("Data-Management-button");
const Language = document.getElementById("Language-button");
const Apps = document.getElementById("OtherApss-button");


const subButtons = document.querySelectorAll(".Main-Second-part-Button-sub-btn");
const panel = document.getElementById("Main-Second-part-side-div-Section-Panel");



function setButtons(items){
  subButtons.forEach((element, index) => {
    if (index < items.length) {
      element.textContent = items[index];
      element.dataset.original = items[index]; 
    } else {
      element.textContent = "";
      element.dataset.original = "";
    }
  });
};


DataManagement.onclick = () => setButtons(categorias.gestion);
Language.onclick = () => setButtons(categorias.lenguajes);
Apps.onclick = () => setButtons(categorias.aplicaciones);


subButtons.forEach(element => {
  element.addEventListener("mouseenter", () => {
    const original = element.dataset.original || element.textContent;
    element.textContent = original + " Ver más";
  });

  element.addEventListener("mouseleave", () => {
    const original = element.dataset.original || element.textContent;
    element.textContent = original;
  });
});

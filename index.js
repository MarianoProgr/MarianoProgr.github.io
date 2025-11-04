    const categorias ={
        gestion : ["SQLSERVER","MONGODB","MYSQL","PANDAS"],
        lenguajes : ["C#","PYTHON","JAVASCRIPT","PHP","JAVA"],
        aplicaciones : ["UNITY","GIT","Anydesk",]
    };

    const ChangeArea = document.getElementById("Main-Second-part-side-div-Section-Panel");

    const DataManagement = document.getElementById("Data-Management-button");
    const Language = document.getElementById("Language-button");
    const Apps = document.getElementById("OtherApss-button");


    let subButtons = Array.from(document.querySelectorAll(".Main-Second-part-Button-sub-btn"));
    const panel = document.getElementById("Main-Second-part-side-div-Section-Panel");
    let counter = 0;


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

      function CreateButton(contenido)
      {
              const boton =  document.createElement("button");
              boton.textContent = contenido;
              boton.className ="Main-Second-part-Button-sub-btn";
              boton.addEventListener("click", () => {alert("En desarrollo");});

              boton.addEventListener("mouseenter", () => {
                const original = boton.dataset.original || boton.textContent;
                boton.textContent = original + " VER MÁS";
              });

              boton.addEventListener("mouseleave", () => {
                const original = boton.dataset.original || boton.textContent;
                boton.textContent = original;
              });

              ChangeArea.appendChild(boton);
              subButtons.push(boton);
      };

      
      function UpdatePanel(CantidadNecesitada, items)
      {
        let cantidadActual = subButtons.length;
        let cantidadNueva = CantidadNecesitada;

        if(cantidadActual > cantidadNueva)
        {
            for (let i = 0; i < cantidadNueva; i++) {
                  subButtons[i].textContent = items[i];
                  subButtons[i].dataset.original = items[i];
            }
            
            for (let i = cantidadNueva; i < cantidadActual; i++) {
              subButtons[i].remove();
            }

            subButtons = Array.from(document.querySelectorAll(".Main-Second-part-Button-sub-btn"));

        }else
        {
            for (let i = cantidadActual; i < cantidadNueva; i++) {
              CreateButton(items[i])
            }
            for (let i = 0; i < cantidadNueva; i++) {
                  subButtons[i].textContent = items[i];
                  subButtons[i].dataset.original = items[i];
            }
        }
        
        subButtons = Array.from(document.querySelectorAll(".Main-Second-part-Button-sub-btn"));
      };


    DataManagement.onclick = () =>{UpdatePanel(categorias.gestion.length,  categorias.gestion); console.log("Toque Gestion");}

    Language.onclick = () => {UpdatePanel(categorias.lenguajes.length, categorias.lenguajes);console.log("Toque Lenguajes");};
    
    Apps.onclick = () => {UpdatePanel(categorias.aplicaciones.length, categorias.aplicaciones); console.log("Toque apps");};


      

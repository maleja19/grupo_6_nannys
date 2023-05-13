window.addEventListener("load",function(){

    let formulario = document.querySelector(".create-form");

    
    
    
    let campoEmail =document.getElementById('email')    
    let campoPassword =document.getElementById('password')
   



   
    formulario.addEventListener("submit",function(e){
    
        let errores =[];          
       
       

      if(campoEmail.value ==""){
            errores.push("*El campo de email debe estar completo")      }

        

        if(campoPassword.value ==""){
            errores.push("*El campo de password debe estar completo")
        }   

        if(campoPassword.value.length < 8 ){
            errores.push("*El campo de password debe tener mas de 8 y menos de 50 caracteres")}

                     


        if(errores.length >0){
            e.preventDefault();

            let ulErrores = document.querySelector(".errores ul");
            console.log(ulErrores)
            for(let i=0; i< errores.length; i++){
                ulErrores.innerHTML += "<li>"+errores[i]+"</li>"
            }

        }
    })



  
           
    },

    



    
)
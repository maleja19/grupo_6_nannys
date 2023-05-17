window.addEventListener("load",function(){

    let formulario = document.querySelector(".create-form");

    let campoImg =document.getElementById('img')
    
    let campoNombre =document.getElementById('nombre')
    let campoApellido=document.getElementById('apellido')
    let campoEmail =document.getElementById('email')
    let campoPassword =document.getElementById('password')
    let campoUsername =document.getElementById('username')
  



   
    formulario.addEventListener("submit",function(e){
    
        let errores =[];     
        
        let imagen=campoImg.value
        let extension=(imagen.split(".").pop());

        if(extension!='jpg'&&extension!='png'&&extension!='jpeg'&&extension!='gif'){
            errores.push('*Debes subir un archivo jpg,jpeg,png,gif')
        }
        
             
        if(campoNombre.value ==""){
            errores.push("*El campo de nombre debe estar completo")}      
            
        if(campoNombre.value.length <= 2){
            errores.push("*El campo de nombre debe tener mas de 2 caracteres")}
    
        
        
        if(campoApellido.value ==""){
            errores.push("*El campo de apellido debe estar completo")
        }

        if(campoApellido.value.length <= 2){
            errores.push("*El campo de apellido debe tener mas de 2 caracteres")}
       

      if(campoEmail.value ==""){
            errores.push("*El campo de email debe estar completo")      }
        
        if(campoUsername.value ==""){
            errores.push("*El campo de username debe estar completo")    }

        

        if(campoPassword.value ==""){
            errores.push("*El campo de password debe estar completo")
        }   

        if(campoPassword.value.length <= 8 ){
            errores.push("*El campo de password debe tener mas de 8 y menos de 50 caracteres")}
        

      


        if(errores.length >0){
            e.preventDefault();

            let ulErrores = document.querySelector(".errores ul");
            ulErrores.innerHTML="";
               for(let i=0; i< errores.length; i++){
            ulErrores.innerHTML += "<li>"+errores[i]+"</li>"
            }

        }

    })



  
           
    },

    



    
)

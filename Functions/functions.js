let nombrePaciente 
let apellidoPaciente
let numeroDni 
let consultorioElegido
let diaElegido
let horarioElegido

//Sidebar function

function openNav() {
    document.getElementById("mySidebar").style.width = "500px";
    document.getElementById("main").style.marginLeft = "500px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }
 


 

//Funcion para mostrar los dias del consultorio
function mostrarDias(){
    let nombre = document.getElementById('name').value;
	let apellido = document.getElementById('lastName').value;
	let DNI = document.getElementById('DNI').value;

	if (nombre === '' || apellido === '' || DNI === ''){
		alert ("Todos los campos son obligatorios");
		return false;
	}
	

    var var1 = document.getElementById('consSelect').value;
    var var2 = document.getElementById('vcDays');   
    var var3 = document.getElementById('lDays');
    if(var1=="Villa Crespo"){
        var2.style.display="block";
    }
    else{
        var2.style.display="none";
    }

    if(var1=="Lanus"){
        var3.style.display="block";
    }
    else{
        var3.style.display="none";
    }
    return consultorioElegido = var1;

}


function mostrarHorarios (event) {
    diaElegido = event.target.value; 
    let var5 = document.getElementById('lHours');
    let var6 = document.getElementById('vcHours');
    

    if(diaElegido=="Lunes" || diaElegido== "Miercoles" || diaElegido=="Viernes"){
        var5.style.display="block";
        
    }
    else{
        var5.style.display="none";       
        
    }
    if(diaElegido=="Martes" || diaElegido== "Jueves" || diaElegido=="Sabado"){
        var6.style.display="block";
        

    }
    else{
        var6.style.display="none";        
        
    }
    
    return diaElegido;
}

function obtenerHorario (event) {
    horarioElegido = event.target.value;     
    let turnoConfirm = document.getElementById('turnoConfirm');

    if(horarioElegido=="14-15" || horarioElegido== "15-16" || horarioElegido=="17-18"
        || horarioElegido=="9-10" || horarioElegido=="10-11" || horarioElegido=="11-12"){
        
        turnoConfirm.style.display="block";
    }
    else {
        turnoConfirm.style.display="none";

    }
   
    return horarioElegido;

}

//Funcion que guarda los datos del paciente


const pedirDatos = () => {
    idCount = datosPacientes.length
    nombrePaciente = $('#name').val();
    apellidoPaciente = $('#lastName').val();
    numeroDni = $('#DNI').val();
    datosPacientes.push ({id:idCount,Nombre:nombrePaciente,Apellido:apellidoPaciente,DNI:numeroDni,Consultorio:consultorioElegido,Dia:diaElegido,Horario:horarioElegido})
    localStorage.setItem ('Pacientes', JSON.stringify(datosPacientes) );

    let pacienteActual = [{Nombre:nombrePaciente,Apellido:apellidoPaciente,DNI:numeroDni,Consultorio:consultorioElegido,Dia:diaElegido,Horario:horarioElegido}];
    
    pacienteActual.forEach(e => {
        const midiv = document.getElementById('infoModal');
        const div = document.createElement("div");        
        div.classList.add("modal-info")
        midiv.innerHTML = ""
        div.innerHTML =
            `
            <div class="modal-text">                                              
            <p >Hola ${e.Nombre} ${e.Apellido}</p>
            <p> Tienes turno en ${e.Consultorio}  para el dia ${e.Dia} de ${e.Horario} </p>
            <p> Gracias por elegirnos! </p>  
            </div>
        `;
        midiv.appendChild(div)      
        })

        misTurnosBtn.style.display="block";
}



const miTurno = () => {
    let pacienteActual = [{Nombre:nombrePaciente,Apellido:apellidoPaciente,DNI:numeroDni,Consultorio:consultorioElegido,Dia:diaElegido,Horario:horarioElegido}];
    
    pacienteActual.forEach(e => {
        const midiv = document.getElementById('insideSidebar');
        const div = document.createElement("div");        
        div.classList.add("sidebar-info")
        midiv.innerHTML = ""
        div.innerHTML =
            `
            <div class="sidbar-text">                                              
            <p >Hola ${e.Nombre} ${e.Apellido}</p>
            <p> Tienes turno en ${e.Consultorio}  para el dia ${e.Dia} de ${e.Horario} </p>
            <p> Gracias por elegirnos! </p>  
            </div>
        `;
        midiv.appendChild(div)      
        })
}



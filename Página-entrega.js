let formulario = document.querySelector("#formulario");
let erro1 = document.querySelector("#erro1");
let erro2 = document.querySelector("#erro2");
let erro3 = document.querySelector("#erro3");
let erro4 = document.querySelector("#erro4");
let erro5 = document.querySelector("#erro5");
let erro6 = document.querySelector("#erro6");
let erro7 = document.querySelector("#erro7");
let nome = document.querySelector("#nome");
let cpf = document.querySelector("#cpf");
let senha = document.querySelector("#senha");
let Csenha = document.querySelector("#Csenha");
let profissao = document.querySelector("#pro");
let estado = document.querySelector("#estado")
let exp = document.querySelector("#exp");
let botao1 = document.querySelector("#botao1");
let output = document.getElementById("output");
const radio = document.getElementsByName("est");
let teste = true;
let teste2 = true
let count=0;
let count2=0;
const botão = document.getElementById("botão");

function AtivarMenu(event) {
    if (event.type === "touchstart") event.preventDefault ();
    const nav = document.getElementById("nav");  
    nav.classList.toggle("active");
    const active = nav.classList.contains("active");
    event.currentTarget.setAttribute("aria-expanded", active);
    if(active) {
        event.currentTarget.setAttribute("aria-label", "Fechar Menu");
    } else {
        event.currentTarget.setAttribute("aria-label", "Abrir Menu");
    }
}

botão.addEventListener("click", AtivarMenu);
botão.addEventListener("touchstart", AtivarMenu);

function verifica1(){
    if (document.querySelector("#erroNome") != null) {
        nome.style.borderColor = "black";
    }
    if (document.querySelector("#erroCpf") != null) {
        cpf.style.borderColor = "black";
    }
    if (document.querySelector("#erroSenha") != null) {
        senha.style.borderColor = "black"; 
    }
    if (document.querySelector("#erroCSenha") != null) {
        Csenha.style.borderColor = "black"; 
    }
    document.querySelector("#erro1").innerHTML="";
    document.querySelector("#erro2").innerHTML="";
    document.querySelector("#erro3").innerHTML="";
    document.querySelector("#erro4").innerHTML="";
    count=0;
    vNome();
    vCpf();
    vSenha();
    vCSenha();
    if (count==0){
        if (teste == true){
            novoF();
            teste = false
        }
    }
}


function vNome() {
    
    if (nome.value == "") {
            let erroDiv = document.createElement("div");
            erroDiv.setAttribute("id","erroNome");
            let erroTexto = document.createTextNode("Preencha o campo 'nome'.");
            let br = document.createElement("br")
            erro1.appendChild(br)
            erroDiv.appendChild(erroTexto);
            erro1.appendChild(erroDiv);
            let ln = document.createElement("br");
            erro1.appendChild(ln);
            nome.style.borderColor = "red";
            nome.focus();
            count++;
    }
}
function vCpf() {
    
    if (cpf.value == "" || cpf.value.length != 11) {
        
            let erroDiv = document.createElement("div");
            erroDiv.setAttribute("id","erroCpf");
            let erroTexto = document.createTextNode("O campo cpf deve ter 11 caracteres.");
            let br = document.createElement("br")
            erro2.appendChild(br)
            erroDiv.appendChild(erroTexto);
            erro2.appendChild(erroDiv);
            let ln = document.createElement("br");
            erro2.appendChild(ln);
            cpf.style.borderColor = "red";
            cpf.focus();
            count++;
        }
    }
function vSenha() {
    
    if (senha.value == "" || senha.value.length != 8) {
        
                let erroDiv = document.createElement("div");
                erroDiv.setAttribute("id","erroSenha");
                let erroTexto = document.createTextNode("A senha deve ter 8 caracteres.");
                let br = document.createElement("br")
                erro3.appendChild(br)
                erroDiv.appendChild(erroTexto);
                erro3.appendChild(erroDiv);
                let ln = document.createElement("br");
                erro3.appendChild(ln);
                senha.style.borderColor = "red";
                senha.focus();
                count++;
        }  
    }
    function vCSenha() {
    
    if (Csenha.value != senha.value) {
        
                let erroDiv = document.createElement("div");
                erroDiv.setAttribute("id","erroCSenha");
                let erroTexto = document.createTextNode("Os campos de senha são diferentes.");
                let br = document.createElement("br")
                erro4.appendChild(br)
                erroDiv.appendChild(erroTexto);
                erro4.appendChild(erroDiv);
                let ln = document.createElement("br");
                erro4.appendChild(ln);
                Csenha.style.borderColor = "red";
                Csenha.focus();
                count++;
        }  
    }
function novoF() {
    let form2 = document.getElementById("form2");
    form2.removeAttribute("id");
    form2.setAttribute("class","formNovo");
}
    function verifica2(){
        let teste2 = true;
    if (document.querySelector("#erroNome") != null) {
        nome.style.borderColor = "black";
    }
    if (document.querySelector("#erroCpf") != null) {
        cpf.style.borderColor = "black";
    }
    if (document.querySelector("#erroSenha") != null) {
        senha.style.borderColor = "black"; 
    }
    if (document.querySelector("#erroCSenha") != null) {
        Csenha.style.borderColor = "black"; 
    }
    if (document.querySelector("#erroPro") != null) {
        profissao.style.borderColor = "black"; 
    }
    if (document.querySelector("#erroExp") != null) {
        exp.style.borderColor = "black"; 
    }
    document.querySelector("#erro1").innerHTML="";
    document.querySelector("#erro2").innerHTML="";
    document.querySelector("#erro3").innerHTML="";
    document.querySelector("#erro4").innerHTML="";
    document.querySelector("#erro5").innerHTML="";
    document.querySelector("#erro6").innerHTML="";
    document.querySelector("#erro7").innerHTML="";
    count=0;
    count2=0;
    vNome();
    vCpf();
    vSenha();
    vCSenha();
    vProf();
    vEst();
    vEXP();
    if (count2==0 && count == 0){
        let nomeF = nome.value;
        let cpfF = cpf.value;
        let senhaF = senha.value;
        let profF = profissao.value;
        let estadoF;
        if (radio[0].checked == true && radio[1].checked == false && radio[2].checked == false) {
            estadoF = "RS";
        }
        if (radio[0].checked == false && radio[1].checked == true && radio[2].checked == false) {
            estadoF = "SC";
        }
        if (radio[0].checked == false && radio[1].checked == false && radio[2].checked == true) {
            estadoF = "PR";
        }
        let Axp = exp.value;
        output.innerHTML =  "Seus dados:" + "<br>" + "Nome: " + nomeF + "<br>" + "CPF: " + cpfF +"<br>" + "Senha: " + senhaF + "<br>" + "Profissão: " + profF + "<br>" + "Estado: " + estadoF + "<br>" + "Anos de Exp.: " + Axp;

    }
}


function vProf() {
    
        if (profissao.value == "") {
                let erroDiv = document.createElement("div");
                erroDiv.setAttribute("id","erroPro");
                let erroTexto = document.createTextNode("Preencha o campo 'profissão'.");
                let br = document.createElement("br")
                erro5.appendChild(br)
                erroDiv.appendChild(erroTexto);
                erro5.appendChild(erroDiv);
                let ln = document.createElement("br");
                erro5.appendChild(ln);
                profissao.style.borderColor = "red";
                profissao.focus();
                count2++;
        }
    }

    function vEst() {
        if (radio[0].checked == false && radio[1].checked == false && radio[2].checked == false) {
                let erroDiv = document.createElement("div");
                erroDiv.setAttribute("id","erroEst");
                let erroTexto = document.createTextNode("Preencha o campo 'estado'.");
                let br = document.createElement("br")
                erro6.appendChild(br)
                erroDiv.appendChild(erroTexto);
                erro6.appendChild(erroDiv);
                let ln = document.createElement("br");
                erro6.appendChild(ln);
                //estado.focus();
                count2++;
        }
    }
    function vEXP() {
    
        if (exp.value == "" || exp.value < 0 || exp.value > 50) {
                let erroDiv = document.createElement("div");
                erroDiv.setAttribute("id","erroExp");
                let erroTexto = document.createTextNode("Você tem que ter entre 0 e 50 anos de experiência");
                erroDiv.appendChild(erroTexto);
                erro7.appendChild(erroDiv);
                let ln = document.createElement("br");
                erro7.appendChild(ln);
                exp.style.borderColor = "red";
                exp.focus();
                count2++;
            }  
    }
        
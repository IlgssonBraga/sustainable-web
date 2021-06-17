<template>
  <div class="home">
    <div id="menu">
        <div id="logo">
        <img src="../assets/SOLOGO.png" />
        </div>
        <div id="items">
        <a href="#">Sobre Nós</a>
        <router-link to="/inicial">Materiais</router-link>
        <a href="#">Contato</a>
        </div>
        <div id="login">
        <!--<a href="#">Login</a> -->
        <router-link id="second" to="/">Login</router-link>
       <!-- <a id="second" href="#">Registre-se</a> -->
        </div>
    </div>
    <div id="container">
        <div id="form">
            <h1 id="tit">Bem vindo(a),<span> Recicla</span></h1>
            <p id="pcc">Preencha os dados abaixo</p>
            <div class="avatar-upload">
        <div class="avatar-edit">
            <input type='file' id="imageUpload" accept=".png, .jpg, .jpeg" />
            <label for="imageUpload"></label>
        </div>
        <div class="avatar-preview">
            <div id="imagePreview" style="background-image:(../assets/homem-bonito-e-confiante-sorrindo-com-as-maos-cruzadas-no-peito_176420-18743.jpg);">
            </div>
        </div>
    </div>
            <div id="ipt">
            <form @submit.prevent="cadastroUsuario">
                <input class="ipt1" type="text" placeholder="Nome" v-model="usuario.nome">
                <input class="ipt2" type="email" placeholder="Email" v-model="usuario.email">
                <input class="ipt3" type="text" placeholder="DDD">
                <input class="ipt4" type="text" placeholder="Telefone">
                <input class="ipt5" type="text" placeholder="CEP"> 
                <input class="ipt6" type="text" placeholder="Logradouro">
                <input class="ipt6" type="text" placeholder="Complemento">
                <input class="ipt7" type="text" placeholder="Bairro">
                <input class="ipt7" type="text" placeholder="Cidade">
                <input class="ipt8" type="text" placeholder="Estado">
                <input class="ipt10" type="text" placeholder="Pessoa física ou jurídica"> 
                <input class="ipt11" type="text" placeholder="RG"> 
                <input class="ipt11" type="text" placeholder="Orgão Expedidor"> 
                <input class="ipt12" type="text" placeholder="CPF OU CNPJ">
                <input class="ipt13" type="text" placeholder="Senha" v-model="usuario.password"> <br>
                <input class="ipt14" type="text" placeholder="Confirmar sua senha"> <br>
                <div class="button-procure">
        <button type="submit" class="button-pesq">Finalizar</button>
            </div>
        </form>
               
            </div>
            
            
        </div>
        
    </div>
  </div>
</template>

<script>

// function nome(name){
//     return name
// }
const axios = require("axios");

export default {
    data(){
  return {
    usuario: {
        nome: '',
      email: '',
      password: ''
    }
  }
},
methods: {
  cadastroUsuario(){
      const token = localStorage.getItem('token')
    axios.post(`http://localhost:3333/users`,{
            name: this.usuario.nome,
        email: this.usuario.email,
        password: this.usuario.password,
        }, {
        headers: {
            Authorization: `Bearer ${token}`
        },
        
        
        
    }).then(response => {
        console.log(`Bem vindo, ${response.data}!!!`)
        window.location.href = "http://localhost:8080/login";
       
      
    })
  }
},
  name: 'Cadastro'
}

</script>

<style scoped>

.home {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    background: #f2f2ef;
    height: 940px;
}

#menu {
    width: 100%;
    height: 100px;
    margin: 0;
    background: #E4E4D8;
    display: flex;
    justify-content: space-between;
}

#logo {
    width: 20%;
    height: 100px;
    margin: 0;
    background: #E4E4D8;
    display: flex;
    align-items: center;
    justify-content: center;
}

#logo img {
    width: 70px;
}

#items {
    width: 22%;
    height: 100px;
    margin: 0;
    background: #E4E4D8;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

#items a {
    text-decoration: none;
    color: #000;
    font-size: 20px;
}

#items a:hover {
    color: #678D42;
}


#login {
    width: 20%;
    height: 100px;
    margin: 0;
    background: #E4E4D8;
    display: flex;
    flex-direction: row;
    align-items: center;
}

#login a {
    text-decoration: none;
    color: #000;
    font-size: 20px;
    font-weight: bold;
}

#second {
margin-left:20px;
color: #5ead70 !important;
font-weight: 200px !important;
}

#container {
    margin: 0;
}

#form {
    margin-top: 30px;
    margin-left: 35%;
    width: 35%;
    height: 750px;
    background: #E4E4D8;
    border-radius: 15px;
    border-style: solid;
    border-color: #f2f2ef;    
}
#tit {
    text-align: center;
    padding-top: 40px;
    color: #5ead70;
}
#tit span {
    color: black;
}
#pcc {
    padding-top: 8px;
    text-align: center;
    color: #ababab;
}

.avatar-upload {
    position: relative;
    max-width: 205px;
    margin: 50px auto;
    .avatar-edit {
        position: absolute;
        right: 12px;
        z-index: 1;
        top: 10px;
        input {
            display: none;
            + label {
                display: inline-block;
                width: 34px;
                height: 34px;
                margin-bottom: 0;
                border-radius: 100%;
                background: #FFFFFF;
                border: 1px solid transparent;
                box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.12);
                cursor: pointer;
                font-weight: normal;
                transition: all .2s ease-in-out;
                &:hover {
                    background: #f1f1f1;
                    border-color: #d6d6d6;
                }
                &:after {
                    content: "\f040";
                    font-family: 'FontAwesome';
                    color: #757575;
                    position: absolute;
                    top: 10px;
                    left: 0;
                    right: 0;
                    text-align: center;
                    margin: auto;
                }
            }
        }
    }
    .avatar-preview {
        width: 192px;
        height: 192px;
        position: relative;
        border-radius: 100%;
        border: 6px solid #F8F8F8;
        box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
        > div {
            width: 100%;
            height: 100%;
            border-radius: 100%;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
        }
    }
}
#ipt {
    text-align: center;
}
.ipt1 {
    width: 77%;
    margin-top: 10px;
    margin-left: 3px;
    outline: 0;
    border: none;
    border-radius: 50px;
    height: 40px;
    padding-left: 20px;

}
.ipt2 {
    width: 40%;
    margin-top: 10px;
    outline: 0;
    border: none;
    border-radius: 50px;
    height: 40px;
    padding-left:20px;
    margin-right:1%;
   
    
   
}
.ipt3 {
    width: 8%;
    margin-top: 10px;
    outline: 0;
    border: none;
    border-radius: 50px;
    height: 40px;
    padding-left: 20px;
   margin-right:1%;
}
.ipt4 {
    width: 20%;
    margin-top: 10px;
    outline: 0;
    border: none;
    border-radius: 50px;
    height: 40px;
    padding-left: 20px;
}
.ipt5 {
    width: 19%;
    margin-top: 10px;
    outline: 0;
    border: none;
    border-radius: 50px;
    height: 40px;
    padding-left: 20px;
}
.ipt6 {
    width: 25%;
    margin-top: 10px;
    margin-left: 3px;
    outline: 0;
    border: none;
    border-radius: 50px;
    height: 40px;
    padding-left: 20px;
}
.ipt7 {
    width: 25%;
    margin-top: 10px;
    margin-left: 3px;
    outline: 0;
    border: none;
    border-radius: 50px;
    height: 40px;
    padding-left: 20px;
}
.ipt8 {
    width: 19%;
    margin-top: 10px;
    margin-left: 3px;
    outline: 0;
    border: none;
    border-radius: 50px;
    height: 40px;
    padding-left: 20px;
}
.ipt10 {
    width: 30%;
    margin-top: 10px;
    margin-left: 3px;
    outline: 0;
    border: none;
    border-radius: 50px;
    height: 40px;
    padding-left: 20px;
}
.ipt11 {
    width: 20%;
    margin-top: 10px;
    margin-left: 3px;
    outline: 0;
    border: none;
    border-radius: 50px;
    height: 40px;
    padding-left: 20px;
}
.ipt12 {
    width: 77%;
    margin-top: 10px;
    margin-left: 3px;
    outline: 0;
    border: none;
    border-radius: 50px;
    height: 40px;
    padding-left: 20px;
}
.ipt13 {
    width: 77%;
    margin-top: 10px;
    margin-left: 3px;
    outline: 0;
    border: none;
    border-radius: 50px;
    height: 40px;
    padding-left: 20px;
}
.ipt14{
    width: 77%;
    margin-top: 10px;
    margin-left: 3px;
    outline: 0;
    border: none;
    border-radius: 50px;
    height: 40px;
    padding-left: 20px;
}
.button-pesq{
    background-image: linear-gradient(to right, #6d8b39, #409984);
    width: 200px;
    font-size: 12px;
    color: white;
    height: 40px;
    border: none;
    outline:none;
    text-transform: uppercase;
  border-radius: 15px;
   margin-top: 30px;
}
.button-procure{
    text-align: center;
}

#conta{
    margin-right: 10%;
    margin-top: -90px;
}

#conta img{
     width: 80px;
     height: 80px;
    border-radius: 50%; 
     display: flex;
     margin-left: 50px;

}




#img2{
  position:absolute;
  align-items: left;
 margin-left: 30px;
  top:3px;
  width:60px;
  padding-top: ;
}

#img2:hover{
    background: #fff;
}

#divaa1{
position:absolute;
  align-items: center;
  width: 170px;
  padding-top: -50px;
  height:80px;
  transition:.6s;


}
#divaa1:hover{
  height:200px;
  background: white;
  align-items: center;
  
}
#divaa1:hover > #divaaa1{
  height:180px;
  background: white;
  align-items: center;

}
#divaaa1{
  position:absolute;
  top:-5px;
  left:-75px;
  width:40px;
  height:80px;
  transition:.6s;
}



#btna1{
  position:absolute;
  top:0px;
  background:transparent;
  width:150px;
  color:transparent;
  font-family:Georgia, serif;
  font-size:15px;
  border:2.5px solid transparent;
  cursor:pointer;
  transition:.6s;
  margin-left: 10px;
}
#divaa1:hover > #btna1{
  top:90px;
  color:black;
  background:white;
  padding-bottom:5px;
}
#btna2{
  position:absolute;
  top:0px;
  background:transparent;
  width:150px;
  color:transparent;
  font-family:Georgia, serif;
  font-size:15px;
  border:2.5px solid transparent;
  cursor:pointer;
  transition:.6s;
  margin-left: 10px;
}
#divaa1:hover > #btna2{
  top:140px;
  color:black;
 background:white;
  padding-bottom:5px;
}
#btna3{
  position:absolute;
  top:0px;
  background:transparent;
  width:150px;
  color:transparent;
  font-family:Georgia, serif;
  font-size:15px;
  border:2.5px solid transparent;
  cursor:pointer;
  transition:.6s;
  margin-left: 10px;
}
#divaa1:hover > #btna3{
  top:190px;
  color:black;
 background:white;
  padding-bottom:5px;
}

</style>



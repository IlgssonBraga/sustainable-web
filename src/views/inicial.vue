<template>
  <div class="home">
    <div id="menu">
        <div id="logo">
        <img src="../assets/SOLOGO.png" />
        </div>
        <div id="items">
        <a href="#">Sobre Nós</a>
           <router-link to="/inicial">Meus Materiais</router-link>
        <a href="#">Contato</a>
        </div>
        <div id="login">
                <div id="conta">
             <div id="divaa1">
          <input id="btna1" type="button" value="Meus Dados">
          <input id="btna2" type="button" value="Perfil">
          <input id="btna3" type="button" v-on:click="logout" value="Logout">
          <img id="img2" src="../assets/avatar.png">
        </div>
        </div>
        </div>
    </div>
    <div id="container">
            <div id="mid">
                <h1 class="jmn"><span>Juntos</span> mudamos o mundo</h1>
                
                <div id="imag">
                    <h2 class="tm">Tipos de materiais <span>recicláveis</span></h2>
                    <img  class="plas" src="../assets/plastico.png" alt="plastico">
                    <img class="vidr" src="../assets/vidro.png" alt="vidro">
                    <img class="meta" src="../assets/metal.png" alt="metal">
                    <img class="pape" src="../assets/papel.png" alt="papel">
                </div>
            </div>
        </div>
  </div>
  <div id="list">
      <h1 id="md">Materiais Disponíveis</h1>
      <div id="quadrado1" style="background: #f2f2ef;" v-for="material of materiais" :key="material.id">
          <div>
              <p class="ft1"><b>{{material.name}}</b><br><br>
              <span id="cama">{{`${material.User.city} - ${material.User.state}` || 'Sem localização'}}</span><br><br><br><br><span id="for">Fornecedor:</span><span id="bil"> {{material.User.name}}</span><br><span id="for">Email:</span><span id="bil"> {{material.User.email}}</span> </p>
          </div>
          <div>
              <img  id="ft1" src="../assets/pet.jpg" alt="">    
          </div>
      </div>
      
  </div> 
</template>

<script>  

    const jwt = require('jsonwebtoken');
    const authConfig = require("../config/auth")
    const axios = require("axios");
export default {
    data(){
        return {
            materiais: []
        }
    },

    mounted(){
    const token = localStorage.getItem('token')
    if(token){
        try {
        jwt.verify(token, authConfig.secret)
    axios.get(`http://localhost:3333/materials`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(response => {
      this.materiais = response.data
    })
    
  } catch (err) {
      console.error(err)
      

    window.location.href = "http://localhost:8080";
  }
    }else{
        window.location.href = "http://localhost:8080";
    }

    
  },
  methods:{
      logout(){
          localStorage.removeItem("user");
          localStorage.removeItem("token");
        document.location.reload(true);
      }
  }
  ,
  name: 'inicial'
}


</script>

<style scoped>

.home {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    background: #f2f2ef;
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
    float: left;
    background: #E4E4D8;
    display: flex;
    flex-direction: row;
    align-items: center;
}

#login #men {
    text-decoration: none;
    color: #5ead70;
    font-size: 20px;
    font-weight: bold;
    display: inline-block;
}
ul {
    list-style-type: none; 
}
#second {
margin-left:20px;
color: #5ead70 !important;
font-weight: 200px !important;
text-decoration: none;
}
#mid {
    text-align: center;
    margin-top: 60px;
}
.jmn {
    font-size: 60px;
}
.jmn span {
    color: #5ead70;
}
h4 {
    color: gray;
}
#ipt {
}
.ipt1 {
    width: 550px;
    margin-top: 40px;
    height: 44px;
    padding-left: 50px;
    border-width: 0.1px;
    border-color: #dce2de;
    outline-color: green;
}
.svg1 {
    position: relative;
    height: 30px;
    width: 25px;
    left: 475px;
    bottom: 35px;
    color: #718844;
}
.btn {
    width: 100px;
    height: 45px;
    border: none;
    background: #718844;
    color: white;
    font-size: 14px;
    text-decoration: none;
    cursor: pointer;
    margin-left: 8px;

}
.tm {
    margin-top: 50px;
}
.tm span {
    color:#5ead70;
}
.plas {
    height: 120px;
    margin-top: 20px;
}
.vidr {
    height: 120px;
    
}
.pape {
    height: 120px;
    
}
.meta {
    height: 120px;
}


#quadrado1 {
    background: #c7cec7;
    width: 480px;
    float: left;
    height: 200px;;
    margin-left: 10%;
    margin-bottom: 30px;
    cursor: pointer;
}
#quadrado2 {
    background: #c7cec7;
    width: 480px;
    height: 200px;
    float: left;
    margin-left: 35px;
    margin-bottom: 30px;
    cursor: pointer;
}
#quadrado3 {
    background: #c7cec7;
    width: 480px;
    height: 200px;
    margin-bottom: 30px;
    float: left;
    margin-left: 35px;
    cursor: pointer;
}
#md {
    margin-top: 80px;
    margin-left: 100px;
    margin-bottom: 50px;
}
#ft1 {
    height: 200px;
    width: 50%;
    border-right: solid 1px #fff;
    border-top: solid 1px #fff;
    border-left: solid 1px #fff;
}
.ft1 {
    float: right;
    padding-top: 20px;
    padding-right: 15px;
}
b {
    font-size: 21px;
    color: #5ead70;
}
#cama {
    font-size: 15px;
}
#bil {
    font-weight: bold;
    font-size: 14px;
}
#for {
    font-size: 13px;
    color: #718844;
}

#ft2 {
    height: 200px;
    width: 50%;
    border-right: solid 1px #5ead70;
    border-top: solid 1px #5ead70;
    border-left: solid 1px #5ead70;
}
.ft2 {
    float: right;
    padding-top: 20px;
    padding-right: 45px;
}

#ft3 {
    height: 200px;
    width: 50%;
    border-right: solid 1px #5ead70;
    border-top: solid 1px #5ead70;
    border-left: solid 1px #5ead70;
}
.ft3 {
    float: right;
    padding-top: 20px;
    padding-right: 20px;
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
  height:230px;
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

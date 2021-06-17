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
                <div id="conta">
             <div id="divaa1">
          <input id="btna1" type="button" value="Meus Dados">
          <input id="btna2" type="button" value="Perfil">
          <input id="btna3" type="button" value="Logout">
          <img id="img2" src="../assets/homem-bonito-e-confiante-sorrindo-com-as-maos-cruzadas-no-peito_176420-18743.jpg">
        </div>
        </div>
        </div>
    </div>
    <div id="container">
            <div id="mid">
                <h1 class="jmn"><span>Juntos</span> mudamos o mundo</h1>
                <h4>Pesquise por palavra-chave, tipo de material, cidade ou estado e fornecedor.</h4>
                <div id="ipt">
                    <input class="ipt1" type="search" placeholder="Pesquisar materiais" style="font-size: 17px;">
                    <button class="btn" onclick="click">Buscar</button>
                        <div class="svg1">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="svg-inline--fa fa-search fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
                        </div>
                </div>
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
      <h1 id="md">Todos</h1>
      <div id="quadrado1" style="background: #f2f2ef;">
          <div>
              <p class="ft1"><b>Garrafas Pet's</b><br><br>
              <span id="cama">Camaragibe,PE - 05/06/2021</span><br><br><br><br><span id="for">Fornecedor:</span><span id="bil"> Bil Reciclagem</span><br><span id="for">Email:</span><span id="bil"> bil4reciclagem@gmail.com</span> </p>
          </div>
          <div>
              <img  id="ft1" src="../assets/pet.jpg" alt="">    
          </div>
      </div>
      <div id="quadrado2" style="background: #f2f2ef;">
          <div>
              <p class="ft2"><b>Papelão</b><br><br>
              <span id="cama">Olinda,PE - 29/05/2021</span> <br><br><br><br><span id="for">Fornecedor:</span><span id="bil"> José Luiz</span><br><span id="for">Email:</span><span id="bil"> joseluiz20@gmail.com</span> </p>
          </div>
          <div>
              <img  id="ft2" src="../assets/papelao.jpg" alt="">    
          </div>
      </div>
      <div id="quadrado3" style="background: #f2f2ef;">
          <div>
              <p class="ft3"><b>Latinhas</b><br><br>
              <span id="cama">Caruaru,PE - 28/05/2021</span> <br><br><br><br><span id="for">Fornecedor:</span><span id="bil"> Adeildo José</span><br><span id="for">Email:</span><span id="bil"> adeildojose47@gmail.com</span> </p>
          </div>
          <div>
              <img  id="ft3" src="../assets/meta.jpg" alt="">    
          </div>
      </div>
  </div> 
</template>

<script>  

    const jwt = require('jsonwebtoken');
    const authConfig = require("../config/auth")
export default {
    mounted(){
    const token = localStorage.getItem('token')
    try {
        jwt.verify(token, authConfig.secret)
    
  } catch (err) {
      console.error(err)
      

    window.location.href = "http://localhost:8080";
  }

    
  },
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

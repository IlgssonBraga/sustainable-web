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
   <div class="profile">
   <img id="imgprofile" src="../assets/homem-bonito-e-confiante-sorrindo-com-as-maos-cruzadas-no-peito_176420-18743.jpg">
   <h1 id="tit">Bem vindo(a),<span> Recicla</span></h1>
   </div>
   
  </div>
  <div class="geral">
  <transition name="component-fade" mode="out-in">
  <component v-bind:is="view"></component>
</transition>
  <h2 id="titlegeral">Seus materiais</h2>
  <h3 id="titlegeral">Adicionar Materiais</h3>
  </div>
  
  
</template>

<script>  
const isAuthenticated = require("../services/isAuthenticated")
export default {
  beforeRouteEnter(to, from, next) {
      if ((to.name === "Perfil") && isAuthenticated)
        next();
      else next({ name: "login" });
    },
  name: 'Perfil'
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
.profile{
    background: white;
    -webkit-box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.33);
-moz-box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.33);
box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.33);
width: 100%;
    height: 100px;
    display: flex;

 
   
}

#imgprofile{
     width: 70px;
     height: 70px;
    border-radius: 50%;
    margin-top: 20px;
    margin-left: 40%;
    
    
}

#tit {
  
    color: #5ead70;
    height: 100px;
    margin: 10px;
  margin-top: 2%;
  text-align: center;

}
#tit span {
    color: black;
}

.geral{
  background: #f2f2ef;
  width: auto;
  height: 708px;

}

</style>

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
        <router-link id="second" to="/login">Login</router-link>
        <router-link id="second" to="/Cadastro">Registre-se</router-link>
       <!-- <a id="second" href="#">Registre-se</a> -->
        </div>
    </div>
    <div id="content">
        <div id="left">
        <div id="leftcenter">
        <div id="text1">Reciclar pode ser um ato descomplicado e humano.</div>
        <div id="text2">
        Sustainable

        </div>
        <div id="text3">Juntos fazemos a 
diferença no Brasil</div>
        <div id="text4">O Sustainable aproxima o gerador de resíduos aos profissionais da 
reciclagem.</div>
        <div id="text5">
        <button>Baixe nosso app</button>
        <img src="../assets/android-logo.png">
        <img src="../assets/apple-logo.png">
        </div>
        <div id="text6">
        Facebook / Instagram / Twitter</div>
        </div>
        </div>
        
        <div id="right">
        <img src="../assets/img.png">
        </div>
    </div>
  </div>
</template>

<script>
const isAuthenticated = require("../services/isAuthenticated")
export default {
    beforeRouteEnter(to, from, next) {
      if ((to.name === "Home") && isAuthenticated)
        next({ name: "inicial" });
      else next();
    },
  name: 'Home'
}
</script>

<style scoped>

.home {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
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
color: #6DC180 !important;
font-weight: 200px !important;
}

#content {
    width: 100%;
    height: 700px;
    margin: 0;
    background: #72892F;
    display: flex;
    align-items: center; 
}

#left {
  width: 40%;
    height: 700px;
    margin: 0;
    background: #72892F;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

#text1 {
    color: #fff;
    font-family: 'Kanit', sans-serif;
}

#text2 {
    color: #6BC27D;
    font-family: 'Kanit', sans-serif;
    font-size:60px;
}






#text3 {
    color: #fff;
    font-size:30px;
    font-family: 'Kanit', sans-serif;
}

#text4 {
    color: #fff;
    font-family: 'Kanit', sans-serif;
}

#text5 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top:50px;
    font-family: 'Kanit', sans-serif;
}

#text5 button {
    background: #23233B;
    border: none;
    color: #fff;
    padding: 15px;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 20px;
    font-family: 'Kanit', sans-serif;
}

#text5 img {
    width: 35px;
    margin-left: 20px;
}

#text6 {
    color: #fff;
    margin-top: 120px;
    font-family: 'Kanit', sans-serif;
}

#leftcenter {
    width: 70%;
    height: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
}

#right {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

#right img {
    width: 70%;
}


</style>



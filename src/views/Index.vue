<template>
  <div class="index">
    <div id="foto"><img src="../assets/SOLOGO.png" /></div>
    <div id="text"><strong>SUSTAINABLE</strong>
    <span>MATERIAIS RECICLÁVEIS</span>
    </div>
    <div id="link">
     
    <div id="l"><router-link to="/Cadastro">REGISTRE-SE</router-link></div>
    <strong>Já possui uma conta? <router-link to="/home">Acesse!</router-link></strong>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



.index {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    background: #E4E4D8;
    height: 755px;
    width: 100%;
}

#foto {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 80px auto;
}

#text {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: -75px auto;
    
}

#text strong {
    font-size:60px;
    font-weight: 300px;
    font-family: 'Bebas Neue', cursive;
    letter-spacing: .2rem;
}

#text span {
    font-size:20px;
    color: #678D42;
}

#link {
    width: 200px;
    height: 50px;
    margin: 100px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}

#link #l {
    width: 250px;
    border: none;
    background-image: linear-gradient(#678D42, #469679);
    padding: 10px;
    border-radius: 4px;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
    font-size: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

#link #l a {
    background-image: linear-gradient(#678D42, #469679);

    color: #fff;
    font-size: 10px;
}

#link #l a:hover {
    background-image: linear-gradient(#678D42, #469679);

    color: #000;
    font-size: 10px;
}

#link strong {
    margin-top:10px;
    font-size: 12px;
    color: #678D42;
}

#link strong a {
    color: 	#469679;
    cursor: pointer;
}

#link strong a:hover {
    color: 	#678D42;
    cursor: pointer;
}
</style>

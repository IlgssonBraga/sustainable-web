<template>
  <div class="home">
    <div id="menu">
        <div id="logo">
        <img src="../assets/SOLOGO.png" />
        </div>
        <div id="items">
        <router-link to="/Home">Home</router-link>
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
  <h1>Seus materiais disponíveis</h1><span>ver todos</span>

<div class="card card-1">

 <img src="../assets/papelao.jpg">
 <h1>Papelão</h1><p>Recife/PE, 22/06/2021</p>  
 <a href="#abrirModal">
 Excluir</a>  
 <div id="mode">
 <div id="abrirModal" class="modal">
  <a href="#fechar" title="Fechar" class="fechar">x</a>
  <h2>Deseja excluir seu material?</h2>
  <p>Lembramos que ao fazer isso, você não poderá restaurar.</p>
  <button>Sim</button>
  <button>Não</button>
</div>  
</div>
</div>

<div class="card card-2">
<img src="../assets/pet.jpg">
  <h1>Plástico</h1><p>Recife/PE, 09/06/2021</p>
   <a href="#abrirModal">
 Excluir</a>    
</div>
<div class="card card-3">
<img src="../assets/meta.jpg">
<h1>Metal</h1><p>Recife/PE, 01/06/2021</p>
 <a href="#abrirModal">
 Excluir</a>    
</div>
<div id="linha-horizontal"></div>
<h1>Adicionar novos materiais</h1>

<div id="ipt">
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
                <input class="ipt1" type="text" placeholder="Tipo de material"><br>
                <input class="ipt2" type="text" placeholder="Cidade">
                <input class="ipt3" type="text" placeholder="Estado"><br>
                <p3> Descrição</p3>
                <input class="ipt4" type="textarea" placeholder="">
                </div>
                <p>Deseja receber notificação?</p> <section title=".squaredFour">
    <!-- .squaredFour -->
    <div class="squaredFour">
      <input type="checkbox" value="None" id="squaredFour" name="check" checked />
      <label for="squaredFour"></label>
    </div>
    <!-- end .squaredFour -->
  </section>
                <button>Adicionar material</button>
 </div>
  
 
</template>

<script>  
export default {
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

  width: auto;
  height: 708px;
 
}
.geral h1{
 text-decoration: none;
    color: #a8a9af;
    font-size: 22px;
  margin-left: 33%;
  margin-top: 50px;
 
 

}
.geral span{
  font-size: 15px;
  margin-left: 63%;
  
}

.card {
  background: #fff;
  border-radius: 2px;
  display: inline-block;
  margin: 1rem;
  position: relative;
  width: 300px; 
  margin-top: 20px;
}

.card-1 {
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  align-items: center;
  margin-left: 33%;
  width: 200px;
  height:  208px;
 
}

.card-1:hover {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

.card-2 {
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
   width: 200px;
  height:  200px;
   width: 200px;
  height:  208px;
}
.card-2:hover {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
.card-3 {
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
   width: 200px;
  height:  200px;
   width: 200px;
  height:  208px;
}

.card-3:hover {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

.card-1 a{
  background: red;
  margin-left: 65%;
  color: white;
  font-size: 15px;
  border-radius: 10%;
  text-decoration: none;
  
}
.card-2 a{
  background: red;
  margin-left: 65%;
  color: white;
  font-size: 15px;
  border-radius: 10%;
  text-decoration: none;
}
.card-3 a{
  background: red;
  margin-left: 65%;
  color: white;
  font-size: 15px;
  border-radius: 10%;
  text-decoration: none;


}



.card-1 img{
  align-items:center;
  margin-right: 20%;
  width: 150px;
  height: 100px;
  margin-left: 14%;
  margin-top: 30px;

}
.card-1 h1{
  font-size: 12px;
  align-items:center;
  margin-right: 20%;
  width: 130px;
  height: 100px;
  margin-left: 14%;
  margin-top: 10px;
}

.card-1 p{
  font-size: 12px;
  margin-top: -80px;
  margin-left: 30px;
 
}
.card-2 img{
  align-items:center;
  margin-right: 20%;
  width: 150px;
  height: 100px;
  margin-left: 14%;
  margin-top: 30px;

}
.card-2 h1{
  font-size: 12px;
  align-items:center;
  margin-right: 20%;
  width: 130px;
  height: 100px;
  margin-left: 14%;
  margin-top: 10px;
}

.card-2 p{
  font-size: 12px;
  margin-top: -80px;
  margin-left: 30px;
 
}

.card-3 img{
  align-items:center;
  margin-right: 20%;
  width: 150px;
  height: 100px;
  margin-left: 14%;
  margin-top: 30px;

}
.card-3 h1{
  font-size: 12px;
  align-items:center;
  margin-right: 20%;
  width: 130px;
  height: 100px;
  margin-left: 14%;
  margin-top: 10px;
}

.card-3 p{
  font-size: 12px;
  margin-top: -80px;
  margin-left: 30px;
 
}


.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: #e2e2d8;
  z-index: 99999;
  opacity:0;
  -webkit-transition: opacity 400ms ease-in;
  -moz-transition: opacity 400ms ease-in;
  transition: opacity 400ms ease-in;
  pointer-events: none;
  width: 400px;
  height: 170px;
  margin-top: 25%;
  margin-left: 42%;
 box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
 border-radius: 20px;
}

.modal h2{
  font-size: 25px;
  margin-top: 40px;
  margin-left: 5px;
  text-align:center;
  
}
.modal p{
  font-size: 15px;
  margin-top: 10px;
  text-align:center;
  color: #4c5452;
}
.modal:target {
  opacity: 1;
  pointer-events: auto;
}


.fechar {
  position: absolute;
  width: 30px;
  right: -15px;
  top: -20px;
  text-align: center;
  line-height: 30px;
  margin-top: 5px;
  background: #ff4545;
  border-radius: 50%;
  font-size: 16px;
  color: #8d0000;
}
.modal button{
  background: #489677;
  margin-top: 20px;
  width: 200px;
  height: 50px;
  border-radius: 0px 0px 20px 20px;
  font-size: 20px;
  color: white;
  border:none!important;

}
.geral button{
   width:10%;
    margin-top: 30px;
    margin-left: 45%;
    outline: 0;
    border: none;
    border-radius: 10px;
    height: 40px;
    padding-left: 20px;
    background: #489677;
    color: white;
}
.ipt1 {
    width: 21%;
    margin-top: 10px;
    margin-left: 40%;
    outline: 0;
    border: none;
    border-radius: 50px;
    height: 40px;
    padding-left: 20px;
    background: #f2f2f2;

}
.ipt2 {
    width: 10%;
    margin-top: 10px;
     margin-left: 40%;
    outline: 0;
    border: none;
    border-radius: 50px;
    height: 40px;
    padding-left: 20px;
    background: #f2f2f2;

}
.ipt3 {
    width: 10%;
    margin-top: 10px;
 margin: 3px;
    outline: 0;
    border: none;
    border-radius: 50px;
    height: 40px;
    padding-left: 20px;
    background: #f2f2f2;

}
.ipt4 {
  
    width: 21%;
    margin-top: 5px;
   margin-left: 40%;
    outline: 0;
    border: none;
    border-radius: 50px;
    height:140px;
    padding-left: 20px;
    background: #f2f2f2;

}

#linha-horizontal {
    width: 780px;
    border: 1px solid #e5e6e8;
    margin-left: 30%;
    margin-top: 20px;
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
.geral p{
  margin-left: 41%;
  margin-top: 20px;
}
.geral p3{
  margin-left: 41%;
  margin-top: 90px;
  font-size: 12px;
}
.squaredFour {
  width: 20px;
  margin: 0px auto;
  margin-left: 60%;
  label {
    width: 20px;
    height: 20px;
    cursor: pointer;
   
    top: 0;
    left: 0;
    background: #fcfff4;
    background: linear-gradient(top, #fcfff4 0%, #dfe5d7 40%, #b3bead 100%);
    border-radius: 4px;
    box-shadow: inset 0px 1px 1px white, 0px 1px 3px rgba(0,0,0,0.5);
    &:after {
      content: '';
      width: 9px;
      height: 5px;
      position: absolute;
      top: 1px;
      left: 4px;
      border: 3px solid #333;
      border-top: none;
      border-right: none;
      background: transparent;
      opacity: 0;
      transform: rotate(-45deg);
    }
    &:hover::after {
      opacity: 0.5;
    }
  }
  input[type=checkbox] {
    visibility: hidden;
    &:checked + label:after {
      opacity: 1;
    }
  }    
}
</style>

function tocaSom(idElementoaudio){
 const elemento=Document.QuerySelector(idElementoaudio)
 if(elemento && elemento.localName=== 'audio'){
       elemento.play ( );
 }else{
    console.log("Elemento não encontrado inválido");
   } 
   }
   const listaDeTeclas=document.querySelectorAll('.tecla')




   for(letcontador=0,contador<listaDeTeclas.length,contador++)
   const tecla=listaDeTeclas[contador];
   const efeito=tecla.classlist[1];
   const idaudio= #som_${efeito};
   tecla.onclick=function(){
   tocaSom(idaudio);
   }

   tecla.onkeydown=function(evento){
   if(evento.code==='Spale')
   tecla.classlist.List.add('ativa');
  }
} 
   tecla.onkeydown=function(elemento){
    if(evento.code==='enter')
      tecla.classlist.add('ativa');
 
   }

 



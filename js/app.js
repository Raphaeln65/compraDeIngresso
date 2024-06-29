function comprar(){
    let tipoCadeira = document.getElementById('tipo-ingresso');
    let quantidade = parseInt(document.getElementById('qtd').value);

    if(document.getElementById('qtd').value == ''){
        alert('Escolha uma quantidade');
        return;
    }
    
    
    
   
    if (tipoCadeira.value == 'pista'){
        comprarPista(quantidade);
    }if(tipoCadeira.value=='superior'){
        comprarSuperior(quantidade);
    }if(tipoCadeira.value == 'inferior'){
        compraInferior(quantidade);
    };
    document.getElementById('qtd').value = '';

    

    
   

    function comprarPista(quantidade){
        let qtdpista = parseInt(document.getElementById('qtd-pista').textContent);
        if(quantidade > qtdpista) {
            alert('Desculpe!!! Quantidade esgotada para o tipo de cadeira');
         }if(qtdpista == 0) {
            alert('Desculpe!!! Quantidade esgotada para o tipo de cadeira');
         } else{
               qtdpista = qtdpista - quantidade;
               document.getElementById('qtd-pista').textContent = qtdpista;
               alert('Parabens!!! Compra realizasa com sucesso');
            }
        
    }
   

    function comprarSuperior(quantidade){
        let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
        if(quantidade > qtdSuperior) {
            alert('Desculpe!!! Quantidade esgotada para o tipo de cadeira');
         }if(qtdSuperior == 0) {
            alert('Desculpe!!! Quantidade esgotada para o tipo de cadeira');
         }
          else{
               qtdSuperior = qtdSuperior - quantidade;
               document.getElementById('qtd-superior').textContent = qtdSuperior;
               alert('Parabens!!! Compra realizasa com sucesso');
            }   
  
        
     }

     function compraInferior(quantidade){
        let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
        if(quantidade > qtdInferior) {
            alert('Desculpe!!! Quantidade esgotada para o tipo de cadeira');
         }if(qtdInferior == 0) {
            alert('Desculpe!!! Quantidade esgotada para o tipo de cadeira');
         }
          else{
               qtdInferior = qtdInferior - quantidade;
               document.getElementById('qtd-inferior').textContent = qtdInferior;
               alert('Parabens!!! Compra realizasa com sucesso');
            }   
     }

     
    
}   

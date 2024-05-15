const container =  document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");
const qrCodeInput=  container.querySelector("#qr-form input");
const qrCodeImg = container.querySelector("#qr-code img");

const downloadBtn = document.getElementById('download-btn');

function generateQrCode(){
    let qrCodeInputValue = qrCodeInput.value;
    if(!qrCodeInputValue) return;
    qrCodeBtn.innerText = "Gerando código..."
    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`
    qrCodeImg.addEventListener("load", () =>{
        container.classList.add("active");
        qrCodeBtn.innerText = "Código criado ✨🎉🙌"
    });
}

qrCodeBtn.addEventListener("click", ()  => {
    generateQrCode();
});


qrCodeInput.addEventListener("keydown", (e) => {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      generateQrCode();
    }
  });

  qrCodeInput.addEventListener("keyup", () =>{
    if(!qrCodeInput.value){
        container.classList.remove("active");
        qrCodeBtn.innerText = "Gerar QR Code";
    }
  })


  function downloadQR() {
    // URL da imagem gerada
    let imgUrl = qrCodeImg.src;  
    // Criar elemento <a> para download
    let link = document.createElement('a');
    link.href = imgUrl;
    // Definir nome do arquivo
    link.download = 'qrcode.png';  
    // Simular click para iniciar download
    link.click();
  }

  document.getElementById("animate_confetti").addEventListener("click", () => {

    let params = {
      particleCount: 500, // Quantidade de confetes
      spread: 90, // O quanto eles se espalham
      startVelocity: 70, // Velocidade inicial
      origin: { x: 0, y: 0.5 }, // Posição inicial na tela
      angle: 45 // Ângulo em que os confetes serão lançados
    };
  
    // Joga confetes da esquerda pra direita
    confetti(params);
  
    // Joga confetes da direita para a esquerda
    params.origin.x = 1;
    params.angle = 135;
    confetti(params);
  
  });
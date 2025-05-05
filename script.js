function showPrompt() {
    document.getElementById("messageBox").classList.remove("hidden");
    document.getElementById("romanticAudio").play();
  }
  
  function validateCode() {
    const input = document.getElementById("inputCode").value.trim().toLowerCase();
    if (input === "sarra pizarra") {
      document.getElementById("messageBox").classList.add("hidden");
      document.getElementById("finalBox").classList.remove("hidden");
    } else {
      alert("¡Ups! Esa no es la palabra correcta...");
    }
  }
  
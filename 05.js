// 5) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em salas diferentes. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada. Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?

function descobrirLampadas() {
  let interruptores = {
    A: "desligado",
    B: "desligado",
    C: "desligado",
  };

  let lampadas = {
    L1: "fria", // Representa a lâmpada desligada e fria
    L2: "fria",
    L3: "fria",
  };

  // Passo 1: Ligar o primeiro interruptor (A)
  interruptores.A = "ligado";
  lampadas.L1 = "quente"; // A lâmpada aquece após algum tempo

  // Passo 2: Desligar o interruptor (A) e ligar o interruptor (B)
  interruptores.A = "desligado";
  interruptores.B = "ligado";
  lampadas.L2 = "acesa"; // A lâmpada correspondente ao interruptor B está acesa

  // Passo 3: Analisando o estado das lâmpadas
  console.log("Se a lâmpada está acesa, ela é controlada pelo interruptor B.");
  console.log(
    "Se a lâmpada está apagada, mas quente, ela é controlada pelo interruptor A."
  );
  console.log(
    "Se a lâmpada está apagada e fria, ela é controlada pelo interruptor C."
  );

  // Retornando o estado final para verificar
  return { interruptores, lampadas };
}

console.log(descobrirLampadas());

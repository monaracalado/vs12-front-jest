export default function mensagem(): string {
  let estrela = "";
  for (let i = 0; i < 50; i++) {
    estrela += "*";
  }
  let primeiroTexto = `\nBEM-VINDO AO MEU PROGRAMA\n`;
  let segundoTexto = "\nELE REALMENTE FUNCIONA\n";
  let terceiroTexto = "\nEU USEI FUNÇÃO PARA FAZER ISSO";

  return estrela + primeiroTexto + estrela + segundoTexto + estrela + terceiroTexto;
}
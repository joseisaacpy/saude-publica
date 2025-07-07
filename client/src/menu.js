// Pega botão do menu
const btnMenu = document.getElementById("btn-menu");
// Pega botão de fechar o menu
const btnCloseMenu = document.getElementById("btn-close-menu");
// Pega div de menu mobile
let divMenuMobile = document.getElementById("header-mobile");
// Pega tags de âncora do menu mobile
let ancorasMenuMobile = document.querySelectorAll("#header-mobile a");
// Adiciona evento de click
btnMenu.addEventListener("click", () => {
  // Pega div de menu mobile
  // Deixa o menu mobile visível
  divMenuMobile.classList.toggle("hidden");
  divMenuMobile.classList.add("flex");
});
// Adiciona evento de click
btnCloseMenu.addEventListener("click", () => {
  // Oculta o menu mobile
  divMenuMobile.classList.remove("flex");
  divMenuMobile.classList.add("hidden");
});
// Para cada âncora do menu mobile, adiciona evento de click pra ocultar o menu
ancorasMenuMobile.forEach((ancora) => {
  ancora.addEventListener("click", () => {
    // Oculta o menu mobile
    divMenuMobile.classList.remove("flex");
    divMenuMobile.classList.add("hidden");
  });
});

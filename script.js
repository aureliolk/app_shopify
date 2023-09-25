// Função para definir um cookie
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

// Função para obter o valor de um cookie
function getCookie(name) {
    const keyValue = document.cookie.match(`(^|;) ?${name}=([^;]*)(;|$)`);
    return keyValue ? keyValue[2] : null;
}

// Verifique se há um valor de cookie armazenado
const savedShowBox = getCookie("showBox");

// Se houver um valor de cookie salvo, use-o; caso contrário, use um valor padrão (false)
var showBox = savedShowBox ? savedShowBox === "true" : false;

// Atualize a interface do usuário com base no valor de showBox
if (showBox) {
    document.querySelector("div#aparecer").style.display = "block";
} else {
    document.querySelector("div#aparecer").style.display = "none";
}

// Adicione ouvintes de eventos para atualizar e armazenar o valor de showBox nos cookies
const btNotCustomize = document.querySelectorAll(".product-form__option")[1].querySelectorAll(".block-swatch")[0];
btNotCustomize.addEventListener("click", () => {
    showBox = false;
    document.querySelector("div#aparecer").style.display = "none";
    setCookie("showBox", "false", 30); // Armazena o valor "false" em um cookie com validade de 30 dias
});

const btCustomize = document.querySelectorAll(".product-form__option")[1].querySelectorAll(".block-swatch")[1];
btCustomize.addEventListener("click", () => {
    showBox = true;
    document.querySelector("div#aparecer").style.display = "block";
    setCookie("showBox", "true", 30); // Armazena o valor "true" em um cookie com validade de 30 dias
});

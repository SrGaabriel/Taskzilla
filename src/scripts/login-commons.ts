let popup = (document.querySelector(".auth-popup") as HTMLDivElement);
let popupText = (document.querySelector(".auth-popup p") as HTMLParagraphElement);

export function addTokenToCookie(token: string) {
    document.cookie = "token=" + token + "; path=/;max-age=5259492";
}

export function displayErrorPopup(message: string) {
    popupText.innerHTML = message;
    popup.classList.add('show');
}

export function hideErrorPopup() {
    popup.classList.remove('show');
}

export function checkInputIntegrity(input: HTMLInputElement): boolean {
    if (input.value == "") {
        input.style.borderColor = "#e5394a";
        return true;
    }
    input.style.borderColor = "#d1c7e0"
    return false;
}
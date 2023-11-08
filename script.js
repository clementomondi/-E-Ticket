// Add JavaScript code here
const holder = document.querySelector('.holder');

const careers = ['WELCOME ABOARD &', "ENJOY YOUR FLIGHT"];

let CareerIndex = 0;

let characterIndex = 0;
UpdateText()

function UpdateText() {
    characterIndex++
    holder.innerHTML = `
<h1>${careers[CareerIndex].slice(0, 1) === 'I', ''} ${careers[CareerIndex].slice(0, characterIndex)}</h1>
`;
    if (characterIndex === careers[CareerIndex].length) {
        characterIndex = 0;
        CareerIndex++
    }
    setTimeout(UpdateText, 150);
}
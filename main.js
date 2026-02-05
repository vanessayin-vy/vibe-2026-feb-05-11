
class TotoGenerator extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'toto-generator');

    const title = document.createElement('h1');
    title.textContent = 'Toto Number Generator';

    const numbersContainer = document.createElement('div');
    numbersContainer.setAttribute('class', 'numbers');

    const specialNumberContainer = document.createElement('div');
    specialNumberContainer.setAttribute('class', 'special-number');

    const button = document.createElement('button');
    button.textContent = 'Generate Numbers';
    button.addEventListener('click', () => this.generateNumbers());

    const style = document.createElement('style');
    style.textContent = `
      .toto-generator {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: sans-serif;
      }
      .numbers {
        display: flex;
        gap: 10px;
        margin: 20px 0;
      }
      .number, .special {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        font-weight: bold;
      }
      .number {
        background-color: #eee;
        color: #333;
      }
      .special {
        background-color: #ffcc00;
        color: #333;
      }
      button {
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
        border: none;
        border-radius: 5px;
        background-color: #007bff;
        color: white;
      }
    `;

    shadow.appendChild(style);
    shadow.appendChild(wrapper);
    wrapper.appendChild(title);
    wrapper.appendChild(numbersContainer);
    wrapper.appendChild(specialNumberContainer);
    wrapper.appendChild(button);

    this.generateNumbers();
  }

  generateNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
      numbers.add(Math.floor(Math.random() * 49) + 1);
    }

    const specialNumber = Math.floor(Math.random() * 49) + 1;

    const numbersContainer = this.shadowRoot.querySelector('.numbers');
    numbersContainer.innerHTML = '';
    for (const number of [...numbers].sort((a, b) => a - b)) {
      const numberDiv = document.createElement('div');
      numberDiv.setAttribute('class', 'number');
      numberDiv.textContent = number;
      numbersContainer.appendChild(numberDiv);
    }

    const specialNumberContainer = this.shadowRoot.querySelector('.special-number');
    specialNumberContainer.innerHTML = '';
    const specialNumberDiv = document.createElement('div');
    specialNumberDiv.setAttribute('class', 'special');
    specialNumberDiv.textContent = specialNumber;
    specialNumberContainer.appendChild(specialNumberDiv);
  }
}

customElements.define('toto-generator', TotoGenerator);

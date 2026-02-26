import Poutine from './Poutine.js';

export default class Chef {
  constructor(element) {
    this.element = element;
    this.menu = [];
    this.container = this.element.querySelector('.chef__order');
    this.init();
  }

  init() {
    const poutines = this.element.querySelectorAll(
      '[data-component="Poutine"]',
    );
    console.log(poutines);
    for (let i = 0; i < poutines.length; i++) {
      const poutine = poutines[i];
      const instancePoutine = new Poutine(poutine);
      this.menu.push(instancePoutine);
    }
    const commandes = this.element.querySelectorAll('.js-button');
    for (let i = 0; i < commandes.length; i++) {
      const commande = commandes[i];
      commande.addEventListener('click', this.sendOrder.bind(this));
    }
  }

  sendOrder() {
    let poutineSelected = 0;

    for (let i = 0; i < this.menu.length; i++) {
      const poutine = this.menu[i];

      if (poutine.element.querySelector('.js-button-poutine.is-active')) {
        poutineSelected += 1;
      }
    }

    const p = document.createElement('p');
    p.innerText = `Nombre total de poutine(s) ; ${poutineSelected}`;
    this.container.innerHTML = '';
    this.container.appendChild(p);
  }
}

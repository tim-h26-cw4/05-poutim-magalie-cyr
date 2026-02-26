import Poutine from './Poutine.js';

export default class Chef {
  constructor(chef) {
    this.chef = chef;
    this.menu = [];
    this.container = {};
    this.init();
  }

  init() {
    const poutines = this.chef.querySelectorAll('[data-component="Poutine"]');
    console.log(poutines);
    for (let i = 0; i < poutines.length; i++) {
      const poutine = poutines[i];
      const instancePoutine = new Poutine(poutine);
      this.menu.push(instancePoutine);
    }
    const commandes = this.chef.querySelectorAll('.js-button');
    for (let i = 0; i < commandes.length; i++) {
      const commande = commandes[i];
      commande.addEventListener('click', this.sendOrder.bind(this));
    }
  }

  sendOrder() {
    console.log('commande envoyé');
  }
}

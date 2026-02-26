import Icons from './utils/Icons.js';
import Chef from './Chef.js';

class Main {
  constructor() {
    this.init();
  }

  init() {
    Icons.load();
    new Chef();
  }
}
new Main();

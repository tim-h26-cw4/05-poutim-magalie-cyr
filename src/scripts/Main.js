import Icons from './utils/Icons.js';

class Main {
  constructor() {
    this.init();
  }

  init() {
    Icons.load();
    console.log('Main init working');
  }
}
new Main();

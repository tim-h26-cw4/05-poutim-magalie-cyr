export default class Poutine {
  constructor(element) {
    this.element = element;
    this.types = this.element.querySelectorAll('.js-button-poutine');
    this.selectedType = '';
    this.init();
  }

  init() {
    for (let i = 0; i < this.types.length; i++) {
      const type = this.types[i];
      type.addEventListener('click', this.selectType.bind(this));
    }
  }

  selectType(e) {
    for (let i = 0; i < this.types.length; i++) {
      const type = this.types[i];
      type.classList.remove('is-active');
      e.currentTarget.classList.add('is-active');
      this.selectedType = e.currentTarget.innerText;
    }
    console.log(this.selectedType);
    this.updatePhoto();
  }

  updatePhoto() {
    const image = this.element.querySelector('img');
    image.classList.add('is-active');
    image.src = `assets/images/${this.selectedType}.png`;
  }
}

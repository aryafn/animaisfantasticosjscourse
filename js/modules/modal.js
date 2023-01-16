import initAccordion from './accordion';

export default class Modal {
  constructor(botaoAbrir, botaoFechar, containerModal) {
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(containerModal);

    //bind this ao callback para fazer ref ao obj da classe
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }

  //abre ou fecha o modal
  toggleModal() {
    this.containerModal.classList.toggle('ativo');
  }

  //adc o evento de toggle ao modal
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  //fecha ao clicar no modal do ladod e fora.
  cliqueForaModal(event) {
    if (event.target === this.containerModal) toggleModal();
  }

  //adiciona os elementos aos eventos do modal
  addModalEvents() {
    this.botaoAbrir.addEventListener('click', this.eventToggleModal);
    this.botaoFechar.addEventListener('click', this.eventToggleModal);
    this.containerModal.addEventListener('click', this.cliqueForaModal);
  }

  init() {
    if (botaoAbrir && botaoFechar && containerModal) {
      this.addModalEvents();
    }
    return this;
  }
}

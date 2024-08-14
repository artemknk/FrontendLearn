"use strict";
const array = [
    'https://proprikol.ru/wp-content/uploads/2020/04/krasivye-kartinki-vysokogo-razresheniya-3.jpg',
    'https://w.forfun.com/fetch/03/03f8cd3f6796daaacc1fe43ffb7704b7.jpeg',
    'https://w.forfun.com/fetch/25/2529ce3d3391789f369c4ec9a07a1b82.jpeg'
];
const slidesCont = document.querySelector('.slides');
const btns = document.querySelectorAll('.action');
const sliderInput = document.querySelector('.sliderInput');
const sliderSaveBtn = document.querySelector('.sliderSaveBtn');
const slidesMenuOpen = document.querySelector('.slidesMenu_open');
const formSlides = document.querySelector('.formSlides');
const formCont = document.querySelector('.sliderMenu');
const slidesMenuClose = document.querySelector('.slidesMenu_close');
const addSliderInp = document.querySelector('.addInp');
class Slider {
    constructor(array, slidesCont, btns) {
        this.arrayImg = array;
        this.append = slidesCont;
        this.btns = btns;
        this.count = 0;
        this.addListener();
        this.render();
    }
    renderSlide(item) {
        const img = document.createElement('img');
        img.src = item;
        img.classList.add('slide');
        this.append.append(img);
    }
    render() {
        this.arrayImg.forEach(this.renderSlide.bind(this));
    }
    countNext() { this.count < this.arrayImg.length - 1 ? this.count += 1 : this.count; }
    countPrev() { this.count > 0 ? this.count -= 1 : this.count; }
    scrollSlide() {
        const widthSlide = this.append.clientWidth;
        this.append.scroll({
            left: widthSlide * this.count,
            top: 0,
            behavior: 'smooth'
        });
    }
    addListener() {
        slidesMenuOpen.addEventListener('click', () => {
            formCont.classList.remove('hidden');
            this.arrayImg.forEach((item, index) => {
                if (index < 0)
                    return;
                const inpcontElement = document.createElement('div');
                inpcontElement.classList.add('inp_cont');
                inpcontElement.innerHTML = `   
                    <input class="sliderInput" type="text" value="${item}">
                    <button class="delete" type="button">X</button>
                `;
                formSlides.append(inpcontElement); // добавляет сверху
                const deleteBtn = inpcontElement.querySelector('.delete');
                deleteBtn.addEventListener('click', () => {
                    inpcontElement.remove();
                    this.arrayImg.splice(index, 1);
                });
            });
        });
        formSlides.addEventListener('submit', (event) => {
            event.preventDefault();
            const form = event.target;
            const inputs = Array.from(form.elements).filter(item => item.tagName === 'INPUT');
            this.arrayImg.length = 0;
            inputs.forEach((item) => item.value !== '' ? this.arrayImg.push(item.value) : false);
            document.querySelectorAll('.slide').forEach(item => item.remove());
            this.render();
        });
        this.btns.forEach((item) => {
            item.addEventListener('click', () => {
                item.classList.contains('prev') ? this.countPrev() : this.countNext();
                this.scrollSlide();
            });
        });
        slidesMenuClose.addEventListener('click', () => {
            formCont.classList.add('hidden');
            const elements = formCont.querySelectorAll('.inp_cont');
            elements.forEach(item => item.remove());
        });
        addSliderInp.addEventListener('click', () => {
            const inpcontElement = document.createElement('div');
            inpcontElement.classList.add('inp_cont');
            inpcontElement.innerHTML = `   
                <input class="sliderInput" type="text" value="">
                <button class="delete" type="button">X</button>
            `;
            formSlides.append(inpcontElement);
        });
    }
}
new Slider(array, slidesCont, btns);

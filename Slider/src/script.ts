const array : string[] = [
    'https://proprikol.ru/wp-content/uploads/2020/04/krasivye-kartinki-vysokogo-razresheniya-3.jpg',
    'https://w.forfun.com/fetch/03/03f8cd3f6796daaacc1fe43ffb7704b7.jpeg',
    'https://w.forfun.com/fetch/25/2529ce3d3391789f369c4ec9a07a1b82.jpeg'
    ]
    
interface Node  {
    classList : DOMTokenList,
    children : HTMLInputElement[],
    remove : () => void,
    value : string
}

interface Element {
    value : string
}


const slidesCont : HTMLElement = document.querySelector('.slides')!;
const btns : NodeList = document.querySelectorAll('.action')!;
const sliderInput: HTMLInputElement = document.querySelector('.sliderInput')!;
const sliderSaveBtn: HTMLButtonElement = document.querySelector('.sliderSaveBtn')!;
const slidesMenuOpen: HTMLButtonElement = document.querySelector('.slidesMenu_open')!;
const formSlides: HTMLFormElement = document.querySelector('.formSlides')!;
const formCont : HTMLFormElement = document.querySelector('.sliderMenu')!;
const slidesMenuClose : HTMLButtonElement = document.querySelector('.slidesMenu_close')!;
const addSliderInp : HTMLButtonElement = document.querySelector('.addInp')!;


class Slider {
    arrayImg : string[] // тип для массива изображений
    append : HTMLElement // тип для контейнера
    btns : NodeList // тип для кнопок
    count : number
    constructor(array : string[], slidesCont : HTMLElement, btns : NodeList){ 
      
        this.arrayImg = array
        this.append = slidesCont
        this.btns = btns
        this.count = 0
        this.addListener()
        this.render()
    }

    renderSlide(item : string) : void {
        const img = document.createElement('img')
        img.src = item
        img.classList.add('slide')
        this.append.append(img)   
    }

    render() : void {
        this.arrayImg.forEach(this.renderSlide.bind(this))
    }

    countNext(){ this.count < this.arrayImg.length -1 ? this.count+=1 : this.count }
    countPrev(){ this.count > 0 ? this.count-=1 : this.count }

    scrollSlide () : void {
        const widthSlide = this.append.clientWidth
        this.append.scroll({
            left : widthSlide * this.count,
            top : 0,
            behavior : 'smooth'
        })
    }

    addListener(){
        slidesMenuOpen.addEventListener('click', () => {
            formCont.classList.remove('hidden');
            this.arrayImg.forEach((item, index) => {
                if(index < 0) return
                const inpcontElement = document.createElement('div')
                inpcontElement.classList.add('inp_cont')
                inpcontElement.innerHTML = `   
                    <input class="sliderInput" type="text" value="${item}">
                    <button class="delete" type="button">X</button>
                `
                formSlides.append(inpcontElement) // добавляет сверху
                const deleteBtn : HTMLButtonElement = inpcontElement.querySelector('.delete')!;
                deleteBtn.addEventListener('click', () => {
                    inpcontElement.remove();
                    this.arrayImg.splice(index, 1);
                })
            })
        })
        
        formSlides.addEventListener('submit', (event) => {
            event.preventDefault();
            const form : HTMLFormElement = event.target as HTMLFormElement
            const inputs : Element[] = Array.from(form.elements).filter(item => item.tagName === 'INPUT')

            this.arrayImg.length = 0
            inputs.forEach((item) => item.value !== '' ? this.arrayImg.push(item.value) : false)
            document.querySelectorAll('.slide').forEach(item => item.remove())
            this.render()    
        })

        this.btns.forEach((item) => {
            item.addEventListener('click', () => {
                item.classList.contains('prev') ? this.countPrev() : this.countNext();
                this.scrollSlide()
            })
        })

        slidesMenuClose.addEventListener('click', () => {
            formCont.classList.add('hidden');
            const elements : NodeList = formCont.querySelectorAll('.inp_cont')
            elements.forEach(item => item.remove())
        })

        addSliderInp.addEventListener('click', () => {
            const inpcontElement = document.createElement('div')
            inpcontElement.classList.add('inp_cont')
            inpcontElement.innerHTML = `   
                <input class="sliderInput" type="text" value="">
                <button class="delete" type="button">X</button>
            `
            formSlides.append(inpcontElement)
        })
    }
}

new Slider(array, slidesCont, btns)
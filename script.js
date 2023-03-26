

class  Slider{
    constructor(){
        this.count=0;
        this.prev=0;
        this.p=0;
        this.displayImage();
    }

    displayImage(){
        document.getElementById('slide').style.backgroundImage = `url(images/img${this.count}.jpg)`;
        this.pageChange();

    }
    leftChange(){
        if(this.count===0){
            this.prev=0;
            this.count=3;
        }
        else{
            this.prev=this.count;
            this.count=(this.count-1)%4;
        }

        this.displayImage();
    }

    rightChange(){
        this.prev=this.count;
        this.count=(this.count+1)%4;
        this.displayImage();

    }

    pageChange(){
        document.getElementById(`c${this.prev}`).style.color= 'grey';
        document.getElementById(`c${this.count}`).style.color= 'black';

    }
    changeBypage(index){
        this.prev=this.count;
        this.count=index;
        this.displayImage();
    }

}


const slider = new Slider();

document.getElementById('left').addEventListener('click', ()=> slider.leftChange())


document.getElementById('right').addEventListener('click', ()=>slider.rightChange())

const pages= document.querySelectorAll('[page]');

pages.forEach((button, index) => {
    button.addEventListener("click", () => {
        slider.changeBypage(index);
    
    });
  });

const { createApp } = Vue

  createApp({
    data() {
      return {
        error: false,
        newToDo: '',
        toDoList:[
            {
                text:'Andare a fare la spesa',
                done:false
            },
            {
                text:'Comprare la ps5',
                done: false
            },
            {
                text:'Giocare a pallone',
                done:false
            }
            
        ] 
      }
    },
    methods:{
        removeToDo(index){
            this.toDoList.splice(index, 1);
        },
        addToDo(){
            if(this.newToDo.length >= 5){
            this.toDoList.push({text: this.newToDo, done: false});
            this.newToDo = '';
            this.error = false;
            } else{
              this.error = true
            }
        },
        invertTrueFalse(element){
          if(element.done ==  true){
            element.done = false;
          }else{
            element.done = true;
        }
        }
    }
  }).mount('#app')
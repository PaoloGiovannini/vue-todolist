const { createApp } = Vue

  createApp({
    data() {
      return {
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
            this.toDoList.push({text: this.newToDo, done: false});
            this.newToDo = '';
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
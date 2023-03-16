const { createApp } = Vue

  createApp({
    data() {
      return {
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
        }
    }
  }).mount('#app')
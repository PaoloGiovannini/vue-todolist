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
            },
            
        ]
      }
    }
  }).mount('#app')
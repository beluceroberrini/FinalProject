import { propsToAttrMap } from '@vue/shared';
import { defineStore } from 'pinia'
import { getTasks } from '../api';


export const usTaskStore = defineStore('task', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically
     tasks: [] //vamos a tener que guardar el array de task de supabase

    }
  },
  actions: {
    async setTask(){
     this.tasks = await getTasks()
     console.log(this.tasks)
       //guardar las task que nos de supabase
    },
    updateTask(id, task){
        //modificar el estado de las task
        //encontrar el indice de las task con ese id y
        //cambiar el contenido con task
       
    },
    deleteTask(id){
      const i = this.tasks.findIndex(task => task.id == id) 
      this.tasks.splice(i, 1);
     
        //modificar el estado borrando esa task
        //encontramos el indice de eese id y eliminamos
        // ese indice del array
    },
   addTask(title, message){
    this.setTask()  
               //modifica el estado de task haciendo un push de la task
        //comprobamos que teenemos el id al insertar el registro, en caso de no tenerlo
        //tendriamos que hacer el getTask
    },
  
  }
})

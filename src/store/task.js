import { defineStore } from 'pinia'

export const usTaskStore = defineStore('task', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically
     task: [] //vamos a tener que guardar el array de task de supabase

    }
  },
  actions: {
    setTask(){
        //guardar las task que nos de supabase
    },
    updateTask(id, task){
        //modificar el estado de las task
        //encontrar el indice de las task con ese id y
        //cambiar el contenido con task
    },
    deleteTask(id){
        //modificar el estado borrando esa task
        //encontramos el indice de eese id y eliminamos
        // ese indice del array
    },
    addTask(task){
        //modifica el estado de task haciendo un push de la task
        //comprobamos que teenemos el id al insertar el registro, en caso de no tenerlo
        //tendriamos que hacer el getTask
    }
  }
})
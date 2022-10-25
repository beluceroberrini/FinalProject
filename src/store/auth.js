import { defineStore } from 'pinia'


export const useAuthStore = defineStore('auth', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      isAuth: false,
      id: undefined,

    }
  },
  actions: {
    login(id){
        this.isAuth = true;
        this.id = id;
        
    },
    logout(){
      this.isAuth = false;
      this.id = '';
        // cambiar el estado de auth. e id del usuario
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'userEnabled',
        storage: localStorage,
        
      }
    ]
  }
})
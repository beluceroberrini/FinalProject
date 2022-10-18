import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  //carpeta donde creara el build
  build: {outDir: 'docs'},
  //comprobamos si esstamos en produccion y la base es el nombre del repositorio, sino  
  //condicion ? 'nombre-repositorio' : '/'
  //if(process.env.NODE_ENV === 'produccion'){
  //}base: 'produccion'{
  //     }else{
  //    base: '/'
  //} 
  //Produccion seria github pages
  // desarrollo seria yarn dev

  base: process.env.NODE_ENV === 'production' ? '/FinalProject/' : '/'
})

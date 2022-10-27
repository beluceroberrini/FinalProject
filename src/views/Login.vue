<template>
    
<div class="max-w-2xl mx-auto">
	<div
		class="bg-white box1 shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 m-auto">
		<form @submit.prevent="onLogin()" class="space-y-6" action="#">
			<h3 class="text-xl font-medium text-gray-900 dark:text-white">Let's begining!</h3>
			<div>
				<label for="email" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"> Email</label>
				<input type="email" name="email" id="email" v-model="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required="">
            </div>
				<div>
					<label for="password" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Contraseña</label>
					<input type="password" name="password" id="password" v-model="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="">
                </div>
					<div class="">
							<a href="#" class="text-sm olvidado hover:underline ml-auto">Has olvidado tu contraseña?</a>
						</div>
						<button type="submit" class="colorBoton w-full text-white focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 text-center">Iniciar Sesión</button>
						<div class="text-sm textoFondo font-medium text-gray-500 dark:text-gray-300">No estas registrado?  <router-link :to="{name: 'register'}" class="registrate hover:underline">REGISTRATE!</router-link>
						</div>
		</form>
	</div>
</div>
</template>
<script setup>
import { login } from '../api';
import { ref } from 'vue'
import { useAuthStore } from '../store/auth'
import { useRouter } from 'vue-router'


const email = ref();
const password = ref();
const authStore = useAuthStore();
const router = useRouter()

const onLogin = async () =>{
    const id = await login(email.value, password.value)
    authStore.login(id)//queda guardado el dato del usuario que ingreso en supabase
    console.log(id)
	router.push({name: 'home'})
}

</script>
<style scoped>

.box1{
	margin-top: 70px;
}
  
</style>
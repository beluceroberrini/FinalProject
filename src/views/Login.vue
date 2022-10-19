<template>
    
<div class="max-w-2xl mx-auto">
	<div
		class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
		<form @submit.prevent="onLogin()" class="space-y-6" action="#">
			<h3 class="text-xl font-medium text-gray-900 dark:text-white">A POR TUS TAREAS !</h3>
			<div>
				<label for="email" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"> Email</label>
				<input type="email" name="email" id="email" v-model="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required="">
            </div>
				<div>
					<label for="password" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Contraseña</label>
					<input type="password" name="password" id="password" v-model="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="">
                </div>
					<div class="flex items-start">
						<div class="flex items-start">
							<div class="flex items-center h-5">
								<input id="remember" aria-describedby="remember" type="checkbox" class="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required="">
                            </div>
								<div class="text-sm ml-3">
									<label for="remember" class="font-medium text-gray-900 dark:text-gray-300">Recuerdame</label>
								</div>
							</div>
							<a href="#" class="text-sm text-blue-700 hover:underline ml-auto dark:text-blue-500">Has olvidado tu contraseña?</a>
						</div>
						<button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Iniciar Sesión</button>
						<div class="text-sm font-medium text-gray-500 dark:text-gray-300">
							No estas registrado?  <a href="#" class="text-blue-700 hover:underline dark:text-blue-500">REGISTRATE!
						</a>
						</div>
		</form>
	</div>
</div>
</template>
<script setup>
import { login } from '../api';
import { ref } from 'vue'
import { useAuthStore } from '../store/auth'

const email = ref();
const password = ref();
const authStore = useAuthStore();

const onLogin = async () =>{
    const id = await login(email.value, password.value)
    authStore.login(id)
    console.log(id)
}

</script>
<style scoped>
</style>
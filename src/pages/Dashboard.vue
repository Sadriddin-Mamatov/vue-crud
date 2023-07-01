<template>
	<section class="container px-4 mx-auto">
		<div class="block mb-5">
			<div>
				<div class="flex flex-wrap justify-between items-end -m-2">
					<div class="block p-2">
						<h2 class="text-2xl font-bold text-gray-900 dark:text-white leading-9">Mijozlar {{ clients.length }}</h2>
					</div>
					<div class="block ml-auto">
						<div class="flex flex-wrap items-center">
							<div class="p-2">
								<button
									@click="dialog = true"
									class="border-transparent text-white bg-primary-600 hover:bg-primary-500 focus:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-primary-500 dark:focus:bg-primary-600 dark:hover:bg-primary-600 dark:focus:ring-offset-gray-900 inline-flex justify-center items-center border font-medium rounded-md focus:outline-none transition ease-in-out duration-150 px-4 py-2 text-sm leading-5"
								>
									<span class="inline-block align-middle mr-2">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-5">
											<path
												d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"
											></path>
										</svg>
									</span>
									<span class="align-middle">Mijoz qo'shish</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="flex flex-col mt-6">
			<div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
				<div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
					<div class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
						<table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
							<thead class="bg-gray-50 dark:bg-gray-800">
								<tr>
									<th scope="col" class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
										<div class="flex items-center gap-x-3">
											<span>Mijozning ismi</span>
										</div>
									</th>

									<th scope="col" class="px-2 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
										<button class="flex items-center gap-x-2">
											<span>Tug'ilgan sana</span>

											<svg class="h-3" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z"
													fill="currentColor"
													stroke="currentColor"
													stroke-width="0.1"
												/>
												<path
													d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z"
													fill="currentColor"
													stroke="currentColor"
													stroke-width="0.1"
												/>
												<path
													d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z"
													fill="currentColor"
													stroke="currentColor"
													stroke-width="0.3"
												/>
											</svg>
										</button>
									</th>

									<th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
										<button class="flex items-center gap-x-2">
											<span>Manzil</span>

											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
												/>
											</svg>
										</button>
									</th>

									<th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Telefon raqam</th>
									<th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Buyurtmachi</th>
									<th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Buyurtma nomi</th>
									<th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
										Buyurtma narxi
									</th>
									<th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
										Buyurtma sanasi
									</th>

									<th scope="col" class="relative py-3.5 px-4">
										<span class="sr-only">Edit</span>
									</th>
								</tr>
							</thead>
							<tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
								<tr v-for="(clientf, i) in clients" :key="i + 'clienr'">
									<td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
										<div class="inline-flex items-center gap-x-3">
											<div class="flex items-center gap-x-2">
												<img
													class="object-cover w-10 h-10 rounded-full"
													src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
													alt=""
												/>
												<div>
													<h2 class="font-medium text-gray-800 dark:text-white">{{ clientf.name }}</h2>
													<p class="text-sm font-normal text-gray-600 dark:text-gray-400">{{ clientf.phone }}</p>
												</div>
											</div>
										</div>
									</td>
									<td class="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
										{{ clientf.birth_date }}
									</td>
									<td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{{ clientf.address }}</td>
									<td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{{ clientf.phone }}</td>
									<td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{{ clientf.buyer }}</td>
									<td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{{ clientf.product_name }}</td>
									<td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{{ clientf.product_price }}</td>
									<td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{{ clientf.order_date }}</td>

									<td class="px-4 py-4 text-sm whitespace-nowrap">
										<div class="flex items-center gap-x-6">
											<button
												@click="handleDelete(clientf.id!)"
												class="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													stroke-width="1.5"
													stroke="currentColor"
													class="w-5 h-5"
												>
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
													/>
												</svg>
											</button>

											<button
												@click="handleEdit(clientf)"
												class="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													stroke-width="1.5"
													stroke="currentColor"
													class="w-5 h-5"
												>
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
													/>
												</svg>
											</button>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>

		<div class="flex items-center justify-between mt-6">
			<a
				href="#"
				class="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-5 h-5 rtl:-scale-x-100"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
				</svg>

				<span> previous </span>
			</a>

			<div class="items-center hidden lg:flex gap-x-3">
				<a href="#" class="px-2 py-1 text-sm text-blue-500 rounded-md dark:bg-gray-800 bg-blue-100/60">1</a>
				<a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">2</a>
				<a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">3</a>
				<a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">...</a>
				<a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">12</a>
				<a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">13</a>
				<a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">14</a>
			</div>

			<a
				href="#"
				class="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
			>
				<span> Next </span>

				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-5 h-5 rtl:-scale-x-100"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
				</svg>
			</a>
		</div>

		<!-- Main modal -->
		<div class="relative z-10" tabindex="-1" v-show="dialog">
			<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

			<div class="fixed inset-0 z-20 overflow-y-auto">
				<div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
					<form
						@submit.prevent="onSubmit"
						class="relative transform overflow-hidden rounded-lg dark:bg-gray-800 bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
					>
						<!-- Modal header -->
						<div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-900">
							<h3 class="text-xl text-gray-900 dark:text-white">Add New User</h3>
							<button
								type="button"
								class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
								@click="dialog = false"
							>
								<svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
									<path
										fill-rule="evenodd"
										d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
										clip-rule="evenodd"
									></path>
								</svg>
								<span class="sr-only">Close modal</span>
							</button>
						</div>
						<!-- Modal body -->
						<div class="p-6 space-y-6">
							<div class="mb-6">
								<label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ism Familya *</label>
								<input
									id="name"
									v-model="client.name"
									class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="Ism Familya"
									required
								/>
							</div>
							<div class="mb-6">
								<label for="birth_date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tug'ilgan kuningizni kiriting *</label>
								<input
									id="birth_date"
									v-model="client.birth_date"
									class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="Tug'ilgan kuningizni kiriting"
									required
								/>
							</div>
							<div class="mb-6">
								<label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Manzilni kiriting *</label>
								<input
									id="address"
									v-model="client.address"
									class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="Manzilni kiriting"
									required
								/>
							</div>
							<div class="mb-6">
								<label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Telefon raqam *</label>
								<input
									id="phone"
									v-model="client.phone"
									class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="Telefon raqam"
									required
								/>
							</div>

							<div class="grid md:grid-cols-2 md:gap-2">
								<div class="mb-6">
									<label for="buyer" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Buyurtmachi ismi *</label>
									<input
										id="buyer"
										v-model="client.buyer"
										class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										placeholder="Buyurtmachi ismi"
										required
									/>
								</div>
								<div class="mb-6">
									<label for="order_date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Buyurtma sanasi *</label>
									<input
										id="order_date"
										v-model="client.order_date"
										type="datetime-local"
										class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										placeholder="Buyurtma sanasi"
										required
									/>
								</div>
								<div class="mb-6">
									<label for="product_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tovar nomi *</label>
									<input
										id="product_name"
										v-model="client.product_name"
										class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										placeholder="Tovar nomi"
										required
									/>
								</div>
								<div>
									<label for="product_price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tovar narxi *</label>
									<input
										id="product_price"
										v-model="client.product_price"
										class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										placeholder="Tovar narxi"
										required
									/>
								</div>
							</div>
						</div>
						<div class="bg-gray-50 dark:bg-gray-800 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
							<button
								type="submit"
								class="inline-flex w-full justify-center rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 sm:ml-3 sm:w-auto"
							>
								Add User
							</button>
							<button
								@click="dialog = false"
								class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
							>
								Cancel
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import { ClientInterface } from "src/types/client.ts";
import { useClientStore } from "src/stores/ClientStore";
import { storeToRefs } from "pinia";

const dialog = ref(false);
const client = reactive<ClientInterface>({
	id: null,
	name: "",
	birth_date: "",
	address: "",
	phone: "",
	buyer: "",
	order_date: "",
	product_name: "",
	product_price: "",
});

const ClientStore = useClientStore();
const { clients } = storeToRefs(ClientStore);
const onSubmit = async () => {
	if (client.id) {
		ClientStore.editClient(client)
			.then(() => {
				alert("Client successfully updated!");
				dialog.value = false;
			})
			.catch((e) => {
				alert(e);
			});
	} else {
		ClientStore.addClient(client)
			.then(() => {
				alert("Client successfully added!");
				dialog.value = false;
			})
			.catch((e) => {
				alert(e);
			});
	}
};

const handleDelete = async (id: number) => {
	ClientStore.deleteClient(id)
		.then(() => {
			alert("client delete");
		})
		.catch((e) => {
			alert(e);
		});
};

const handleEdit = async (c: ClientInterface) => {
	client.id = c.id;
	client.name = c.name;
	client.birth_date = c.birth_date;
	client.address = c.address;
	client.phone = c.phone;
	client.buyer = c.buyer;
	client.order_date = c.order_date;
	client.product_name = c.product_name;
	client.product_price = c.product_price;

	dialog.value=true
};
</script>

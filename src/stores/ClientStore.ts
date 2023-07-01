/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineStore } from 'pinia';
import { ClientInterface } from 'src/types/client';

type RootState = {
   clients: ClientInterface[]
};

export const useClientStore = defineStore({
   id: 'ClientStore',
   state: () =>
   ({
      clients: [
         {
            id: 1,
            name: 'Sadriddin',
            birth_date: '1998',
            address: 'Toshkent',
            phone: '78767866',
            buyer: 'buyer',
            order_date: '',
            product_name: 'product 1',
            product_price: '3434',
         }
      ]
   } as RootState),
   actions: {
      async addClient(client: ClientInterface) {
         try {
            this.clients.push({ ...client, id: this.clients.length + 1 })
         } catch (error) {
            console.log(error)
         }
      },
      async deleteClient(id: number) {
         try {
            const client = this.clients.find(e => e.id == id);
            if (client) {
               this.clients = this.clients.filter(e => e.id != id)
            } else {
               throw new Error('Client not found')
            }
         } catch (error) {
            console.log(error)
         }
      },
      async editClient(client: ClientInterface) {
         try {
            this.clients.forEach((element, index) => {
               if (element.id === client.id) {
                  this.clients[index] = client;
               }
            });
         } catch (error) {
            console.log(error)
         }
      },
   },
   persist: {
      enabled: true,
      strategies: [], // <- HERE
   },
});

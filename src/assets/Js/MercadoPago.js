import {MercadoPago} from 'mercadopago'


const mp = new MercadoPago('TEST-1c42164c-abaa-4b73-87a6-dba8ad99d42f');
const bricksBuilder = mp.bricks();
mp.bricks().create("wallet", "wallet_container", {
    initialization: {
        preferenceId: "<PREFERENCE_ID>",
    },
 customization: {
  texts: {
   valueProp: 'smart_option',
  },
 }});

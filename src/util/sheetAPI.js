import axios from 'axios';

export const setHead = () =>{
  sheetAxios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
}



const sheetAxios = axios.create({
  baseURL: 'https://script.google.com/macros/s/AKfycbyCxRkwxX7TFY7tF7En6IaAtbgRKShtbE7MZ91MF6f_JSO1LrDt/exec'

})

export default setHead
export {
  sheetAxios
}
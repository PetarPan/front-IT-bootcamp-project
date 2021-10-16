import axios from "axios";


export const getAllUsers = () => axios.get('https://my-it-bootcamp-project.herokuapp.com/clients')
export const postUser = (id, name, surname, password, email) => axios.post('https://my-it-bootcamp-project.herokuapp.com/clients', {id, name, surname, password,email})
export const updateNewPassword = ( id, password) => axios.patch(`https://my-it-bootcamp-project.herokuapp.com/clients/${id}`, {  password})

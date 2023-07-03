import axios from "axios";

axios.defaults.baseURL = 'https://649cfa449bac4a8e669d2286.mockapi.io/phonebook/';

export async function fetchContacts() {
    const { data } = await axios.get('contacts');
    return data;
}

export async function addContact(text) {
    const response = await axios.post('contacts', text);
    return response.data;
}

export async function deleteContact(id) {
    const response = await axios.delete(`contacts/${id}`);
    return response.data;
}
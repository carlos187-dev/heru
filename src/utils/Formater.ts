import { Address, Company } from "../interfaces/types";

const months = [
    'Enero', 'Febrero', 'Marzo',
    'Abril', 'Mayo', 'Junio', 'Julio',
    'Agosto', 'Septiembre', 'Octubre',
    'Noviembre', 'Diciembre'
];
export const dateToString = (): string => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    return `${day} de ${months[month]} del ${year}`;
}


export const formatAddress = (address: Address):string => {
    return `${address.street} ${address.suite}, ${address.city}
CP: ${address.zipcode}`
}


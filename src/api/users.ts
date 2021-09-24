import axios from "axios";
import { IUser } from "../interfaces/types";

export const fetchData = () =>
    axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');

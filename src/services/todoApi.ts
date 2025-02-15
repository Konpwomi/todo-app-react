import  axiosInstance  from "../utils/axios"
import { TodoType } from "../types/todoType"

export const getTodos = async (): Promise<TodoType[]> => {
    const response = await axiosInstance.get("/todo");
    return response.data;
};
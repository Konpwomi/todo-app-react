import { useEffect, useState } from "react"
import { TodoType } from "../types/todoType"
import { getTodos } from "../services/todoApi"

const useTodos = (): {todos: TodoType[]; loading: boolean; error: string | null } => {
    const [todos, setTodos] = useState<TodoType[]>([])
    const [loading,setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                setLoading(true);
                const todosData = await getTodos()
                setTodos(todosData)
            } catch (err) {
                setError("Failed to fetch todos")
            } finally {
                setLoading(false)
            }
        }
        fetchTodos() 
    }, [])

    return { todos, loading, error}
}

export default useTodos
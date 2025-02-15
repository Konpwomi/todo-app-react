import { useEffect } from "react";
import Practice from "./components/Practice";
import { ThemeProvider } from "./contexts/ThemeContext";
import useTodos from "./hooks/useTodos";

function App() {
  const { todos, loading, error } = useTodos();

  useEffect(() => {
    // Any side effects or subscriptions can be handled here

    return () => {
      // Cleanup code if needed
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flex flex-col gap-5">
      <ThemeProvider>
        <Practice />
      </ThemeProvider>
      <div>
        {todos.map((todo, index) => (
          <div key={index}>
            <div>{todo.title}</div>
            <div>{todo.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

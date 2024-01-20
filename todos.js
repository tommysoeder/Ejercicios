async function fetchTodos() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos");
      
      if (!response.ok) {
        throw new Error("error: ${response.status}");
      }
  
      const todos = await response.json();
      return todos;
    } catch (error) {
      console.error("Error", error);
      throw error; 
    }
  }
  
  
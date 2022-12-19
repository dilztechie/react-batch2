import React, { useEffect, useState } from "react";
import axios from "axios";
import "./tasks.css";

const Tasks = () => {
  const [tasks, setTasks] = useState(null)
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [isCompleted] = useState(false)

  useEffect(() => {
    (async () => {
      const taskList = await axios.get("http://localhost:3003/tasks")
      setTasks(taskList.data)
    })()
  }, [])

  const addTask = task => {
    axios.post("http://localhost:3003/tasks", {
      title: task.title,
      author: task.author,
      isCompleted: task.isCompleted
    })
    document.getElementById("title").value = ""
    document.getElementById("author").value = ""
    // window.location.reload(true)
  }

  return <div className="container">
    <div className="header">
      <h3>Tasks</h3>
    </div>
    {tasks ?
      <ul>
        {tasks.map(task =>
          <li key={task.id} data-testid="task">{task.title} by {task.author}</li>
        )}
      </ul> :
      <p>Loading...</p>
    }
    <input data-testid="title"
      placeholder="title?" id="title" value={title}
      onChange={event => setTitle(event.target.value)} />

    <input data-testid="author"
      placeholder="author?" id="author" value={author}
      onChange={event => setAuthor(event.target.value)} />

    <button data-testid="addTask"
      onClick={() => addTask({ title, author, isCompleted })}>
      +
    </button>
  </div>
}

export default Tasks
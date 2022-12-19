const { render, screen, fireEvent } = require("@testing-library/react")
const { default: Tasks } = require("../components/tasks/tasks")

test("renders the landing page", () => {
    render(<Tasks />)
})

test("tasks list", async () => {
    render(<Tasks />)
    const taskList = await screen.findAllByTestId("task")
    expect(taskList).toHaveLength(6)
})

test("add task", async () => {
    render(<Tasks />)
    const btnAddTask = screen.getByTestId("addTask")
    const title = screen.getByTestId("title")
    const author = screen.getByTestId("author")
    fireEvent.change(title, { target: { value: 'Task-7' } })
    fireEvent.change(author, { target: { value: 'gopi' } })
    fireEvent.click(btnAddTask)
    const taskList = await screen.findAllByTestId("task")
    expect(taskList).toHaveLength(7)
})
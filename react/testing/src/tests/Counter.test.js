import { fireEvent, render, screen } from "@testing-library/react"
import Counter from "../components/counter/counter"

test("renders the landing page", () => {
    render(<Counter />)
})

test("increments value", () => {
    render(<Counter />)
    const btnIncrement = screen.getByTestId("increment")
    const value = screen.getByTestId("value")
    fireEvent.click(btnIncrement)
    expect(value).toHaveTextContent("1")
    fireEvent.click(btnIncrement)
    expect(value).toHaveTextContent("2")
})

test("decrements value", () => {
    render(<Counter />)
    const btnIncrement = screen.getByTestId("increment")
    const btnDecrement = screen.getByTestId("decrement")
    const value = screen.getByTestId("value")
    fireEvent.click(btnDecrement)
    expect(value).toHaveTextContent("0")
    fireEvent.click(btnIncrement)
    expect(value).toHaveTextContent("1")
    fireEvent.click(btnIncrement)
    expect(value).toHaveTextContent("2")
    fireEvent.click(btnDecrement)
    expect(value).toHaveTextContent("1")
    fireEvent.click(btnDecrement)
    expect(value).toHaveTextContent("0")
    fireEvent.click(btnDecrement)
    expect(value).toHaveTextContent("0")
})
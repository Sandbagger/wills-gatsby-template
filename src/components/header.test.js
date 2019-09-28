import React from "react"
import { render } from "@testing-library/react"
import Header from "./header"


test("Navbar has item1", () => {
    const { getByTestId } = render(<Header/>)
    expect(getByTestId("nav-item-1")).toHaveTextContent("item1")
})

test("Navbar has item2", () => {
    const { getByTestId } = render(<Header/>)
    expect(getByTestId("nav-item-2")).toHaveTextContent("item2")
})

test("Navbar has item3", () => {
    const { getByTestId } = render(<Header/>)
    expect(getByTestId("nav-item-3")).toHaveTextContent("item3")
})

test("Navbar has item4", () => {
    const { getByTestId } = render(<Header/>)

    expect(getByTestId('nav-item-4')).toHaveTextContent("item4")
})


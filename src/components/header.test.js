import React from "react"
import { render } from "@testing-library/react"
import Header from "./header"


test("Logo is 'William Neal", () => {
    const { getByTestId } = render(<Header/>)

    expect(getByTestId("logo")).toHaveTextContent("William Neal")
})

test("Header has 'Home for nav item", () => {
    const { getByTestId } = render(<Header/>)

    expect(getByTestId('nav-item-home')).toHaveTextContent("Home")
})
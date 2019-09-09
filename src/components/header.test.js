import React from "react"
import { render } from "@testing-library/react"
import Header from "./header"


test("Logo is 'William Neal", () => {
    const { getByTestId } = render(<Header/>)

    expect(getByTestId("logo")).toHaveTextContent("Expect test to fail")
})
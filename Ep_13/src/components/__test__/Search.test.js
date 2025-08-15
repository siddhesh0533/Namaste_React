import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body"
import { act } from "react"
import MOCK_DATA from "../MOCKS/reslistMock.json"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
});

it("should render the body component with search", async () => {
    await act(async() => render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    ));

    const cardsBefore =  screen.getAllByTestId("rescard")

    expect(cardsBefore.length).toBe(20)

    const searchBtn = screen.getByRole("button", {name: "search"});

    const searchInput = screen.getByTestId("searchInput")

    fireEvent.change(searchInput, {target: {value: "burger"}})

    fireEvent.click(searchBtn);
    

    // expect(searchBtn).toBeInTheDocument();
    const cards = screen.getAllByTestId("rescard")

    expect(cards.length).toBe(4)
})
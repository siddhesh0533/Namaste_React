import { render, screen } from "@testing-library/react"
import RestroCard, { withPromotedLable } from "../RestroCard"
import MOCK_DATA from "../MOCKS/RestroCardMock.json"
import "@testing-library/jest-dom"

it("should load the Restro card", ()=>{

    render(
        <RestroCard resData={MOCK_DATA}/>
    )

    const name = screen.getByText("Mealful Rolls - India's Biggest Rolls");

    expect(name).toBeInTheDocument()
});

it("should load the Restro card with promoted lable", ()=>{

    const RestroCardPromoted = withPromotedLable(RestroCard);

    render(
        <RestroCardPromoted resData={MOCK_DATA}/>
    )

    const label = screen.getByText("Promoted");

    expect(label).toBeInTheDocument()
})
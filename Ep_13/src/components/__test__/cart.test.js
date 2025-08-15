import { fireEvent, render, screen } from "@testing-library/react"
import RestaurantMenu from "../RestaurantMenu"
import { act } from "react"
import MOCK_DATA from "../MOCKS/resMenu.json"
import "@testing-library/jest-dom"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import Header from "../Header"
import Cart from "../Cart"
import { BrowserRouter } from "react-router-dom"

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    })
)

it("should load res menu component", async () => {
    await act(async () => (render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
                <RestaurantMenu />
                <Cart/>
            </Provider>
        </BrowserRouter>
    )))

    const accordianHeader = screen.getByText("NEW BK Fusion (Made with KitKat) (5)")

    fireEvent.click(accordianHeader)

    expect(screen.getAllByTestId("foodItems").length).toBe(5)

    const addBtn = screen.getAllByRole("button", { name: "Add" })

    fireEvent.click(addBtn[0]);

    expect(screen.getByText("Cart (1)")).toBeInTheDocument();

    fireEvent.click(addBtn[1]);

    expect(screen.getByText("Cart (2)")).toBeInTheDocument();

    expect(screen.getAllByTestId("foodItems").length).toBe(7)

    fireEvent.click(screen.getByRole("button", {name: "clear cart"}))

    expect(screen.getAllByTestId("foodItems").length).toBe(5)

    expect(screen.getByText("cart is empty"))

})
import { render, screen, fireEvent } from "@testing-library/react";
import Contact from "../Contact"
import userContext from "../../utils/userContext";
import "@testing-library/jest-dom";

it("should be render contact us component properly", ()=>{
    render(<Contact/>);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
});

it("should be render button inside contact us component properly", ()=>{
    render(<Contact/>);

    const button = screen.getByText("Change Name");

    expect(button).toBeInTheDocument();
});

it("should be render name contact us component properly", ()=>{
    render(<Contact/>);

    const name = screen.getByText("default_User")

    expect(name).toBeInTheDocument();
});

it("should change username on button click", () => {
    const mockSetUserName = jest.fn();
    render(
        <userContext.Provider value={{ loggedinuser: "TestUser", setUserName: mockSetUserName }}>
            <Contact />
        </userContext.Provider>
    );

    const button = screen.getByRole("button", { name: /change name/i });
    fireEvent.click(button);

    expect(mockSetUserName).toHaveBeenCalledWith("nid");
});
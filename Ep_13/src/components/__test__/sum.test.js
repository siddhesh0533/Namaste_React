import sum from "../sum"   

test("sum function should be calculate the sum of two no.", ()=>{

    const result = sum(3, 5);

    // assertion
    expect(result).toBe(8)
});
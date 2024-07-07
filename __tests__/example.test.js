

describe("Ir a google", () => {
    
    test('Ir a google', async() => { 
        await page.goto("https://www.google.com/")
        await new Promise((resolve) => setTimeout(resolve, 5000))

    }, 8000)
})
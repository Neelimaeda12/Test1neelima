import { test, expect } from '@playwright/test'

const url = "https://rahulshettyacademy.com/api/ecom/auth/login"
const loginPayload = {
userEmail: "testnHNk@gmail.com",
userPassword: "Testing@1234"
}

test("API testing for login", async ({ request }) => {

const response = await request.post(url, {
data: loginPayload,
})

})
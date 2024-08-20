const API_URL = "http://localhost:3000";

async function login() {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: "jane.doe@fakemail.com",
      password: "test1234",
    }),
  });

  
  return await response.json();
}

async function testSearchWithLogin() {
  const response = await fetch(`${API_URL}/search?q=dog`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": (await login()).token,
    },
  });

  console.log("testSearchWithLogin", {
    status: response.status,
    data: await response.json(),
  });
}

async function testSearchWithoutLogin() {
    const response = await fetch(`${API_URL}/search?q=dog`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    console.log("testSearchWithoutLogin", {
      status: response.status,
      data: await response.json(),
    });
  }
  
testSearchWithLogin();
testSearchWithoutLogin();
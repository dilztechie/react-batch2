class AuthenticationService {
    login = (username, password) => {
        fetch("http://localhost:3030/users").then(response => response.json()).then(users => {
            users.map(data => {
                if (data.user.username === username && data.user.password === password) {
                    localStorage.setItem("user", JSON.stringify(data.user))
                }
            })
        })
    }
}

export default new AuthenticationService()
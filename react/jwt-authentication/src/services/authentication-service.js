class AuthenticationService {

    result = null

    login = (username, password) => {
        fetch("http://localhost:3030/users")
            .then(response => response.json())
            .then(users => {
                users.map(data => {
                    if (data.user.username === username && data.user.password === password) {
                        this.result = data
                    }
                    return this.result
                })
            })
        return this.result
    }

    logout = () => localStorage.removeItem("user")

    getCurrentUser = () => JSON.parse(localStorage.getItem("user"))

}

export default new AuthenticationService()
import axios from "axios"

const instance = axios.create({
    baseURL: "http://emphasoft-test-assignment.herokuapp.com/"
})

export const userAPI = {
    auth(username: string, password: string) {
        return instance.post(`api-token-auth/`, {username, password})
            .then(response => {
                return response.data
            })
    },
    getUsers() {
        return instance.get(`api/v1/users/`)
            .then(response => {
                return response.data
            })
    }
}


import axios from "axios"

const instance = axios.create({
    baseURL: "http://emphasoft-test-assignment.herokuapp.com/"
})

export const userAPI = {
    auth(username: string, password: string) {
        return instance.post(`api-token-auth/`, {username, password})
            .then(response => {
                localStorage.setItem('token', response.data.token)
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

async function setAuthHeader(config: any) {
    let token = localStorage.getItem('token');
    if (!!token) {
        config.headers['Authorization'] =`Token:${token}`;
    }

}

const setInterceptors = (instance: any) => {
    instance.interceptors.request.use(
        async (config: any) => {
            await setAuthHeader(config);
            return config;
        },
        (error: any) => Promise.reject(error)
    );

}

setInterceptors(instance)
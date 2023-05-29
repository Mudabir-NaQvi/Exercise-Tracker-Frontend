import Cookies from "js-cookie"

export default function requestInterceptor(instance) {
    instance.interceptors.request.use((request) => {
        request.headers.Authorization = Cookies.get("token");
        return request
    }, (error) => {
        return Promise.reject(error);
    })
}





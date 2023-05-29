
export default function responseInterceptor(instance) {
    instance.interceptors.request.use((response) => {
        return response
    }, (error) => {
        return Promise.reject(error);
    })
}





import axios, { isAxiosError } from "axios";

const axiosAuthenticated = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
        'Content-Type': 'application/json'
    },
})

axiosAuthenticated.interceptors.request.use(
    async (request) => {
        const accessToken = localStorage.getItem("accessToken");
        const projectHash = localStorage.getItem("project-hash");
        if(projectHash){
            request.headers["project-hash"] = projectHash;
        }

        return request;
    },
    async (err) => Promise.reject(err)
);

axiosAuthenticated.interceptors.response.use(
    (res) => res.data,
    async (err) => {
        if (isAxiosError(err)) {
            const status = err.response?.status;
            const message = err.response?.data?.message || err.message;

            switch (status) {
                case 400:
                    console.error(`Error 400: ${message}`);
                    break;
                case 500:
                    console.error(`Error 500: Something went wrong.: ${message}`);
                    break;
                case 401:
                    console.log(`Error 401: ${message}`)
                    toast.error(message)
                    break;
                case 404:
                    console.error('Error 404: Request Not Found');
                    break;
                case 405:
                    console.error(`Error 405: ${message}`);
                    break;
                default:
                    console.error(`Error: ${message}`);
                    break;
            }
        }
        return Promise.reject(err);
    },
);

export const axiosGet = async (url, params) => {
    return axiosAuthenticated.get(url, { params });
};

export const axiosPost = async (url, data, header) => {
    return axiosAuthenticated.post(url, data, header);
};

export const axiosPatch = async (url, data, header) => {
    return axiosAuthenticated.patch(url, data, header);
};

export const axiosPut = async (url, data) => {
    return axiosAuthenticated.put(url, data);
};

export const axiosDelete = async (url, data) => {
    return axiosAuthenticated.delete(url, data);
};
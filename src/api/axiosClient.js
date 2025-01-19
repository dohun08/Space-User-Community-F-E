import axios from 'axios';


const axiosDataClient = axios.create({
    baseURL: '/api',
    headers:{
        'Content-Type': 'application/json'
    }
});

const refreshAccessToken = async () => {
    const response = await axios.get('/api/user/reissue', null, {
        withCredentials: true,
    });
    return response.data.accessToken;
};

// 요청 인터셉터
axiosDataClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            config.headers.Authorization = `${token}`;
        }
        return config;
    },
    (error) => {
        return error;
    }
);

// 응답 인터셉터
axiosDataClient.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const newAccessToken = await refreshAccessToken();
                localStorage.setItem('accessToken', newAccessToken);
                originalRequest.headers.Authorization = `${newAccessToken}`;

                return axiosDataClient(originalRequest);
            } catch (refreshError) {
                console.error("Refresh token expired or invalid", refreshError);
                window.location.href = '/login';
                return refreshError;
            }
        }

        return error;
    }
);

export default axiosDataClient;
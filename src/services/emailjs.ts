import axios from 'axios';

export interface EmailjsParams {
    service_id: string;
    template_id: string;
    user_id: string;
    template_params?: object;
    accessToken?: string;
}

export const emailjsApi = axios.create({
    baseURL: 'https://api.emailjs.com/api/v1.0/'
})
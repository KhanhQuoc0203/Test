// import axios from "axios";
// const API_URL =
//     import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api";

// export const getTours = async() => {
//     try {

//         const response = await axios.get(`${API_URL}/tours/`);
//         return response.data;
//     } catch (error) {
//         console.error("Error fetching tours:", error);
//         throw error;
//     }
// };
import axiosClient from './axiosClient';

// Lấy danh sách tất cả tour (Khang đã làm)
export const getTours = async() => {
    const response = await axiosClient.get('tours/');
    return response.data;
};

// Lấy chi tiết 1 tour dựa trên ID (Hà dùng cái này)
export const getTourById = async(id) => {
    const response = await axiosClient.get(`tours/${id}/`);
    return response.data;
};
import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertVideo = payload => api.post(`/videos`, payload)
export const getAllVideos = () => api.get(`/videos`)
export const updateVideoById = (id, payload) => api.put(`/videos/${id}`, payload)
export const deleteVideoById = id => api.delete(`/videos/${id}`)
export const getVideoById = id => api.get(`/videos/${id}`)

const apis = {
    insertVideo,
    getAllVideos,
    updateVideoById,
    deleteVideoById,
    getVideoById,
}

export default apis
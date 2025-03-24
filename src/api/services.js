import { axiosDelete, axiosGet, axiosPatch, axiosPost, axiosPut } from "./handler"

// Login API

export const userLogin = async (data) => {
  const response = await axiosPost('/user/login/', data)
  return response.data
}
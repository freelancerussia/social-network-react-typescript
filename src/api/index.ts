import axios from "axios";
import { UserType } from "../redux/usersReducer";
import { UserProfileType } from "../redux/profileReducer";


type GetResponseUsersDataType = {
   items: Array<UserType>
   totalCount: number
}
type AuthDataType = {
   login: string | null
   email: string | null
   id: number | null

}

type AuthDataResponse = {
   data: AuthDataType
   resultCode: number
}

const instance = axios.create({
   baseURL: "https://social-network.samuraijs.com/api/1.0/",
   withCredentials: true,
   headers: {
      // 'Authorization': 'Bearer my-token',
      // 'My-Custom-Header': 'foobar'
   }
})


export const usersAPI = {
   async getUsers(currentPage: number, usersCount: number) {
      return await instance.get<GetResponseUsersDataType>(`users?page=${currentPage}&count=${usersCount}`)
   },
   async getProfile(userId: number | null) {
      return await instance.get<UserProfileType>(`profile/${userId}`)
   },

   async follow(userId: number | null) {
      return await instance.post(`follow/${userId}`)
   },

   async unfollow(userId: number | null) {
      return await instance.delete(`follow/${userId}`)
   },

   async setStatus(status: string | null) {
      return await instance.put('profile/status', { status });
   },
   async getUserStatus(id: number) {
      return await instance.get(`profile/status/${id}`);
   },

};

export const authAPI = {
   async me() {
      return await instance.get<AuthDataResponse>(`auth/me`);
   }
} 
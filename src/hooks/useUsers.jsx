import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useUsers = (email) => {
 

    

    const axiosPublic = useAxiosPublic()
    
    const {data: user =[], isPending: loading, refetch} = useQuery({
        queryKey:['user', email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/users/${email}`)
            return res.data
        },
        enabled:!!email

    })

    return [user, loading, refetch]
};

export default useUsers;
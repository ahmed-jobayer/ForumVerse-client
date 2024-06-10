import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const usePosts = (sortType = "") => {

    const axiosPublic = useAxiosPublic()

    const {data: posts =[], isPending: loading, refetch} = useQuery({
        queryKey: ["posts", sortType],
        queryFn: async () => {
          const res = await axiosPublic.get("/posts",{
            params:{sort: sortType}
          });
          // console.log("Fetched posts:", res.data);
          return res.data;
        },
      });
    
      return [posts, loading, refetch]
};

export default usePosts;
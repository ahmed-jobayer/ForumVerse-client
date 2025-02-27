import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAnnouncements = () => {
  const axiosPublic = useAxiosPublic();

  const {data: announcements =[], isPending: loading, refetch} = useQuery({
    queryKey: ["announcements"],
    queryFn: async () => {
      const res = await axiosPublic.get("/announcements");
      return res.data;
    },
  });

  return [announcements, loading, refetch]
};

export default useAnnouncements;
 
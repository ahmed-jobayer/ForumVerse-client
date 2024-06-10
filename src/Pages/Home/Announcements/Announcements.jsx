import useAnnouncements from "../../../hooks/useAnnouncements";
import Announcement from "./Announcement";


const Announcements = () => {
 
    const [announcements] = useAnnouncements()
    // console.log(announcements.length)

    return (
        <div className="mt-2">
            <h2 className="text-center text-3xl my-4">Announcements</h2>
            <div>
            {
                announcements.map((announcement) => <Announcement 
                key={announcement._id }
                announcement={announcement}
                ></Announcement>)
            }
            </div>
        </div>
    );
};

export default Announcements;
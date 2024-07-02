import { IoMdHome } from "react-icons/io";
import SidebarLink from "./SidebarLink";
import {
  MdAccountCircle,
  MdLeaderboard,
  MdOutlineAccountCircle,
} from "react-icons/md";

function Sidebar() {
  return (
    <aside className="min-h-screen fixed top-0 left-0 w-64 border-r">
      <section className="p-3 pl-3 self-start sticky top-0 col-span-1">
        <h1 className="text-primary font-semibold text-lg border-b w-full pl-2 pb-2 mb-2">
          MET Blog
        </h1>
        <ul className="flex flex-col gap-4">
          <SidebarLink
            name="All Blogs"
            path="blogs"
            icon={<IoMdHome size={24} />}
          />
          <SidebarLink
            name="Leaderboard"
            path="leaderboard"
            icon={<MdLeaderboard size={24} />}
          />
          <SidebarLink
            name="Profile"
            path="profile"
            icon={<MdAccountCircle size={24} />}
          />
        </ul>
      </section>
      
    </aside>
  );
}

export default Sidebar;

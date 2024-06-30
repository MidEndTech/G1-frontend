import { IoMdHome } from "react-icons/io";
import SidebarLink from "./SidebarLink";
import {
  MdAccountCircle,
  MdLeaderboard,
  MdOutlineAccountCircle,
} from "react-icons/md";

function Sidebar() {
  return (
    <aside className="border-r w-72 flex flex-col gap-8 justify-between">
      <section className="p-3 pl-3">
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
      <div className="bg-gray-100 flex gap-2 py-4 px-6 border-t items-center">
        <div className="text-gray-300">
          <MdOutlineAccountCircle size={56} />
        </div>
        <span className="text-lg font-semibold">Username</span>
      </div>
    </aside>
  );
}

export default Sidebar;

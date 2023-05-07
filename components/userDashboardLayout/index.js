import { children } from "react";
import UserSidebar from "../admin/userSidebar";

const UserDashboardLayout = ({children}) => {
    return ( 
        <>
        <div className="block lg:flex justify-between">
        <div className="w-[100%] lg:w-[15%] h-14 lg:h-screen flex justify-between ">
          <UserSidebar />
        </div>
        <div className="w-[100%] lg:w-[85%] bg-slate-300 py-10 px-10">
            {children}
        </div>
        </div>
        </>
     );
}
 
export default UserDashboardLayout;
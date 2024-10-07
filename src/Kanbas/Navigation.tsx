import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { SlCalender } from "react-icons/sl";
import { IoIosSettings } from "react-icons/io";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom"; 

export default function KanbasNavigation() {
  const location = useLocation(); 
  
  
  const getLinkClass = (path:string) => {
    return location.pathname === path
      ? "list-group-item text-center border-0 bg-white text-danger"
      : "list-group-item text-center border-0 bg-black text-white";
  };

  return (
    <div id="wd-kanbas-navigation" style={{ width: 110}} 
         className="list-group rounded-0 position-fixed
         bottom-0 top-0 d-none d-md-block bg-black z-2">
      <a id="wd-neu-link" target="_blank" 
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0 text-center">
        <img src="/images/NEU.png" width="75px" /></a>

      <Link to="/Kanbas/Account" id="wd-account-link"
        className={getLinkClass("/Kanbas/Account/Signin")}>
        <FaRegCircleUser className="fs-1 text text-danger" /><br />
        Account </Link>

      <Link to="/Kanbas/Dashboard" id="wd-dashboard-link"
        className={getLinkClass("/Kanbas/Dashboard")}>
        <AiOutlineDashboard className="fs-1 text text-danger" /><br />
        Dashboard </Link>

      <Link to="/Kanbas/Courses" id="wd-course-link"
        className={getLinkClass("/Kanbas/Courses")}>
        <LiaBookSolid className="fs-1 text text-danger" /><br />
        Courses </Link>

      <Link to="/Kanbas/Calender" id="wd-calender-link"
        className={getLinkClass("/Kanbas/Calender")}>
        <SlCalender className="fs-1 text text-danger" /><br />
        Calender </Link>

      <Link to="/Kanbas/inbox" id="wd-inbox-link"
        className={getLinkClass("/Kanbas/inbox")}>
        <FaInbox className="fs-1 text text-danger" /><br />
        Inbox </Link>

      <Link to="/labs" id="wd-labs-link"
        className={getLinkClass("/labs")}>
        <IoIosSettings className="fs-1 text text-danger" /><br />
        Labs </Link>
    </div>
  );
}
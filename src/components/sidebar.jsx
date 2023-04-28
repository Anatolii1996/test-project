import MenuWrap from "./menu";
import DashboardImg from "../assets/setting 1.png";
import UserPhoto from "../assets/Ellipse 8.png";

const Sidebar = () => {

  return (
    <>
      <div className={`sidebar
      `
       }>
        <div className="sidebar_title">
          <img src={DashboardImg} alt="dashboard-img" />
          <h1>Dashboard</h1>
          <p>v.01</p>
        </div>
        <MenuWrap />
        <div className="user_info">
          <img src={UserPhoto} alt="user-photo" />
          <div className="user_title">
            <p className="user_name">Evano</p>
            <p className="user_position">Project Manager</p>
          </div>
        </div>
      </div>
      
    </>
  );
};
export default Sidebar;

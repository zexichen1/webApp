import { Link, NavLink } from "react-router-dom";
export default function Dashboard() {
  return (
  <div id="wd-dashboard">
  <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
  <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
  <div id="wd-dashboard-courses" className="row">
    <div className="row row-cols-1 row-cols-md-5 g-4">
      <div className="wd-dashboard-course col" style={{ width: "300px" }}>
        <div className="card rounded-3 overflow-hidden">
          <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/reactjs.jpg" width="100%" height={160}/>
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
                 CS1234 React JS
              </h5>
              <p className="wd-dashboard-course-title card-text">
                  Full Stack software developer
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </Link>
        </div>
      </div>
    

    
      <div className="wd-dashboard-course col" style={{ width: "300px" }}>
        <div className="card rounded-3 overflow-hidden">
          <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/ai/Home">
            <img src="/images/ai.jpg" width="100%" height={160}/>
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
                 CS1 AI
              </h5>
              <p className="wd-dashboard-course-title card-text">
                  Full Stack software developer
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </Link>
        </div>
      </div>
    

    
      <div className="wd-dashboard-course col" style={{ width: "300px" }}>
        <div className="card rounded-3 overflow-hidden">
          <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/algorithm/Home">
            <img src="/images/algorithm.jpg" width="100%" height={160}/>
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
              CS2 algorithm
              </h5>
              <p className="wd-dashboard-course-title card-text">
                  Full Stack software developer
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </Link>
        </div>
      </div>
    

    
      <div className="wd-dashboard-course col" style={{ width: "300px" }}>
        <div className="card rounded-3 overflow-hidden">
          <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/netsecurity/Home">
            <img src="/images/netsecurity.jpg" width="100%" height={160}/>
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
              CS3 netsecurity
              </h5>
              <p className="wd-dashboard-course-title card-text">
                  Full Stack software developer
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </Link>
        </div>
      </div>
    

    
      <div className="wd-dashboard-course col" style={{ width: "300px" }}>
        <div className="card rounded-3 overflow-hidden">
          <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/network/Home">
            <img src="/images/network.jpg" width="100%" height={160}/>
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
              CS4 network
              </h5>
              <p className="wd-dashboard-course-title card-text">
                  Full Stack software developer
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </Link>
        </div>
      </div>
    
    
      <div className="wd-dashboard-course col" style={{ width: "300px" }}>
        <div className="card rounded-3 overflow-hidden">
          <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/robot/Home">
            <img src="/images/robot.jpg" width="100%" height={160}/>
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
              CS5 robot
              </h5>
              <p className="wd-dashboard-course-title card-text">
                  Full Stack software developer
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </Link>
        </div>
      </div>
    
    
      <div className="wd-dashboard-course col" style={{ width: "300px" }}>
        <div className="card rounded-3 overflow-hidden">
          <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/writing/Home">
            <img src="/images/writing.jpg" width="100%" height={160}/>
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
              CS6 writing
              </h5>
              <p className="wd-dashboard-course-title card-text">
                  Full Stack software developer
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </Link>
        </div>
      </div>
      </div>
    
  </div>
  </div>

  );
}

import { SideNav } from "../navbar/SideNav";
import dr from "../../assets/dr.png";
import { TopNav } from "../TopNav";
// import mimg from "../assets/myimg.jpg"
import { useEffect, useState } from "react";
import "./Dashboard.css";
import {DocNav} from "../navbar/DocNav";

export const MobDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  // const [appointmentList, setAppointmentList] = useState([])

  const token = sessionStorage.getItem("token");

  useEffect(() => {
    fetch("https://it262-proj-44tb.onrender.com/appointments/appointment/", {
      method: "GET",
      headers: {
        //    'Content-type': 'application/json',
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then(({ data: appointmet }) => {
        setAppointments(appointmet);
      })
      .then(console.log(appointments))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  console.log(appointments);

  let rawdate = new Date()
  let month = rawdate.getMonth();
  let date = rawdate.getDate();

  const months = [0, "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const Day = [0,"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"]
  console.log(date);

  // let present_app_symp = appointments[0]?.symptoms
  // console.log(present_app_symp)

  // console.log(window.innerWidth - 600);
  return (
    <div className="mainc">
      <TopNav />
      <DocNav />
      {/* {window.innerWidth - 600 < 0 ? ("") : (<SideNav/>)} */}
      <div className="dashboard-container">
        <img className="dbimg" src={dr} />
        <div className="Welcometitle">Good Afternoon </div>
        <div className="container1">
          <div className="profile">
            <h5 className="upapt">Upcoming Appointment</h5>

            <p>{Day[rawdate.getDay()]}</p>
            <br></br>
            <h4>{date} {months[month]}</h4>

            {/* <div className="nadetail">
                        <p>202152343 | Ved Vaghela</p> */}
            {/* <div className="symptoms">
                            Symptoms
                           <ol>
                            <li>cough</li>
                            <li>fever</li>
                            {appointments.map(appt => <li>{appt.symptoms}</li>)}
                           </ol>
                        </div> */}
            {/* </div> */}
            {/* <div className="cardimg">
                        <img className="imgincard"src={mimg}/>
                    </div> */}
          </div>
          <div className="databox"></div>
          <div className="appointmentsbox">
            <h3 className="todayapt">Today's Appointments</h3>
            {/* <hr></hr> */}
            <div className="listbox">
            <ol className="custom-counter">
              {appointments.map((appt) => (
                <li className="apmt" key={appointments.student_data}>
                  <div className="apmt-details">
                  <div className="apmt-name">{appt.student_data.name}</div>
                  <div className="apmt-rollno">{appt.student_data.rollno} </div>
                  </div>
                </li>
              ))}
            </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// <div className="apmt">
// <div className="apmt-name">Ved Vaghela</div>
//     <div className="apmt-rollno">202152343</div>

//     {/* <div className="apmt-no">1</div> */}
// </div>
// <div className="apmt">
// <div className="apmt-name">Krish Patel</div>
// <div className="apmt-rollno">202152318</div>

//     {/* <div className="apmt-no">2</div> */}
// </div>
// <div className="apmt">
// <div className="apmt-name">Deepak Gohil</div>
// <div className="apmt-rollno">202152311</div>

//     {/* <div className="apmt-no">3</div> */}
// </div>
// <div className="apmt">
// <div className="apmt-name">Dharmik Jethva</div>
// <div className="apmt-rollno">202152309</div>

//     {/* <div className="apmt-no">4</div> */}
// </div>

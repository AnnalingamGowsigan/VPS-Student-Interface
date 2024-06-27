import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import './nav.css';
import { ExaminationActions } from '../../Actions/Examination/ExaminationActions';
import { CaseActions } from '../../Actions/Case/CaseActions';
import { DiagnosisActions } from '../../Actions/Diagnosis/DiagnosisActions';
import { InvestigationActions } from '../../Actions/Investigation/InvestigationActions';
import { ScoreActions } from '../../Actions/Score/ScoreActions';
import { historyTakingActions } from '../../Actions/historyTakingQ/historyTakingActions';
import { TimeActions } from '../../Actions/Time/TimeActions';
import { UserLogoutActions } from '../../Actions/User/UserLogoutActions';

function Navbar() {
  const { userInfomation } = useSelector((state) => state.user);
  const { selectedCaseDetails } = useSelector((state) => state.caseSelected);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick2 = (e) => {
    e.preventDefault(); // Prevent form submission
    console.log("logout");
    dispatch(UserLogoutActions.logout());
    dispatch(ExaminationActions.clearhistory());
    dispatch(CaseActions.clearhistory());
    dispatch(DiagnosisActions.clearhistory());
    dispatch(historyTakingActions.clearhistory());
    dispatch(InvestigationActions.clearhistory());
    dispatch(ScoreActions.clearhistory());
    dispatch(TimeActions.clearhistory());
    const signInDiv = document.getElementById("signInDiv");
    if (signInDiv) {
      signInDiv.hidden = false; // Ensure the sign-in button is visible upon logout
    }
    navigate("/");
  };

  return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Hi {userInfomation.name}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarColor01">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  {selectedCaseDetails ?
                      <a className="nav-link">{selectedCaseDetails.caseId}</a> : null }
                </li>
              </ul>
              <form className="d-flex">
                <button className="btn btn-secondary my-2 my-sm-0" type="button" onClick={handleClick2}>Logout</button>
              </form>
            </div>
          </div>
        </nav>
      </div>
  );
}

export default Navbar;

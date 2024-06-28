import React from 'react';
import { Grid } from '@mui/material';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Dropdowns = ({ handleSection, handleSelect, questionsForDropdown, selectedCaseDetails }) => {
    return (
        <Grid container style={{ marginLeft: "1px" }}>
            <Grid item xs={6}>
                <Dropdown
                    className="phddown1"
                    title="Select the Section"
                    id="dropdown-menu-align-right"
                    onSelect={handleSection}
                >
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Select the section
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item eventKey="dhistory">Dietary history</Dropdown.Item>
                        <Dropdown.Item eventKey="habits">Habits</Dropdown.Item>
                        <Dropdown.Item eventKey="complaint">History of the presenting complaint</Dropdown.Item>
                        <Dropdown.Item eventKey="medicalH">Medical history</Dropdown.Item>
                        <Dropdown.Item eventKey="plaque">Plaque control</Dropdown.Item>
                        {selectedCaseDetails.caseId === "C001" && (
                            <Dropdown.Item eventKey="pretreate">Previous dental treatments</Dropdown.Item>
                        )}
                        <Dropdown.Item eventKey="shistory">Social history</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Grid>
            <Grid item xs={6}>
                <div className="phddown2">
                    <DropdownButton
                        className="ddown1"
                        alignRight
                        title="Select the question"
                        id="dropdown-menu-align-right1"
                        onSelect={handleSelect}
                        variant="success"
                    >
                        {questionsForDropdown.map((question) => (
                            <Dropdown.Item eventKey={question.id} key={question.id}>
                                {question.q}
                            </Dropdown.Item>
                        ))}
                    </DropdownButton>
                </div>
            </Grid>
        </Grid>
    );
};

export default Dropdowns;

import React, { useContext, useEffect, useState } from 'react';
import { StepContext } from "../../context/StepContext";
import PeriodontalScreening from "./Steps/PeriodontalScreening";
import SoftTissueAssessment from "./Steps/SoftTissueAssessment";
import HardTissueAssessment from "./Steps/HardTissueAssessment";
import Investigations from "./Steps/Investigations";
import Radiographs from "./Steps/Radiographs";
import SensibilityRecordings from "./Steps/SensibilityRecordings";
import HematologicalRecordings from "./Steps/HematologicalRecordings";
import Diagnosis from "./Steps/Diagnosis";

const ExaminationQuestionSections = () => {
    const { step } = useContext(StepContext);
    const [section, setSection] = useState(0);

    useEffect(() => {
        setSection(step);
    }, [step]);

    return (
        <div>
            {section === 0 ? (
                <PeriodontalScreening />
            ) : section === 1 ? (
                <SoftTissueAssessment />
            ) : section === 2 ? (
                <HardTissueAssessment />
            ) : section === 3 ? (
                <Investigations />
            ) : section === 4 ? (
                <Radiographs />
            ) : section === 5 ? (
                <SensibilityRecordings />
            ) : section === 6 ? (
                <HematologicalRecordings />
            ) : section === 7 ? (
                <Diagnosis />
            ) : null}
        </div>
    );
};

export default ExaminationQuestionSections;

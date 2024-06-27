import React, { useContext } from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { CaseContext } from '../../../context/CaseContext'

const CaseCard = ({ caseSelectedInUI }) => {
    const { setSelectedCaseDetails } = useContext(CaseContext);
    const navigate = useNavigate();

    const handleClick = () => {
        setSelectedCaseDetails(caseSelectedInUI);
        navigate("/historyTaking");
    };

    return (
        <Card>
            <CardActionArea onClick={handleClick}>
                <CardMedia
                    component="img"
                    height="140"
                    image={caseSelectedInUI.thumbnailImageURL}
                    alt={caseSelectedInUI.caseName}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {caseSelectedInUI.caseName}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        {caseSelectedInUI.caseScenario}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        {caseSelectedInUI.mainComplaintType}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default CaseCard;

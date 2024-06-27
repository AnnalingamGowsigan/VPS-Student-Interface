import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { CaseActions } from '../../../Actions/Case/CaseActions';

const CaseCard = ({ caseSelectedInUI }) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(CaseActions.setSelectedCase(caseSelectedInUI));
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

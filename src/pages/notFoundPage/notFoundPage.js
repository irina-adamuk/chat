import Button from '@mui/material/Button';
import CottageIcon from '@mui/icons-material/Cottage';
import { NavLink } from "react-router-dom";

import './notFoundPage.scss';
import Cloud from '../../assets/img/cloud.png';
export const PageNotFound = () => {
    return (
        <div className='notfound-page'>
            <div className='cloud-container'>
                <img className="cloud" src={Cloud} alt="cloud"/>
                <div className='notfound-title'>OOps</div>
                <div className='notfound-subtitle'>Page Not Found</div>
                <NavLink className="button-link" to="/">
                    <Button className="notfound-btn" variant="outlined" size="large" endIcon={<CottageIcon/>}>Go Home</Button>
                </NavLink>
                
            </div>
        </div>
    )
}
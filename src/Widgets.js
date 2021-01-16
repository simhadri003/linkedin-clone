import React from 'react';
import './Widgets.css';
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
           <FiberManualRecordIcon />
            </div>

            <div className="widgets__articleRight ">
                
            <h4>{heading}</h4>
            <p>{subtitle}</p>

            </div>
        </div>
    )

    return (
        <div className='widgets'>
            <div className="widgets__header">
               <h2>Linkedin News</h2>
               <InfoIcon /> 

            </div>
           {newsArticle("Corona vaccine launches", 'TOP NEWS - 9099 readers')} 
           {newsArticle("CoronaVirus UK updates", 'TOP NEWS - 6475 readers')} 
           {newsArticle("Tesla hits new high", 'Cars & auto - 4867 readers')} 
           {newsArticle("Bitcoins Break $22", 'Crypto - 1054 readers')} 
           {newsArticle("Id Redux too good?", 'Code NEWS - 254 readers')} 
           {newsArticle("Tata launches new car", 'Automobile - 6503 readers')} 

        </div>
        
    );
}

export default Widgets;

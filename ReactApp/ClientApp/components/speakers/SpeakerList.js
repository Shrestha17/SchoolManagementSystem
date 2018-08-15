import PropTypes from 'prop-types';
import React from 'react';
import SpeakerListItem from './SpeakerListItem';

export default function SpeakerList({ speakers }) {  
  return (    
              <div>
                {speakers.map(item => (               
                  <SpeakerListItem
                    key={item.id}
                    fName={item.fName}
                    lName={item.lName}                  
                    id={item.id}
                  />                 
                ))}            
           </div>
            
               );
              }

SpeakerList.propTypes = {
  speakers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      fName: PropTypes.string,
      lName: PropTypes.string,     
    })
  ),
};

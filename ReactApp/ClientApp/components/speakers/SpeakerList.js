import PropTypes from 'prop-types';
import React from 'react';
import SpeakerListItem from './SpeakerListItem';

export default function SpeakerList({ speakers }) {  
  return (    
              <div>
                    <table>
                        <thead>
                          <tr>
                            <th>Id</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                          </tr>
                        </thead>
                        <tbody>
                {speakers.map(item => (                    
                          <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.fName}</td>
                            <td>{item.lName}</td>
                          </tr>
                           
                  // <SpeakerListItem
                  //   key={item.id}
                  //   fName={item.fName}
                  //   lName={item.lName}                  
                  //   id={item.id}
                  // />                 
                ))}   
                    </tbody>
                      </table>           
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

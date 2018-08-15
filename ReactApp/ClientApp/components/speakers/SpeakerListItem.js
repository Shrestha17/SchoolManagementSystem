import React from 'react';
import PropTypes from 'prop-types';

export default function SpeakerListItem({id,fName,lName})
 {                                                                                       
    return (       
            <div>              
                {fName} {lName}
            </div>                               
    );
}

SpeakerListItem.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    fName: PropTypes.string,
    lName: PropTypes.string,
};

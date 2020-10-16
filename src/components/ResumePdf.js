import React from 'react';
import ResumePDFFile from '../assets/Resume.pdf'

const ResumePdf = (props) => {
    return (
        <object data={ResumePDFFile} type='application/pdf' width={'100%'} height={window.innerHeight}/>
    )
}

export default ResumePdf;
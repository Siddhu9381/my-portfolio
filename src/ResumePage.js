import './Resume.css'
import React, { useState } from "react";
import { Document, Page } from "react-pdf";

const ResumePage = ({ file }) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    return (
        <div className="pdf-viewer">
            <Document file={`${process.env.PUBLIC_URL}/Resume_Sidhartha_Gundarapu.pdf`} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} renderTextLayer={false}
                    renderAnnotationLayer={false} />
            </Document>
        </div>
    );
};

export default ResumePage;
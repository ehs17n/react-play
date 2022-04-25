
import React, { useState, useEffect } from 'react';

import useFetch from 'common/hooks/useFetch';
import { Modal } from "common";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import ProcessImage from './ProcessImage';

const ListFiles = ({updateList}) => {

  const URI = 'https://api.uploadcare.com/files/';
  
  const headers = {
    "Authorization": `Uploadcare.Simple ${process.env.REACT_APP_UPLOADCARE_API_PUBLIC_KEY}:${process.env.REACT_APP_UPLOADCARE_API_SECRET_KEY}`
  };
  
  const {data, loading, error} = useFetch(URI, { headers });
  const [files, setFiles] = useState([]);
  const [showImgProcessModal, setShowImageProcessModal] = useState(false);
  const [fileToProcess, setFileToProcess] = useState(null);

  useEffect(() => {
    console.log('test');
    if (data.results) {
      setFiles(data.results);
      console.log(data.results);
    }
  }, [updateList]);

  useEffect(() => {
    console.log('test2');
    if (data.results) {
      setFiles(data.results);
      console.log(data.results);
    }
  }, [loading]);

  const deleteFile = (fileId) => {
    const URI = `https://api.uploadcare.com/files/${fileId}/`;
    const options = {
      method: 'DELETE',
      headers: headers
    };
    fetch(URI, options)
      .then(res => res.json())
      .then(data => {
        // filter out deleted file
        const newFiles = files.filter(file => file.uuid !== fileId);
        setFiles(newFiles);
      })
      .catch(err => console.log(err));
  };

  const editFile = (file) => {
    console.log(file);
    setFileToProcess(file);
    setShowImageProcessModal(true);
  }

  return (
    <div>
      <Modal
        title="Process Image"
        onClose={() => setShowImageProcessModal(false)}
        show={showImgProcessModal}
        cname="uc-ip"
        children={
          <ProcessImage file={fileToProcess} />
        }
      />
      <h1>Gallery</h1>
      <ul className="uc-list-images">
        {loading && <li>Loading...</li>}
        {error && <li>Error: {error.message}</li>}
        {files.length > 0 ? files.map(file => (
          <li key={file.uuid} className="item">
            <div className="header">
              <span className="name">{file.original_filename}</span>
              <div className="actions">
                <span className="icon" onClick = {(image) => editFile(file)}><FiEdit /></span>
                <span className="icon" onClick={(id) => deleteFile(file.uuid) }><FiTrash2 /></span>
              </div>
            </div>
            <div className="file">
              <img src={file.original_file_url} alt={file.original_filename} />
            </div>
          </li>
        )) : <li>No files found</li>}
      </ul>
    </div>
  );
};

export default ListFiles;
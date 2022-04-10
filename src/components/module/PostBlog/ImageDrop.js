import React, { useCallback, useState } from "react";
import Dropzone from "react-dropzone";
import "./imageDrop.css";

const ImageDrop = ({ setFieldValue, index }) => {
  const [imageUrl, setimageUrl] = useState(null);

  const drop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    const url = URL.createObjectURL(acceptedFiles[0]);
    console.log(url);
    setimageUrl(url);
    setFieldValue(`blog[${index}].value`, acceptedFiles[0]);
  }, []);

  return (
      <Dropzone onDrop={drop} accept="image/*" maxFiles={1}>
        {({
          getRootProps,
          getInputProps,
          isDragAccept,
          isDragActive,
          isDragReject,
        }) => (
          <section>
            <div
              {...getRootProps()}
              className={`imageDropBox ${
                !imageUrl
                  ? isDragActive
                    ? isDragReject
                      ? "reject"
                      : "active"
                    : ""
                  : "image"
              }`}
            >
              <input {...getInputProps()} />
              {imageUrl ? (
                <img src={imageUrl} />
              ) : isDragActive ? (
                isDragReject ? (
                  <p>only images are allowed</p>
                ) : (
                  <p>Drop your file</p>
                )
              ) : (
                <p>Drag and drop to upload your file</p>
              )}
            </div>
          </section>
        )}
      </Dropzone>
  );
};

export default ImageDrop;

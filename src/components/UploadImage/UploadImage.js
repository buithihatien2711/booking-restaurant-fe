import React, { Component } from "react";
import "./UploadImage.scss";

export class UploadImage extends Component {
    // const [selectedImages, setSelectedImages] = useState([]);
    state = {
        selectedImages: [],
        imageURLs: [],
    };
    
    handleFileUpload = (event) => {
        // const fileList = event.target.files;
        // console.log('event: ', event)
        // const images = Array.from(fileList);
        // this.props.onImageUpload(images); // Invoke the parent component's function
        console.log("event file upload");
    };

    onSelectFile = (event) => {
        const selectedFiles = event.target.files;
        const selectedFilesArray = Array.from(selectedFiles);

        const imagesArray = selectedFilesArray.map((file) => {
        return URL.createObjectURL(file);
        });

        this.setState((prevState) => ({
        selectedImages: [...prevState.selectedImages, ...selectedFilesArray],
        imageURLs: [...prevState.imageURLs, ...imagesArray],
        }));

        const { onChange } = this.props;
        const images = [...this.state.selectedImages, ...selectedFilesArray];
        if (onChange) {
            onChange(images);
        }
    };

    deleteHandler(imageIndex) {
        const selectedImagesCopy = [...this.state.selectedImages];
        const imageURLsCopy = [...this.state.imageURLs];

        selectedImagesCopy.splice(imageIndex, 1);
        imageURLsCopy.splice(imageIndex, 1);

        this.setState({
            selectedImages: selectedImagesCopy,
            imageURLs: imageURLsCopy,
        });

        URL.revokeObjectURL(this.state.imageURLs[imageIndex]);

        const { onChange } = this.props;
        const images = selectedImagesCopy
        if (onChange) {
            onChange(images);
        }
    }

    render() {
        return (
        <div className="upload-image">
            <div className="upload-image-container">
            <div className="add-image">
                <div className="lbl-add-image">
                <label>
                    + Add Images
                    <br />
                    <span>up to 10 images</span>
                    <input
                    type="file"
                    name="images"
                    onChange={(event) => this.onSelectFile(event)}
                    multiple
                    accept="image/png , image/jpeg, image/webp"
                    />
                </label>
                </div>
            </div>
            <br />

            <input type="file" multiple />
            {this.state.selectedImages.length > 0 &&
                this.state.selectedImages.length > 10 && (
                <p className="error">
                    You can't upload more than 10 images! <br />
                    <span>
                    please delete <b> {this.state.selectedImages.length - 10} </b>{" "}
                    of them{" "}
                    </span>
                </p>
                )}

            <div className="images">
                {this.state.imageURLs &&
                this.state.imageURLs.map((image, index) => {
                    return (
                    <div key={image} className="image">
                        <img
                        src={image}
                        height="200"
                        alt="upload"
                        className="img-fluid"
                        />
                        <button onClick={() => this.deleteHandler(index)}>
                        delete image
                        </button>
                        <p>{index + 1}</p>
                    </div>
                    );
                })}
            </div>
            </div>
        </div>
        );
    }
}

export default UploadImage;

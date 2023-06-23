import React, { Component } from "react";
import "./UploadImage.scss";

export class UploadImage extends Component {
    // const [selectedImages, setSelectedImages] = useState([]);
    state = {
        selectedImages: [],
    };

    onSelectFile = (event) => {
        const selectedFiles = event.target.files;
        const selectedFilesArray = Array.from(selectedFiles);

        const imagesArray = selectedFilesArray.map((file) => {
            return URL.createObjectURL(file);
        });

        let selectedImagesCopy = this.state.selectedImages;
        selectedImagesCopy = selectedImagesCopy.concat(imagesArray)

        this.setState({
            selectedImages: selectedImagesCopy,
        });
        //   setSelectedImages((previousImages) => previousImages.concat(imagesArray));

        // FOR BUG IN CHROME
        // event.target.value = "";

        // // // Invoke the parent component's callback function
        // const fileList = event.target.files;
        // console.log('event: ', event)
        // const images = Array.from(fileList);

        const { onChange } = this.props;
        const images = selectedImagesCopy;
        if (onChange) {
            onChange(images);
        }

        // console.log('>>> images: ', this.state.selectedImages)
    };

    deleteHandler(image) {
        let selectedImagesCopy = this.state.selectedImages.filter(
            (e) => e !== image
        );
        // setSelectedImages(selectedImages.filter((e) => e !== image));
        this.setState({
            selectedImages: selectedImagesCopy,
        });
        URL.revokeObjectURL(image);
    }

    handleFileUpload = (event) => {
        // const fileList = event.target.files;
        // console.log('event: ', event)
        // const images = Array.from(fileList);
        // this.props.onImageUpload(images); // Invoke the parent component's function
        console.log('event file upload')
    };

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
                        )
                    }

                    <div className="images">
                        {this.state.selectedImages &&
                            this.state.selectedImages.map((image, index) => {
                                return (
                                    <div key={image} className="image">
                                        <img src={image} height="200" alt="upload"
                                            className="img-fluid"
                                        />
                                        <button onClick={() => this.deleteHandler(image)}>
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

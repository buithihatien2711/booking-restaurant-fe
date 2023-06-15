import React, { Component } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./SlideShow.scss";
import { MdClose } from "react-icons/md";

class SlideShow extends Component {
    state = {
        isFullScreen: false,
        currentSlide: null,
    };

    handleOnclickMenu = (index) => {
        // alert('onclick')
        this.setState({
            isFullScreen: true,
            currentSlide: index,
        });
        // alert(this.state.isFullScreen);
        // console.log(index);
    };
    handleCloseFullScreen = () => {
        this.setState({
            isFullScreen: false,
            currentSlide: null,
        });
    };

    render() {
        const { isFullScreen, currentSlide } = this.state;
        const images = this.props.images
        if (!isFullScreen && currentSlide === null) {
            return (
                <div className="default-slide">
                    {images && images.length > 0 ? (
                        <Slide autoplay={false}>
                            {/* {console.log('>>>state: ', images)} */}
                            {images.map((image, index) => (
                                <div key={index} className="each-slide">
                                    {/* <div className="slide-image" style={{ backgroundImage: `url(${image})` }} onClick={() => this.handleClick(index)}>
                                        </div> */}
                                    <img
                                        src={image.url}
                                        alt=""
                                        onClick={() => this.handleOnclickMenu(index)}
                                    />
                                </div>
                            ))}
                        </Slide>) : (
                        <div>No images available</div>
                    )}
                </div>
            );
        } else {
            if (images && images.length > 0) {
                return (
                    <div className="full-screen-slide">
                        <Slide autoplay={false}>
                            {images.map((image, index) => (
                                <div key={index} className="each-slide">
                                    {/* <div className="slide-image" style={{ backgroundImage: `url(${image})` }} onClick={() => this.handleClick(index)}>
                                </div> */}
                                    <img src={image.url} alt="" />
                                </div>
                            ))}
                        </Slide>
                        <div
                            className="close-slide"
                            onClick={() => this.handleCloseFullScreen()}
                        >
                            <MdClose />
                        </div>
                    </div>
                );
            } else {
                return <div>No images available</div>
            }
        }

    }
}

export default SlideShow;

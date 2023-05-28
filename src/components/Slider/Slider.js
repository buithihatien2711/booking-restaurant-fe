import React, { Component } from 'react';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      images: []
    };
  }

  componentDidMount() {
    let arrImage = [
      'https://product.hstatic.net/1000275435/product/19649878852941771838_optimized_c11ad126d57340ea9debbba2dc3cd99b_large_4d882479420149c48193a66350e2d3b2_large.jpg',
      'https://product.hstatic.net/1000275435/product/19649878852941771838_optimized_c11ad126d57340ea9debbba2dc3cd99b_large_4d882479420149c48193a66350e2d3b2_large.jpg',
      'https://product.hstatic.net/1000275435/product/19649878852941771838_optimized_c11ad126d57340ea9debbba2dc3cd99b_large_4d882479420149c48193a66350e2d3b2_large.jpg',
      'https://product.hstatic.net/1000275435/product/19649878852941771838_optimized_c11ad126d57340ea9debbba2dc3cd99b_large_4d882479420149c48193a66350e2d3b2_large.jpg',
      'https://product.hstatic.net/1000275435/product/19649878852941771838_optimized_c11ad126d57340ea9debbba2dc3cd99b_large_4d882479420149c48193a66350e2d3b2_large.jpg'
    ]
    this.setState({
      images: arrImage
    }
    )
  }

  handleNext = () => {
    const { currentIndex, images } = this.state;
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    this.setState({ currentIndex: newIndex });
  };

  handlePrev = () => {
    const { currentIndex, images } = this.state;
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    this.setState({ currentIndex: newIndex });
  };

  render() {
    const { currentIndex, images } = this.state;

    if (images.length === 0) {
      // Show loading indicator or placeholder while images are being fetched
      return <div>Loading...</div>;
    }

    return (
      <div className="slider">
        <button onClick={this.handlePrev}>Prev</button>
        <img src={images[currentIndex]} alt="Slider" />
        <button onClick={this.handleNext}>Next</button>
      </div>
    );
  }
}

export default Slider;
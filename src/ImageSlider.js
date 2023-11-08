import React, { Component } from 'react';
import './ImageSlider.css';
class ImageSlider extends Component {
  constructor() {
    super();
    this.state = {
      images: [
        'image1.png',
        'image2.png',
        'image3.png',
        // Add more image URLs as needed
      ],
      currentImageIndex: 0,
    };
  }

  render() {
    const { images, currentImageIndex } = this.state;
    return (
      <div className="image-slider">
        <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
        <button onClick={this.previousImage}>Previous</button>
        <button onClick={this.nextImage}>Next</button>
      </div>
    );
  }

  previousImage = () => {
    this.setState((prevState) => ({
      currentImageIndex:
        (prevState.currentImageIndex - 1 + this.state.images.length) % this.state.images.length,
    }));
  };

  nextImage = () => {
    this.setState((prevState) => ({
      currentImageIndex: (prevState.currentImageIndex + 1) % this.state.images.length,
    }));
  };
}

export default ImageSlider;

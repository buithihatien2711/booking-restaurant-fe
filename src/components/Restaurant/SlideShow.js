import React, { Component } from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './SlideShow.scss'

export class SlideShow extends Component {
    render() {
        const images = [
            "https://file.hstatic.net/1000275435/file/85837c3c4612984cc103_23f1291ce0f1456f8bbce7641a90c3a4_grande.jpg",
            "https://file.hstatic.net/1000275435/file/778377404d6e9330ca7f_795187b94acf4d7390cf0cf2b22d16f2_grande.jpg",
            "https://file.hstatic.net/1000275435/file/5021dc98e6b638e861a7_c615283c5ea64eba891084c1ee08fc9b_grande.jpg",
        ];
        return(
            <Slide>
                {images.map((image, index) => (
                    <div key={index} className="each-slide">
                        <div style={{ backgroundImage: `url(${image})` }} onClick={() => this.handleClick(index)}>
                            <span>Slide {index + 1}</span>
                        </div>
                    </div>
                ))}
            </Slide>
        )
    }
}

export default SlideShow
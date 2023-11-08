import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Carousel } from 'antd';

Banner.propTypes = {

};

function Banner(props) {
    let ref = useRef();

    return (
        <div className="slider">
            <div className="slider-btn slider-btn--left" onClick={() => ref.current.prev()}><LeftOutlined /></div>
            <Carousel
                autoplay pauseOnHover={true}
                pauseOnDotsHover={true}
                draggable
                ref={ref}
            >
                <div className="slider-item"></div>
                <div className="slider-item"></div>
                <div className="slider-item"></div>
            </Carousel>
            <div className="slider-btn slider-btn--right" onClick={() => ref.current.next()}><RightOutlined /></div>
        </div>
    );
}

export default Banner;
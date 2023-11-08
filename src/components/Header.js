import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Input } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import path from '../utils/path';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentUserRedux, handleLogoutRedux } from '../store/asyncActions';
import Swal from 'sweetalert2';
import { GiDeliveryDrone } from 'react-icons/gi';
import { PiSteeringWheelFill } from 'react-icons/pi';
import { MdPayments } from 'react-icons/md';
import { BiUserCircle } from 'react-icons/bi';
import { BsCartFill } from 'react-icons/bs';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

import '../style.scss';

Header.propTypes = {

};

function Header(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user_id = useSelector((state) => state.user.id);
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
    const userCurrent = useSelector((state) => state.user);

    useEffect(() => {
        //User Refresh
        if (!userCurrent.current && isLoggedIn && user_id) {
            dispatch(getCurrentUserRedux(user_id));
        }

        //Token Expired
        if (!isLoggedIn && !user_id) {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Phiên làm việc đã hết hạn, hãy đăng nhập lại!',
                showConfirmButton: false,
                timer: 1500
            });
            navigate(`/${path.LOGIN}`);
        }

        return () => {
            if (!isLoggedIn) {
                navigate(`/${path.LOGIN}`);
            }
        }
    }, [isLoggedIn]);

    console.log('Current User Header >>> ', userCurrent);

    const handleUserLogout = () => {
        dispatch(handleLogoutRedux());
    }

    return (
        <div className="header">
            <div className="header-above">
                <div className="header-above__wrapper">
                    <i className="fa-solid fa-phone-volume phone-item"></i>
                    &nbsp;
                    <span className="hotline-wrapper">
                        <span className="hotline-wrapper__title">Hotline:</span>
                        <span className="hotline-wrapper__phonenumber"></span>
                    </span>
                </div>
            </div>
            <div className="header-main">
                <div className="header-main__logo" onClick={() => navigate(`/${path.HOME}`)} style={{ cursor: 'pointer' }}></div>
                <div className="header-main__brand" onClick={() => navigate(`/${path.HOME}`)} style={{ cursor: 'pointer' }}>
                    <div className="header-main__brand-img"></div>
                </div>
                <div className="header-main__wrapper">
                    <div className="header-main__search-cart">
                        <div className="header-main__search-box">
                            <input type="text" className="header-main__search-box-input" placeholder="Bạn cần tìm kiếm gì?" />
                            <div className="header-main__search-box-btn">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </div>
                        </div>
                        <div className="header-main__cart" onClick={() => navigate(`/${path.CART}`)} style={{ cursor: 'pointer' }}>
                            <i className="fa-solid fa-cart-shopping"></i>
                            <span className="header-main__cart-quantity">
                                {
                                    userCurrent && userCurrent?.current && userCurrent.current?.cart && userCurrent.current?.cart.length
                                }
                            </span>
                        </div>
                    </div>
                    <div className="header-main__menu">
                        <ul className="header-main__menu-list">
                            <li className="header-main__menu-item">Giới thiệu</li>
                            <li className="header-main__menu-item">Bộ sưu tập mới</li>
                            <li className="header-main__menu-item">Sản phẩm</li>
                            <li className="header-main__menu-item">Khuyến mãi</li>
                            <li className="header-main__menu-item">Tin tức</li>
                        </ul>
                    </div>
                </div>
                <div className="header-main__user">
                    <div className="header-main__user-box">
                        <i class="fa-regular fa-circle-user header-main__user-box--icon"></i>
                        <span>
                            {
                                userCurrent && userCurrent?.current && `${userCurrent.current.firstname} ${userCurrent.current.lastname}`
                            }
                        </span>
                    </div>

                    <ul className="header-main__user-submenu">
                        <li className="header-main__user-submenu-item" onClick={() => navigate(`/${path.LOGIN}`)} style={{ cursor: 'pointer' }}>Đăng nhập</li>
                        <li className="header-main__user-submenu-item" onClick={() => navigate(`/${path.REGISTER}`)} style={{ cursor: 'pointer' }}>Đăng Ký</li>
                        <li className="header-main__user-submenu-item" onClick={() => navigate(`/${path.PRIVATE}`)} style={{ cursor: 'pointer' }}>Trang ADMIN</li>
                        <li className="header-main__user-submenu-item" style={{ color: '#fa4a27' }} onClick={() => handleUserLogout()}>Đăng xuất</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;
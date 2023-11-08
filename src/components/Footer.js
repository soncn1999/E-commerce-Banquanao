import React from 'react';
import PropTypes from 'prop-types';
import './Content-style/style.css';

Footer.propTypes = {

};

function Footer(props) {
    return (
        <div className="footer">
            <div className="footer-above">
                <div className="footer-above__left">
                    <div className="footer-above__title">Đăng ký để nhận tin: </div>
                    <div className="footer-above__mailbox">
                        <input type="email" placeholder="Nhập email của bạn..." className="footer-above__mailbox-input" />
                        <div className="footer-above__mailbox-input__btn">
                            <i class="fa-solid fa-paper-plane"></i>
                            &nbsp;
                            Gửi mail
                        </div>
                    </div>
                </div>
                <div className="footer-above__right">
                    <div className="footer-above__title">Theo dõi chúng tôi trên: </div>
                    &nbsp;
                    <div className="footer-above__social-network">
                        <div className="footer-above__social-network__item"><i class="fa-brands fa-facebook"></i></div>
                        <div className="footer-above__social-network__item"><i class="fa-brands fa-square-instagram"></i></div>
                        <div className="footer-above__social-network__item"><i class="fa-brands fa-tiktok"></i></div>
                    </div>
                </div>
            </div>
            <div className="footer-content">
                <div className="footer-content__info">
                    <div className="footer-content__info-title">Cửa hàng 150</div>
                    <div className="footer-content__info-list">
                        <li className="footer-content__info-item">
                            <span className="footer-content__info-item__title">Địa chỉ:</span>
                            &nbsp;

                        </li>
                        <li className="footer-content__info-item">
                            <span className="footer-content__info-item__title">Điện thoại:</span>
                            &nbsp;

                        </li>
                        <li className="footer-content__info-item">
                            <span className="footer-content__info-item__title">Email:</span>
                            &nbsp;

                        </li>
                        <li className="footer-content__info-item">
                            <span className="footer-content__info-item__title">Website:</span>
                            &nbsp;

                        </li>
                    </div>
                </div>
                <div className="footer-content__policy">
                    <div className="footer-content__info-title">Chính sách hỗ trợ</div>
                    <ul className="footer-content__info-list">
                        <li className="footer-content__info-item">Hỗ trợ đặt hàng</li>
                        <li className="footer-content__info-item">Chính sách trả hàng</li>
                        <li className="footer-content__info-item">Chính sách bảo hành</li>
                    </ul>
                </div>
                <div className="footer-content__logo"></div>
            </div>
        </div>
    );
}

export default Footer;
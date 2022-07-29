import React from 'react';
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
        <div className='container-fluid mt-5 footer pt-5'>
            <div>
                <div className='row px-5'>
                    <div className="col-lg-4 col-md-6">
                        <h3>About Us</h3>
                        <p className='fotter-recent-post'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam dolorem deserunt magnam consequuntur hic ipsam fuga pariatur repellat esse mollitia, nesciunt fugit aut necessitatibus quibusdam quidem dolores totam odit exercitationem ratione, iusto omnis deleniti. Consectetur, accusamus delectus. Autem eligendi iusto doloremque, obcaecati non praesentium suscipit nisi voluptate quisquam quidem assumenda.</p>
                        <i className="fa-brands fa-facebook footer-icon fs-1 mx-2"></i>
                        <i className="fa-brands fa-twitter footer-icon fs-1 mx-2"></i>
                        <i className="fa-brands fa-google footer-icon fs-1 mx-2"></i>
                        <i className="fa-solid fa-envelope footer-icon fs-1 mx-2"></i>
                    </div>
                    <div className="col-lg-2 col-md-6 ">
                        <h3 className='m-1 '>Service</h3>
                        <p className='m-1 fotter-services'>Emergency</p>
                        <p className='m-1 fotter-services'>Psychotherapy</p>
                        <p className='m-1 fotter-services'>Hourly</p>
                        <p className='m-1 fotter-services'>Hourly</p>
                        <p className='m-1 fotter-services'>Respite Home</p>
                        <p className='m-1 fotter-services'>Advanced Care</p>
                        <p className='m-1 fotter-services'>Lavoratory</p>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h3>Recent Posts</h3>
                        <p className='fotter-recent-post'>The Recorded Voice Scratched In The Speaker</p>
                        <p className='fotter-recent-post'>The Sky Was Cloudless Of A Deep Dark Blue</p>
                        <p className='fotter-recent-post'>A Shining Crescent Far The Flying Vessel.</p>
                        <p className='fotter-recent-post'>Succesful Campaigns Usually Require A Campaign Manager To</p>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="row gx-4 gy-3">
                            <div className="col-lg-4 col-md-6">
                                <img src="https://tf.quomodosoft.com/mediguss/wp-content/uploads/2020/04/inta9.png" alt="" />
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <img src="https://tf.quomodosoft.com/mediguss/wp-content/uploads/2020/04/inta8.png" alt="" />
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <img src="https://tf.quomodosoft.com/mediguss/wp-content/uploads/2020/04/inta7.png" alt="" />
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <img src="https://tf.quomodosoft.com/mediguss/wp-content/uploads/2020/04/inta6.png" alt="" />
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <img src="https://tf.quomodosoft.com/mediguss/wp-content/uploads/2020/04/inta5.png" alt="" />
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <img src="https://tf.quomodosoft.com/mediguss/wp-content/uploads/2020/04/inta4.png" alt="" />
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <img src="https://tf.quomodosoft.com/mediguss/wp-content/uploads/2020/04/inta3.png" alt="" />
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <img src="https://tf.quomodosoft.com/mediguss/wp-content/uploads/2020/04/inta2.png" alt="" />
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <img src="https://tf.quomodosoft.com/mediguss/wp-content/uploads/2020/04/inta1.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-bottom py-3'>
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <Link to='/'><img src="https://tf.quomodosoft.com/mediguss/wp-content/themes/mediguss/assets/images/logo/footer__logo.png" alt="" /></Link>
                    </div>
                    <div className="col-lg-6 col-12 mt-3">
                        <p><b className='text-white '>copyright by &copy; MediGussTheme - 2020</b></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
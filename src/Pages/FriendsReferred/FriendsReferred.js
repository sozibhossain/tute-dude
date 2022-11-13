import React from 'react';
import { NavLink } from 'react-router-dom';
import './FriendsReferred.css';

const FriendsReferred = () => {
    return (
        <div className='friends-referred-area'>
            <div className='go-back-mobile'>
                <NavLink className='go-back-mobile-menu' to="/ReferEarn"> &lt; go back</NavLink>
            </div>
            <div className='friends-referred-balance'>
                <div className='friends-code'>
                    <h6>Your Referral Code <br/><br/><span>EDCH54</span></h6>
                    
                </div>
                <div className='friends-balance'>
                    <h6>Wallet Balance <br/><span>₹ 500</span></h6>
                    
                </div>
            </div>
            <div>
                <h5 className='friends-text'>Friends who enrolled<span>(3)</span></h5>
                
                <div className='friends-enrolled'>
                    <div className='friends-col'>
                        <div className='friends-name-date'>
                            <h6>Dhiraj Saxsena</h6>
                            <h6>14 Sep, 2022</h6>
                        </div>
                        <h6 className='friends-enrolled-text'>Courses Enrolled(6)</h6>
                        <div className='friends-skills'>
                            <button>UI/UX</button>
                            <button>Photoshop</button>
                            <button>Illustrator</button>
                            <button>Python</button>
                            <button>MERN</button>
                            <button>Java</button>

                            <h5>Referral Amount <span>₹185</span></h5>
                        </div>
                    </div>

                    <div  className='friends-col'>
                        <div className='friends-name-date'>
                            <h6>Subhash Mishra</h6>
                            <h6>15 Sep, 2022</h6>
                        </div>
                        <h6 className='friends-enrolled-text'>Courses Enrolled(6)</h6>
                        <div className='friends-skills'>
                            <button>UI/UX</button>
                            <button>Photoshop</button>
                            <button>Illustrator</button>
                            <button>Python</button>
                            <button>MERN</button>
                            <button>C++</button>

                            <h5>Referral Amount <span>₹485</span></h5>
                        </div>
                    </div>
                    <div  className='friends-col'>
                        <div className='friends-name-date'>
                            <h6>Prafull Kumar</h6>
                            <h6>18 Sep, 2022</h6>
                        </div>
                        <h6 className='friends-enrolled-text'>Courses Enrolled(6)</h6>
                        <div className='friends-skills'>
                            <button>UI/UX</button>
                            <button>Photoshop</button>
                            <button>Illustrator</button>
                            <button>Python</button>
                            <button>MERN</button>
                            <button>Java</button>

                            <h5>Referral Amount <span>₹485</span></h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Terms-Conditions'>
                <NavLink className='friends-enrolled-footer-menu'>Terms & Conditions</NavLink>
            </div>
        </div>
    );
};

export default FriendsReferred;
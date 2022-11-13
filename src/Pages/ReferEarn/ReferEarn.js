import React from 'react';
import workIcon1 from '../Images/work icon/Vector1.png';
import workIcon2 from '../Images/work icon/Vector2.png';
import workIcon3 from '../Images/work icon/Vector.png';
import workIcon4 from '../Images/work icon/Vector3.png';
import workIcon5 from '../Images/work icon/Vector4.png';
import './ReferEarn.css';
import { NavLink } from 'react-router-dom';

const ReferEarn = () => {
    return (
        <div>
            <div className='earning-referrals-balance-code-area'>
                <div className='earning-referrals-balance-area'>
                    <div className='earning-referrals'>
                        <div  className='earning-referrals-balance'>
                            <h6>Referral Earning <br/><span>₹ 2,500</span></h6>
                        </div>
                        <div  className='earning-referrals-balance'>
                            <h6>Total Referrals <br/><span>7</span></h6>
                        </div>
                        <div  className='earning-referrals-balance'>
                            <h6>Wallet Balance <br/><span>₹ 500</span></h6>
                        </div>
                        <div  className='earning-referrals-balance'>
                            <button className='Withdraw-Balance-btn'>Withdraw Balance</button>
                        </div>
                        
                        
                        
                    </div>
                    
                </div>
                <div className='referral-code'>
                    <h5>Your Referral Code <br/><br/> <span> EDCH54</span></h5>
                </div>
                
            </div>

            <div>
                <h3>How does it work ?</h3>
                <div className='work-area'>
                    <div className='work-col'>
                        <div className='word-icon'>
                            <img src={workIcon1} alt=''/>
                        </div>
                        <div  className='work-col-text'>
                            <h5>Invite your Friends <br/> <span>Share the link tutedude.com with your friends</span></h5>
                            
                        </div>
                    </div>
                    <div className='work-col'>
                        <div className='word-icon'>
                            <img src={workIcon2} alt=''/>
                        </div>
                        <div  className='work-col-text'>
                            <h5>Friend purchases any course <br/> <span>Using your REFERRAL CODE in the payments page</span></h5>
                            
                        </div>
                    </div>
                    <div className='work-col'>
                        <div className='word-icon'>
                            <img src={workIcon3} alt=''/>
                        </div>
                        <div  className='work-col-text'>
                            <h5>You get ₹ 200 as referral money <br/> <span>On total purchase the friend makes, into your wallet</span></h5>
                            
                        </div>
                    </div>
                    <div className='work-col'>
                        <div className='word-icon'>
                            <img src={workIcon4} alt=''/>
                        </div>
                        <div  className='work-col-text'>
                            <h5>Your Friend gets ₹ 200 Off <br/> <span>On his overall fee on successful purchase using your referral code </span></h5>
                            
                        </div>
                    </div>
                    <div className='work-col'>
                        <div className='word-icon'>
                            <img src={workIcon5} alt=''/>
                        </div>
                        <div  className='work-col-text'>
                            <h5>Transfer money from wallet <br/><span>When the wallet balance reaches ₹200 or more, you can withdraw it</span></h5>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-menu-area'>
                <NavLink className='footer-menu'>Friends Who Enrolled</NavLink><br/>
                <NavLink className='footer-menu'>Terms & Conditions</NavLink>
            </div>
        </div>
    );
};

export default ReferEarn;
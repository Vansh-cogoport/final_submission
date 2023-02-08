import React from 'react';
import ReactDOM from 'react-dom';
import footer from '../footer.css'

const Footer = () => {
  return (
    <div>
        <div className='major-container_contained_vansh'>
          <div className = 'main-container_contained_vansh'>
                <div className='mid-block_contained_vansh'>
                    <div className='free-trial_contained_vansh'>
                        <h2 className='free-trial-heading_contained_vansh'>Start your 30 day free trial</h2>
                        <br />
                        <br />
                        <p className='free-trial-para_contained_vansh'>Write upto 10000 articles per year</p>
                    </div>
                    <div className='button-containers_contained_vansh'>
                        <button className='Learn-More_contained_vansh'>Learn More</button>
                        <button className='Get-Started_contained_vansh'>Get Started</button>
                    </div>
                </div>
            </div>

            <div className='footer-container_contained_vansh'>
                <div className='footer-top_contained_vansh'>
                    <div className='Untitled-UI-container_contained_vansh'>
                        <h3 className='Untitled-UI_contained_vansh'>Untitled UI</h3>
                        <br />
                        <div className='footer-span-container_contained_vansh'>
                            <span className='footer-span_contained_vansh'>Overview</span>
                            <span className='footer-span_contained_vansh'>Features</span>
                            <span className='footer-span_contained_vansh'>Pricing</span>
                            <span className='footer-span_contained_vansh'>Careers</span>
                            <span className='footer-span_contained_vansh'>Help</span>
                        </div>
                    </div>
                    <div className='footer-top-right_contained_vansh'>
                        <h5 className='stay-upto-date_contained_vansh'>Stay up to date</h5>
                        <br/>
                        <div className='stay-upto-date-container_contained_vansh'>
                            <input type='text' className='enter-your-email_contained_vansh' placeholder='Enter your email'/>
                            <button className='subscribe_contained_vansh'>Subscribe</button>
                        </div>
                    </div>
                </div>
                
                <div className='footer-bottom_contained_vansh'>
                    <hr className='horizontal-rule_contained_vansh'/>
                    <div className='copyright_contained_vansh'>
                        <p>© 2077 Untitled UI. All rights reserved.</p>
                    </div>
                </div>
                
            </div>
          </div>
    </div>
  )
}

export default Footer
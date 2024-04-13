import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';

export default function NewComponent() {
    return (
        <>
            <div className='container   pt-3 mt-4 '>
                <h1 className='text-center  mb-5' style={{ color: "#5C27C0" }}><span style={{ fontWeight: "bold" }}>Our Amazing Benefits</span> Helpful For Your Hiring</h1>

                <div className='row pt-4' style={{ textAlign: "-webkit-left" }}>
                    <div className='col-lg-4 col-md-8 col-sm-12 mb-5'>
                        <img className="icons6" alt="" src="/eosiconsai.svg" />

                        <h4 style={{ fontWeight: "bold", color: "#5C27C0" }}>60%</h4>
                        <h4 className='mb-4' style={{ color: "#5C27C0" }}> Cost Reduce</h4>

                        <p>Zero overhead in the hiring process - promise! Source top quality candidates for some of the best companies</p>
                    </div>

                    <div className='col-lg-4 col-md-8 col-sm-12 mb-5'>
                        <img className="icons6" alt="" src="/eosiconsai1.svg" />

                        <h4 style={{ fontWeight: "bold", color: "#5C27C0" }}>50% Faster</h4>
                        <h4 className='mb-4' style={{ color: "#5C27C0" }}> Recruitment by TAT</h4>

                        <p>Zero overhead in the hiring process - promise! Source top quality candidates for some of the best companies</p>
                    </div>


                    <div className='col-lg-4 col-md-8 col-sm-12  mb-5'>
                        <FontAwesomeIcon icon={faAddressCard} size="2x" style={{ color: 'white', border: '5px solid #5C27C0', backgroundColor: '#AD93DF' }} className='mb-4 rounded-3' />
                        <h4 style={{ fontWeight: "bold", color: "#5C27C0" }}>Highly Contextualized</h4>
                        <h4 className='mb-4' style={{ color: "#5C27C0" }}> Interview</h4>

                        <p >Al models generate highly contextualized interviews for the candidates based on your Company profile, Job description and Candidate's CV.</p>
                    </div>

                    <div className='col-lg-4 col-md-8 col-sm-12 mb-5'>
                        <FontAwesomeIcon icon={faAddressCard} size="2x" style={{ color: 'white', border: '5px solid #5C27C0', backgroundColor: '#AD93DF' }} className='mb-4 rounded-3' />

                        <h4 style={{ fontWeight: "bold", color: "#5C27C0" }}>Automated</h4>
                        <h4 className='mb-4' style={{ color: "#5C27C0" }}> Scheduling</h4>

                        <p>Email & WhatsApp based communication for interview scheduling with automated reminders.</p>
                    </div>


                    <div className='col-lg-4 col-md-8 col-sm-12 mb-5'>
                        <img className="icons6" alt="" src="/eosiconsai2.svg" />

                        <h4 style={{ fontWeight: "bold", color: "#5C27C0" }}>AI generated Interviews</h4>
                        <h4 className='mb-4' style={{ color: "#5C27C0" }}> On what matters</h4>

                        <p>0 manual interventions, completely seamless experience for the candidates.</p>
                    </div>

                    <div className='col-lg-4 col-md-8 col-sm-12 mb-5'>
                        <img className="icons6" alt="" src="/fluenttasksapp20regular.svg" />

                        <h4 style={{ fontWeight: "bold", color: "#5C27C0" }}>in-built</h4>
                        <h4 className='mb-4' style={{ color: "#5C27C0" }}>ATS</h4>

                        <p>To manage all of your candidates & Credo verified CVs. Integrations with other ATS coming soon.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

import React from 'react';

const Education = () => {
    return (
        <div className="education__info">
            <h2 className="education__main-title section__subtitle">Education</h2>
            <div className="education__content grid">
                <div className="education__box">
                    <i className='bx bx-book-open education__icon'></i>

                    <h3 className="education__title">B.Tech- Data Science and Artificial Intelligence</h3>
                    <span className="education__subtitle">Indian Institute of Information Technology, Dharwad</span>
                    <br />
                    <span className="education__duration"> 2021 – 2025</span>
                </div>

                <div className="education__box">
                    <i className='bx bx-book-open education__icon'></i>

                    <h3 className="education__title">Senior Secondary Certificate <br /> (12th)</h3>
                    <span className="education__subtitle">Rajarshi Shahu Junior Science College Latur, Maharashtra</span>
                    <br />
                    <span className="education__duration"> 2019 – 2021</span>
                </div>

                <div className="education__box">
                    <i className='bx bx-book-open education__icon'></i>

                    <h3 className="education__title">Secondary School Examination <br /> (10th)</h3>
                    <span className="education__subtitle">Shyamlal Memorial High School Udgir, Maharashtra</span>
                    <br />
                    <span className="education__duration"> 2013 – 2019</span>
                </div>
            </div>
        </div>
    );
}

export default Education;

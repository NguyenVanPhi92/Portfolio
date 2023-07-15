import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import myImg from '../../assets/avatar.svg'
import Tilt from 'react-parallax-tilt'
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'

function Home2() {
    return (
        <Container fluid className='home-about-section' id='about'>
            <Container>
                <Row>
                    <Col md={8} className='home-about-description'>
                        <h1 style={{ fontSize: '2.6em' }}>
                            LET ME <span className='purple'> INTRODUCE </span> MYSELF
                        </h1>

                        <p className='home-about-body'>
                            I am passionate about programming, especially developing web
                            applications.I have 2 years of experience developing websites with
                            HTML/CSS, JavaScript and ReactJS Framework
                            <br />
                            <br />I have knowledge of
                            <i>
                                <b className='purple'> Javascript Typescript and Nodejs. </b>
                            </i>
                            <br />
                            <br />I have participated in building some e-commerce websites and have
                            experience working in an Agile/Scrum environment. I have good
                            communication and teamwork skills.
                            <i>
                                <b className='purple'>
                                    My strengths are the ability to learn quickly{' '}
                                </b>{' '}
                                ,work independently as well as collaboratively{' '}
                                <b className='purple'>in a group.</b>
                            </i>
                            <br />
                            <br />
                            Whenever possible, I also apply my passion for developing products with{' '}
                            <b className='purple'>Node.js</b> and
                            <i>
                                <b className='purple'> Modern Javascript Library and Frameworks</b>
                            </i>
                            &nbsp; like
                            <i>
                                <b className='purple'> React.js and Next.js</b>
                            </i>
                        </p>
                    </Col>
                    <Col md={4} className='myAvtar'>
                        <Tilt>
                            <img src={myImg} className='img-fluid' alt='avatar' />
                        </Tilt>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className='home-about-social'>
                        <h1>FIND ME ON</h1>
                        <p>
                            Feel free to <span className='purple'>connect </span>with me
                        </p>
                        <ul className='home-about-social-links'>
                            <li className='social-icons'>
                                <a
                                    href='https://github.com/NguyenVanPhi92'
                                    target='_blank'
                                    rel='noreferrer'
                                    className='icon-colour  home-social-icons'
                                >
                                    <AiFillGithub />
                                </a>
                            </li>
                            <li className='social-icons'>
                                <a
                                    href='https://twitter.com/PhiV_N'
                                    target='_blank'
                                    rel='noreferrer'
                                    className='icon-colour  home-social-icons'
                                >
                                    <AiOutlineTwitter />
                                </a>
                            </li>
                            <li className='social-icons'>
                                <a
                                    href='https://www.linkedin.com/in/nguy%E1%BB%85n-v%E1%BA%A1n-phi-473730219/'
                                    target='_blank'
                                    rel='noreferrer'
                                    className='icon-colour  home-social-icons'
                                >
                                    <FaLinkedinIn />
                                </a>
                            </li>
                            <li className='social-icons'>
                                <a
                                    href='https://www.instagram.com/soumyajit4419'
                                    target='_blank'
                                    rel='noreferrer'
                                    className='icon-colour home-social-icons'
                                >
                                    <AiFillInstagram />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}
export default Home2

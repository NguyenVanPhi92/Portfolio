import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { CHROME, GIT, GITHUB, TRELLO, VSCODE, WINDOW } from 'assets/tech'

function Toolstack() {
    return (
        <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
            <Col xs={4} md={2} className='tech-icons'>
                <img src={WINDOW} alt='' width={80} height={80} />
            </Col>
            <Col xs={4} md={2} className='tech-icons'>
                <img src={VSCODE} alt='' width={80} height={60} />
            </Col>
            <Col xs={4} md={2} className='tech-icons'>
                <img src={TRELLO} alt='' width={90} height={90} />
            </Col>
            <Col xs={4} md={2} className='tech-icons'>
                <img src={CHROME} alt='' width={70} height={70} />
            </Col>
            <Col xs={4} md={2} className='tech-icons'>
                <img src={GITHUB} alt='' width={90} height={90} />
            </Col>
            <Col xs={4} md={2} className='tech-icons'>
                <img src={GIT} alt='' width={90} height={90} />
            </Col>
        </Row>
    )
}

export default Toolstack

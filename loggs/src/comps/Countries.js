import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Belgio from './Countries/Belgio';
import Danimarca from './Countries/Danimarca';
import Estonia from './Countries/Estonia';

import Germania from './Countries/Germania';
import Finlandia from './Countries/Finlandia';
import Irlanda from './Countries/Irlanda';

import Islanda from './Countries/Islanda';
import Lettonia from './Countries/Lettonia';
import Lituania from './Countries/Lituania';

import Norvegia from './Countries/Norvegia';
import PaesiBassi from './Countries/PaesiBassi';
import Polonia from './Countries/Polonia';

import RegnoUnito from './Countries/RegnoUnito';
import Russia from './Countries/Russia';
import Svezia from './Countries/Svezia';

import Moldavia from './Countries/Moldavia';
import Francia from './Countries/Francia';
import Svizzera from './Countries/Svizzera';

import Austria from './Countries/Austria';
import Ungheria from './Countries/Ungheria';
import Romania from './Countries/Romania';

import Portogallo from './Countries/Portogallo';
import Spagna from './Countries/Spagna';
import Italia from './Countries/Italia';

import Slovenia from './Countries/Slovenia';
import Croazia from './Countries/Croazia';
import Albania from './Countries/Albania';

import Grecia from './Countries/Grecia';
import Cipro from './Countries/Cipro';
import Malta from './Countries/Malta';

const Countries = () => {
    return (
        <div>
            <Container>
            <Row>
                <Col xs><Belgio /></Col>
                <Col xs><Danimarca /></Col>
                <Col xs><Estonia /></Col>
            </Row>
            <Row>
                <Col xs><Finlandia /></Col>
                <Col xs><Germania /></Col>
                <Col xs><Irlanda /></Col>
            </Row>
            <Row> 
                <Col xs><Islanda /></Col>
                <Col xs><Lettonia /></Col>
                <Col xs><Lituania /></Col>
            </Row>
            <Row>
                <Col xs><Norvegia /></Col>
                <Col xs><PaesiBassi /></Col>
                <Col xs><Polonia /></Col>
            </Row>
            <Row>
                <Col xs><RegnoUnito /></Col>
                <Col xs><Russia /></Col>
                <Col xs><Svezia /></Col>
            </Row>
            <Row>
                <Col xs><Moldavia /></Col>
                <Col xs><Francia /></Col>
                <Col xs><Svizzera /></Col>
            </Row>
            <Row>
                <Col xs><Austria /></Col>
                <Col xs><Ungheria /></Col>
                <Col xs><Romania /></Col>
            </Row> 
            <Row>
                <Col xs><Portogallo /></Col>
                <Col xs><Spagna /></Col>
                <Col xs><Italia /></Col>
            </Row>
            <Row>
                <Col xs><Slovenia /></Col>
                <Col xs><Croazia /></Col>
                <Col xs><Albania /></Col>
            </Row>
            <Row>
                <Col xs><Grecia /></Col>
                <Col xs><Cipro /></Col>
                <Col xs><Malta /></Col>
            </Row>
            </Container>
        </div>
    )
}

export default Countries

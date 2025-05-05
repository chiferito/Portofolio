import React from 'react';
import styled from 'styled-components';
import { Row } from '../Styles/StyledComponents';

const FooterContainer = styled(Row)`
    align-items: center;
    justify-content: center; 
    color: silver;
    height: 50px;
    padding: 0 16px;
    font-size: 12px;
    gap: 4px;
    border-top: 1px solid rgba(255, 255, 255, 0.18);
    a {
        color: teal;
    }
    font-size: 1rem;
`;

const MyLink = styled.a`
    color: white !important;
`

const Icon = styled.img`
height: 16px;
`

const Footer: React.FC = () => {
    return (
        <FooterContainer id="footer">
            <p>Contact me at ericwongliu@gmail.com</p>
        </FooterContainer>
    );
};

export default Footer;
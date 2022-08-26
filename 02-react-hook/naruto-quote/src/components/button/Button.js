import styled from 'styled-components';
import { string } from 'prop-types'

export const Button = styled.button`
    background: #DC872C;
    color: #fff;
    border: none;
    border-radius: 0;
    font-size: 1.5em;
    padding: 10px 20px;
    font-family: 'New Tegomin', serif;
    cursor: pointer;
    box-shadow: #333 3px 3px;    
    transition: all 0.5s ease-in-out;

    &:hover {
        background: #a40000;
    }
`;

Button.propTypes = {
    children: string
}
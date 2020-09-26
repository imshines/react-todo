import styled from 'styled-components';

export const Button = styled.button`
    font-size: 1rem;
    padding: 0rem 1rem;
    background-color: ${props => props.colorProp};
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    // box-shadow: 0px 2px 5px #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        background-color: ${props => props.hover}
    }
`
export const IconButton = styled.a`
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.colorProp};
    border: none;
    border-radius: 50%;
    color: white;
    cursor: pointer;
`

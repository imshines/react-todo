import styled from 'styled-components';

export const Button = styled.button`
    font-size: 1rem;
    padding: 0.5rem 1rem;
    background-color: ${props => props.colorProp ? props.colorProp : 'transparent'};
    border: ${props => (props.border === false) ? 'none' : '1px solid #ccc'};
    border-radius: 5px;
    color: white;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        background-color: ${props => props.hover}
    }
`
export const IconButton = styled.a`
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.colorProp};
    border: none;
    border-radius: 50%;
    color: white;
    cursor: pointer;
`

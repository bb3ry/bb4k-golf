import styled from 'styled-components'
import { Link } from 'gatsby'

export const Button = styled(Link)`
background: ${({ primary }) => (primary ? '#6660A9' : '#ad3181')};
white-space: nowrap;
padding: ${({ big }) => (big ? '16px 40px' : '10px 32px')};
color: #FFF;
font-weight: 700;
font-size: ${({ big }) => (big ? '20px' : '16px')};
outline: none;
border: none;
min-width: 100px;
cursor: pointer;
text-decoration:none;
transition: 0.3s !important;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
border-radius: ${({ round }) => (round ? '50px' : 'none')};

&:hover {
    background: ${({ primary }) => (primary ? '#ad3181' : '#6660A9')};  
    transform: translateY(-2px);
}
`
import React from 'react'
import styled from 'styled-components/native'

const StyledNavbar = styled.View`
    // position: fixed;
    width: 100%;
    height: 60px;
    padding: 10px 25px;
    background-color: #1976d2;
    box-shadow:  0px 2px 4px rgb(0 0 0 / 20%);
`

const StyledHeader = styled.Text `
    font-size: 20px;
    font-weight: 600;
    color: #fff;
    line-height: 35px;
`

export const Navbar = () => {
    return (
        <StyledNavbar>
            <StyledHeader>
                AppLab project
            </StyledHeader>
        </StyledNavbar>
    )
}

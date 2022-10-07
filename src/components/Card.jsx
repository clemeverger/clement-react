import React from 'react'
import styled from 'styled-components'

const Card = ({ name }) => {
    return (
        <Container>
            {name}
        </Container>
    )
}

export default Card

const Container = styled.div`
    background-color: blue;

    margin: 1rem;
    padding: 1rem;
`
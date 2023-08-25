import React from 'react'
import styled from "styled-components"

const Section = styled.div`
    display: flex;
    justify-content: center;
`

const Container = styled.div`
    width: 1400px;
    display: flex;
    
    justify-content: space-around;
    align-items: center;
    padding: 10px 0px;
`

const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`
const Logo = styled.img`
    height:100px`

const List = styled.ul`
    display: flex;
    gap: 20px
`

const ListItem = styled.li`
    list-style: none;
        cursor: pointer;`

const Icons = styled.div`
    justify-content: flex-end;
    display: flex;
    align-items: center;
    gap: 20px;`

const Icon = styled.img`
    max-width:3%;
    cursor: pointer;
`

const Button = styled.button`
    width: 100px;
    padding: 10px;
    background: #da4ea2;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`

const Navbar = () => {
  return (
    <Section>
        <Container>
            <Links>
                <Logo src="./img/logo5.png"/>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Studio</ListItem>
                    <ListItem>Work</ListItem>
                    <ListItem>Contact</ListItem>
                </List>
            </Links>
            <Icons>
                <Icon src="./img/search.png"/>
                <Button>Hire Now</Button>
            </Icons>
        </Container>
    </Section>
  )
}

export default Navbar
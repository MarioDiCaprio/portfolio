import React from "react";
import {Container, Grid} from "@mui/material";
import {Content, Info, StyledInput, StyledTextArea, SubmitButton, Title} from "./Contact.styles";


const Contact: React.FC = () => {
    return (
        <Container maxWidth="lg" style={{ marginBottom: '100px' }}>
            <Content>
                <Title>
                    Write A Message
                </Title>
                <Info>
                    Note: As of the current moment, I am not taking any mail. Therefore,
                    this option is disabled.
                </Info>
                <Grid container spacing={1}>
                    <Grid item sm={6} xs={12}>
                        <StyledInput placeholder="First Name"/>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <StyledInput placeholder="Last Name"/>
                    </Grid>
                    <Grid item xs={12}>
                        <StyledInput placeholder="Email"/>
                    </Grid>
                    <Grid item xs={12}>
                        <StyledTextArea placeholder="Message"/>
                    </Grid>
                    <Grid item xs={12}>
                        <SubmitButton>
                            Submit
                        </SubmitButton>
                    </Grid>
                </Grid>
            </Content>
        </Container>
    );
}

export default Contact;
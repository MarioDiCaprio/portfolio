import React from "react";
import Languages from "../../components/Languages/Languages";
import {Container} from "@mui/material";


const About: React.FC = () => {
    return (
        <Container maxWidth="lg">
            <Languages />
        </Container>
    );
}

export default About;
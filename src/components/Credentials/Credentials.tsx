import React from "react";
import {Context} from "./Credentials.styles";
import {useRouter} from "next/router";


const Credentials: React.FC = () => {
    const router = useRouter();

    return (
        <Context>
            Built by <span onClick={router.reload}>Mario Di Caprio</span>
        </Context>
    );
}

export default Credentials;
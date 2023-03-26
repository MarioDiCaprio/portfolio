import React from "react";
import {Context} from "./Credentials.styles";
import {useRouter} from "next/router";
import {UnderlinedLink} from "../../styles/presets.styles";


/**
 * This component highlights the author's credentials. It goes at the end
 * of the page.
 */
export const Credentials: React.FC = () => {
    const router = useRouter();

    return (
        <Context>
            Built by <UnderlinedLink onClick={router.reload}>Mario Di Caprio</UnderlinedLink>
        </Context>
    );
}

export default Credentials;
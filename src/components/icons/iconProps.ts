import {AriaAttributes, DOMAttributes} from "react";

export interface IconProps extends AriaAttributes, DOMAttributes<SVGElement> {
    size?: number | string;
    strokeWidth?: number | string;
}

export const defaultIconProps: IconProps = {
    size: "1em",
    strokeWidth: "2"
}

export function iconPropsOrDefault(props: IconProps): IconProps {
    return Object.assign({}, defaultIconProps, props);
}

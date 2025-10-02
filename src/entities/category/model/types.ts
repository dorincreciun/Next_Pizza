import {ButtonHTMLAttributes, RefObject} from "react";

export type CategoryType = {
    id: string;
    slug: string;
    name: string;
}

export type CategoryProps = Exclude<ButtonHTMLAttributes<HTMLButtonElement>, "type" | "children"> & {
    name: string;
    active: boolean;
    ref?: RefObject<HTMLButtonElement>;
};

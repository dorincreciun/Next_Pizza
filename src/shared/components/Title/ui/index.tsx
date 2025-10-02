import {cn} from "@/shared/utils/cn";
import {TitleProps} from "../model/types";
import {variantsTitle} from "../styles/variants";
import {createElement} from "react";

export const Title = ({ as, children, size, className }: TitleProps) => {
	const buildTitleStyle = cn(variantsTitle({ size }), className);

	return createElement(as, { children, className: buildTitleStyle });
};

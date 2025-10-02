import {cn} from "@/shared/utils/cn";
import {FC} from "react";
import {ContainerProps} from "../model/types";

export const Container: FC<ContainerProps> = ({children, className}) => {
    return <div className={cn('mx-auto max-w-[1280px] px-3', className)}>{children}</div>
}

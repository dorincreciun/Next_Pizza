import {FC} from "react";
import {cn} from "@/shared/utils/cn";
import {CategoryProps} from "@/entities/category/model/types";

export const CategoryElement: FC<CategoryProps> = ({name, active, ref, className, ...rest}) => {
    return (
        <button
            ref={ref}
            type={"button"}
            className={cn(
                "cursor-pointer rounded-2xl px-6 py-2.5 text-base font-medium",
                "transition-all duration-300 ease-out",
                active
                    ? "text-primary bg-white shadow-[0_14px_20px_rgba(0,0,0,0.05)]"
                    : "hover:text-primary text-text-primary",
                className
            )}
            {...rest}
        >
            {name}
        </button>
    )
}

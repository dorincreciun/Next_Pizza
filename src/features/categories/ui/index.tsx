"use client"
import {cn} from "@/shared/utils/cn";
import {useRouter, useSearchParams} from "next/navigation";
import {CategoryElement, CategoryType, useFetchCategory} from "@/entities/category";

export const Categories = () => {
    // Todo: se repeta logica cu url la paginare si filter
    const router = useRouter();
    const searchParams = useSearchParams();
    const categories: CategoryType[] = useFetchCategory()

    const categoryId = searchParams.get("categories") ?? "";

    const changeCategory = (id: string) => {
        const newSearchParams = new URLSearchParams(searchParams);

        if (id === "") {
            newSearchParams.delete("categories");
        } else {
            newSearchParams.set("categories", id);
        }
        router.push(`?${newSearchParams.toString()}`)
    }

    return (
        <div className={cn(
            "bg-surface relative flex rounded-2xl px-2 py-1.5 select-none",
            "focus-within:ring-2 focus-within:ring-gray-400/10",
            "transition-all duration-200 ease-in-out"
        )}
        >
            {/* All categories */}
            <CategoryElement
                name={"Все"}
                active={"" === categoryId}
                onClick={() => changeCategory("")}
            />

            {/* Api categories */}
            {
                categories.map(({name, id}) => (
                    <CategoryElement
                        key={id}
                        name={name}
                        active={id === categoryId}
                        onClick={() => changeCategory(id)}
                    />
                ))
            }
        </div>
    )
}

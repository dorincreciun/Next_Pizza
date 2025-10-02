"use client"
import {cn} from "@/shared/utils/cn";
import {useRouter, useSearchParams} from "next/navigation";
import {CategoryElement, CategoryType, useFetchCategory} from "@/entities/category";

export const Categories = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const categories: CategoryType[] = useFetchCategory()

    const categorySlug = searchParams.get("categories") ?? "";

    const changeCategory = (slug: string) => {
        const newSearchParams = new URLSearchParams(searchParams);

        if (slug === "") {
            newSearchParams.delete("categories");
        } else {
            newSearchParams.set("categories", slug);
        }
        router.push(`?${newSearchParams.toString()}`)
    }

    return (
        <nav className={cn(
            "bg-surface relative flex rounded-2xl px-2 py-1.5 select-none",
            "focus-within:ring-2 focus-within:ring-gray-400/10",
            "transition-all duration-200 ease-in-out"
        )}
        >
            {
                categories.map(({name, slug, id}) => (
                    <CategoryElement
                        key={id}
                        name={name}
                        active={slug === categorySlug}
                        onClick={() => changeCategory(slug)}
                    />
                ))
            }
        </nav>
    )
}

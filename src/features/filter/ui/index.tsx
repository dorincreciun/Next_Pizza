"use client"
import {Title} from "@/shared/components/Title";
import {Checkbox} from "@/shared/components/Checkbox";
import {Button} from "@/shared/components/Button";
import {Radio} from "@/shared/components/Radio";
import {FC} from "react";
import {useFilter} from "@/features/filter";
import {useRouter, useSearchParams} from "next/navigation";
import {encodeList} from "@/features/filter/lib/encodeList";

export const Filter: FC = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    /* store -> state */
    const {flags, ingredients, dough} = useFilter((state) => state.filters)
    const {flagIds, ingredientsIds, doughId} = useFilter((state) => state.selected)
    /* store -> actions */
    const toggleFlag = useFilter((state) => state.toggleFlag)
    const toggleDough = useFilter((state) => state.toggleDough)
    const toggleIngredient = useFilter((state) => state.toggleIngredient)

    const buildUrlParams = () => {
        const newSearchParams = new URLSearchParams(searchParams)

        if(flagIds.length > 0) {
            newSearchParams.set("flag", encodeList(flagIds))
        }else {
            newSearchParams.delete("flag")
        }

        if(ingredientsIds.length > 0) {
            newSearchParams.set("ingredients", encodeList(ingredientsIds))
        }else {
            newSearchParams.delete("ingredients")
        }

        if(doughId) {
            newSearchParams.set("dough", doughId)
        }else{
            newSearchParams.delete("dough")
        }

        router.push(`?${newSearchParams}`)
    }

    return (
        <>
            {/* Title */}
            <Title as={"h2"} size={"sm"} className={"mb-7.5"}>
                Фильтрация
            </Title>

            {/* Flags */}
            {flags && (
                <div className="flex flex-col gap-3.5 my-6">
                    {flags.map((el) => (
                        <Checkbox
                            key={el.id}
                            label={el.name}
                            checked={flagIds.includes(el.id)}
                            onChange={() => toggleFlag(el.id)}
                        />
                    ))}
                </div>
            )}

            {/* Ingredients */}
            {ingredients && (
                <div className={"flex flex-col gap-3.5 my-6"}>
                    <Title as={"h3"} size={"xs"}>
                        Ингредиенты:
                    </Title>

                    {ingredients.map((el) => (
                        <Checkbox
                            key={el.id}
                            label={el.name}
                            checked={ingredientsIds.includes(el.id)}
                            onChange={() => toggleIngredient(el.id)}
                        />
                    ))}
                </div>
            )}

            {/* Dough types */}
            {dough && (
                <div className={ "border-border-subtle my-6 flex flex-col gap-3.5 border-t border-b py-6"}>
                    <Title as={"h3"} size={"xs"}>
                        Тип теста:
                    </Title>

                    {dough.map((el) => (
                        <Radio
                            name={"dough"}
                            key={el.id}
                            label={el.name}
                            checked={doughId === el.id}
                            onChange={() => toggleDough(el.id)}
                        />
                    ))}
                </div>
            )}

            <Button size={"large"} className={"w-full"} onClick={buildUrlParams}>
                Применить
            </Button>
        </>
    )
}
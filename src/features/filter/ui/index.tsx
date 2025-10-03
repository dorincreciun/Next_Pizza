import {Title} from "@/shared/components/Title";
import {Checkbox} from "@/shared/components/Checkbox";
import {Button} from "@/shared/components/Button";
import {Radio} from "@/shared/components/Radio";

export const Filter = () => {
    return (
        <>
            {/* Title */}
            <Title as={"h2"} size={"sm"} className={"mb-7.5"}>
                Фильтрация
            </Title>

            <div className={"flex flex-col gap-3.5 my-6"}>
                <Checkbox label={"Можно собирать"} />
                <Checkbox label={"Новинки"} />
            </div>

            {/* Ingredients */}
            <div className={"flex flex-col gap-3.5 my-6"}>
                <Title as={"h3"} size={"xs"}>
                    Ингредиенты:
                </Title>

                <Checkbox label={"Сырный соус"} />
                <Checkbox label={"Моцарелла"} />
                <Checkbox label={"Чеснок"} />
                <Checkbox label={"Солённые огурчики"} />
                <Checkbox label={"Красный лук"} />
                <Checkbox label={"Томаты"} />
            </div>

            {/* Dough types */}
            <div className={ "border-border-subtle my-6 flex flex-col gap-3.5 border-t border-b py-6"}>
                <Title as={"h3"} size={"xs"}>
                    Тип теста:
                </Title>

                <Radio name={"Традициональный"} label={"Традициональный"} />
                <Radio name={"Тонкий"} label={"Тонкий"} />
            </div>

            <Button size={"large"} className={"w-full"}>
                Применить
            </Button>

        </>
    )
}
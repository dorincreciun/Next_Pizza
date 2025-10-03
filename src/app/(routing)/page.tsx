"use client"
import {Categories} from "@/features/categories";
import {Container} from "@/shared/components/Container";
import {Title} from "@/shared/components/Title";
import {Filter, useFilter} from "@/features/filter";

const filters = {
    flags: [
        { id: "84566", name: "Можно собирать" },
        { id: "84567", name: "Новинки", },
    ],

    ingredients: [
        { id: "90001", name: "Сырный соус" },
        { id: "90002", name: "Моцарелла" },
        { id: "90003", name: "Чеснок" },
        { id: "90004", name: "Солённые огурчики" },
        { id: "90005", name: "Красный лук" },
        { id: "90006", name: "Томаты" },
    ],

    dough: [
        { id: "91001", name: "Традициональный" },
        { id: "91002", name: "Тонкий" },
    ],
};


export default function CatalogPage() {
    const fnSetFilters = useFilter((state) => state.setFilters);

    if (fnSetFilters) {
        fnSetFilters(filters);
    }

    return (
        <main>
            <section className={"mt-10"}>
                <Container>
                    <Title as={"h1"} size={"xl"}>Все пиццы</Title>
                </Container>
            </section>

            <section className={"mt-5 mb-9"}>
                <Container className={"flex items-center justify-between gap-10"}>
                    <Categories />
                </Container>
            </section>

            <div>
                <Container className={"flex gap-10"}>
                    <aside className={"w-[224px] shrink-0"}>
                        <Filter />
                    </aside>
                    <div>products</div>

                </Container>
            </div>
        </main>
    );
}

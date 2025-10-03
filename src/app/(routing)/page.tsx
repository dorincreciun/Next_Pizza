import {Categories} from "@/features/categories";
import {Container} from "@/shared/components/Container";
import {Title} from "@/shared/components/Title";
import {Filter} from "@/features/filter";

export default function CatalogPage() {
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

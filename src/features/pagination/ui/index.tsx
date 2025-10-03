"use client"
import type { FC } from "react";
import type { PaginationProps } from "../model/types";
import { getVisibleWindow } from "../lib/getVisibleWindow";
import { parsePageParam } from "../lib/parsePageParam";
import {Button} from "@/shared/components/Button";
import {ChevronLeft, ChevronRight} from "lucide-react";
import {useRouter, useSearchParams} from "next/navigation";

export const Pagination: FC<PaginationProps> = ({
	totalPages = 1,
	visiblePages = 4,
	pageParam = "page",
}) => {
	const router = useRouter();
	const searchParams = useSearchParams();
	if (totalPages <= 0) return null;

	const currentPage = parsePageParam(searchParams.get(pageParam), totalPages);
	const { pages } = getVisibleWindow(currentPage, totalPages, visiblePages);

	const goToPage = (page: number) => {
		const next = new URLSearchParams(searchParams);
		if (page <= 1) {
			next.delete(pageParam);
		} else {
			next.set(pageParam, String(page));
		}
		router.push(`?${next}`);
	};

	return (
		<div className="flex items-center gap-7.5">
			{/* Navigație */}
			<div className="flex items-center gap-2.5">
				{/* Back */}
				<Button
					isOnlyIcon
					aria-label="Pagina anterioară"
					color="secondary"
					kind="outlined"
					disabled={currentPage <= 1}
					onClick={() => goToPage(currentPage - 1)}
				>
					<ChevronLeft />
				</Button>

				{/* Pagini */}
				{pages.map((page) => (
					<Button
						key={page}
						isOnlyIcon
						aria-label={`Mergi la pagina ${page}`}
						color={page === currentPage ? "primary" : "secondary"}
						kind={page === currentPage ? "solid" : "outlined"}
						onClick={() => goToPage(page)}
					>
						<span>{page}</span>
					</Button>
				))}

				{/* Next */}
				<Button
					isOnlyIcon
					aria-label="Pagina următoare"
					color="primary"
					kind="outlined"
					disabled={currentPage >= totalPages}
					onClick={() => goToPage(currentPage + 1)}
				>
					<ChevronRight />
				</Button>
			</div>

			{/* Indicator */}
			<div className="text-muted flex items-center gap-2 font-semibold">
				<span>{currentPage}</span>
				<span>din</span>
				<span>{totalPages}</span>
			</div>
		</div>
	);
};

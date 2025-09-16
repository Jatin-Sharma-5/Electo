"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Filter = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const handleFilter = (value: string) => {
        const params = new URLSearchParams(searchParams);
        params.set("sort", value);
        router.push(`${pathname}?${params.toString()}`, { scroll: false });
    };

    return (
        <div className="flex items-center justify-end gap-3 my-6">
            <span className="text-sm text-gray-600 font-medium">Sort by:</span>
            <select
                name="sort"
                id="sort"
                className="border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-black cursor-pointer"
                onChange={(e) => handleFilter(e.target.value)}
                defaultValue={searchParams.get("sort") || "newest"}
            >
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="asc">Price: Low to High</option>
                <option value="desc">Price: High to Low</option>
            </select>
        </div>
    );
};

export default Filter;

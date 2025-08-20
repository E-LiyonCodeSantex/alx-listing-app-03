import Pill from "@/components/common/pill";
import Image from "next/image";
import { getUniqueFilters } from "@/utils/getFilters";

interface FilterProps {
    activeFilter: string;
    setActiveFilter: (label: string) => void;
}

const Filter: React.FC<FilterProps> = ({ activeFilter, setActiveFilter }) => {
    const filters = getUniqueFilters();

    return (
        <div className="flex items-center gap-[10px] w-full p-1 xs:p-2">
            <div className="flex flex-row flex-nowrap gap-[8px]">
                <div className="p-2 rounded-full border border-gray-700 shrink-0">
                    <Image
                        src="/assets/images/icons/filter.svg"
                        alt="filter"
                        width={15}
                        height={15}
                        className="w-[10px] h-[10px] xs:w-[15px] xs:h-[15px]"
                    />
                </div>
                <Pill
                    label="All"
                    isActive={activeFilter === "All"}
                    onClick={setActiveFilter}
                />
            </div>
            <div className="w-full overflow-x-auto whitespace-nowrap py-2 scrollbar-hide">
                <div className="flex px-2 gap-3">
                    {filters.map((label) => (
                        <Pill
                            key={label}
                            label={label}
                            isActive={activeFilter === label}
                            onClick={setActiveFilter}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Filter;

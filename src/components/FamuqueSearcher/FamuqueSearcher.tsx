import FilterIcon from "@/assets/logos/famuque-filters.svg?react"
import SearchIcon from "@/assets/logos/famuque-search.svg?react";
import { FamuqueButton } from "@/components/FamuqueButton"
import { FamuqueInput } from "@/components/FamuqueInput"
import { Label } from "@/components/static/Labels"

type FamuqueSearcherProps = {
  searchValue: string
  onSearchChange: (value: string) => void
  showFilterButton?: boolean
}

export function FamuqueSearcher({
  searchValue,
  onSearchChange,
  showFilterButton = false,
}: FamuqueSearcherProps) {
  return (
    <nav className="w-full flex justify-center bg-famuque-lightest text-th-4 tablet:text-th-3">
      <div className="w-full max-w-screen-desktop mx-std-3 my-4 flex items-center justify-between gap-x-std-2">
        {showFilterButton && (
          <FamuqueButton
            disabled
            variant="secondary"
            labelClassName="font-avenir-medium flex flex-row gap-std-2"
          >
            <span className="hidden tablet:block">Filtrar</span>
            <FilterIcon className="size-comp-1" />
          </FamuqueButton>
        )}

        <div className="flex items-center gap-std-3 w-full tablet:w-auto">
          <Label className="hidden tablet:block" text="Buscar Producto:" />
          <FamuqueInput
            id="product-search"
            variant="search"
            placeholder="nombre, código o descripción"
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
            icon={<SearchIcon className="size-comp-1 text-gray-500" />}
          />
        </div>
      </div>
    </nav>
  )
}

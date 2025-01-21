"use client";

import { Category } from "../../../sanity.types";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Button } from "./button";
import { Check, ChevronsUpDown } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./command";
import { cn } from "@/lib/utils";

interface Props {
  categories: Category[];
}

const CategorySelector = ({ categories }: Props) => {
  const [open, setOpen] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null
  );
  const router = useRouter();

  const handleCategorySelect = (categoryId: string, slug: string) => {
    setSelectedCategoryId((prevId) => (prevId === categoryId ? null : categoryId));
    router.push(`/categories/${slug}`);
    setOpen(false);
  };

  const handleInputEnter = (inputValue: string) => {
    const selectedCategory = categories.find((category) =>
      category.title?.toLowerCase().includes(inputValue.toLowerCase())
    );
    if (selectedCategory?.slug?.current) {
      handleCategorySelect(selectedCategory._id, selectedCategory.slug.current);
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {selectedCategoryId
            ? categories.find((category) => category._id === selectedCategoryId)?.title
            : "Filter by Category"}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput
            placeholder="Search category..."
            className="h-9"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleInputEnter(e.currentTarget.value);
              }
            }}
          />
          <CommandList>
            <CommandEmpty>No category found.</CommandEmpty>
            <CommandGroup>
              {categories.map((category) => (
                <CommandItem
                  key={category._id}
                  value={category.title}
                  onSelect={() => {
                    handleCategorySelect(
                      category._id,
                      category.slug?.current || ""
                    );
                  }}
                >
                  {category.title}
                  <Check
                    className={cn(
                      "ml-auto",
                      selectedCategoryId === category._id ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default CategorySelector;

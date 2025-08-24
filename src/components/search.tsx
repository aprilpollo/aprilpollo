"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState, useEffect, useMemo, useCallback } from "react";
import {
  ArrowUpRightIcon,
  FileTextIcon,
  HashIcon,
  SearchIcon,
} from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

interface SearchResult {
  id: string;
  type: "page" | "text" | "heading";
  content: string;
  contentWithHighlights: Array<{
    type: "text";
    content: string;
    styles?: { highlight?: boolean };
  }>;
  url: string;
}

export function Search({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleSearch = useCallback(async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        `/api/search?query=${encodeURIComponent(searchQuery)}`
      );
      const data = await response.json();
      setResults(data || []);
    } catch (error) {
      console.error("Error searching:", error);
      setResults([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const debouncedSearch = useMemo(
    () => debounce(handleSearch, 500),
    [handleSearch]
  );

  const handleQueryChange = (value: string) => {
    setQuery(value);

    if (!value.trim()) {
      setResults([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    debouncedSearch(value);
  };

  const renderHighlightedContent = (
    contentWithHighlights: SearchResult["contentWithHighlights"]
  ) => {
    return contentWithHighlights.map((item, index) => (
      <span
        key={index}
        className={
          item.styles?.highlight
            ? "bg-yellow-200 dark:bg-yellow-800 font-medium"
            : ""
        }
      >
        {item.content}
      </span>
    ));
  };

  const getResultIcon = (type: SearchResult["type"]) => {
    switch (type) {
      case "page":
        return <FileTextIcon size={16} className="text-blue-500" />;
      case "heading":
        return <HashIcon size={16} className="text-green-500" />;
      case "text":
        return <FileTextIcon size={16} className="text-gray-500" />;
      default:
        return <FileTextIcon size={16} />;
    }
  };

  const groupedResults = results.reduce((acc, result) => {
    if (!acc[result.type]) {
      acc[result.type] = [];
    }
    acc[result.type].push(result);
    return acc;
  }, {} as Record<string, SearchResult[]>);

  return (
    <>
      <button
        className={cn(
          "border-input bg-background text-foreground placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-9 w-fit rounded-md border px-3 py-2 text-sm shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px]",
          className
        )}
        onClick={() => setOpen(true)}
      >
        <span className="flex grow items-center">
          <SearchIcon
            className="text-muted-foreground/80 -ms-1 me-3"
            size={16}
            aria-hidden="true"
          />
          <span className="text-muted-foreground/70 font-normal">Search</span>
        </span>
        <kbd className="bg-background text-muted-foreground/70 ms-12 -me-1 inline-flex h-5 max-h-full items-center rounded border px-1 font-[inherit] text-[0.625rem] font-medium">
          ⌘K
        </kbd>
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Type a command or search..."
          value={query}
          onValueChange={handleQueryChange}
        />
        <CommandList>
          {loading && (
            <div className="py-6 text-center text-sm h-40">
              <div className="animate-spin inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full mr-2" />
              Searching...
            </div>
          )}

          {!loading && query && results.length === 0 && (
            <CommandEmpty>No results found for {query}.</CommandEmpty>
          )}

          {!loading && results.length > 0 && (
            <>
              {Object.entries(groupedResults).map(
                ([type, typeResults], groupIndex) => (
                  <div key={type}>
                    <CommandGroup
                      heading={
                        type === "page"
                          ? "Pages"
                          : type === "heading"
                          ? "Headings"
                          : "Content"
                      }
                    >
                      {typeResults.slice(0, 5).map((result) => (
                        <Link key={result.id} href={result.url}>
                          <CommandItem
                            value={result.content}
                            className="cursor-pointer"
                          >
                            <div className="flex items-center gap-2 w-full">
                              {getResultIcon(result.type)}
                              <div className="flex-1 min-w-0">
                                <div className="truncate text-sm">
                                  {renderHighlightedContent(
                                    result.contentWithHighlights
                                  )}
                                </div>
                                <div className="text-xs text-muted-foreground truncate mt-1">
                                  {result.url}
                                </div>
                              </div>
                              <ArrowUpRightIcon
                                size={14}
                                className="text-muted-foreground"
                              />
                            </div>
                          </CommandItem>
                        </Link>
                      ))}
                    </CommandGroup>
                    {groupIndex < Object.entries(groupedResults).length - 1 && (
                      <CommandSeparator />
                    )}
                  </div>
                )
              )}
            </>
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
}

function debounce<T extends (arg: string) => void>(
  func: T,
  wait: number
): (arg: string) => void {
  let timeout: NodeJS.Timeout;

  return (arg: string) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(arg), wait);
  };
}

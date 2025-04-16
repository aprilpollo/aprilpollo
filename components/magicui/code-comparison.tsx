"use client";

import { cn } from "@/lib/utils";
import { CheckIcon, CopyIcon, FileIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface CodeComparisonProps {
  code: string;
  language: string;
  filename: string;
  lightTheme: string;
  darkTheme: string;
}

export function CodeComparison({
  code,
  language,
  filename,
  lightTheme,
  darkTheme,
}: CodeComparisonProps) {
  const { theme, systemTheme } = useTheme();
  const [highlightedCode, setHighlightedCode] = useState("");
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    const currentTheme = theme === "system" ? systemTheme : theme;
    const selectedTheme = currentTheme === "dark" ? darkTheme : lightTheme;

    async function highlightCode() {
      try {
        const { codeToHtml } = await import("shiki");
        const before = await codeToHtml(code, {
          lang: language,
          theme: selectedTheme,
        });

        setHighlightedCode(before);
      } catch (error) {
        console.error("Error highlighting code:", error);
        setHighlightedCode(`<pre>${code}</pre>`);
      }
    }
    highlightCode();
  }, [theme, systemTheme, code, language, lightTheme, darkTheme]);

  const renderCode = (code: string, highlighted: string) => {
    if (highlighted) {
      return (
        <div
          className="font-mono h-full overflow-auto bg-background text-xs [&>pre]:h-full [&>pre]:!bg-transparent [&>pre]:p-0 [&_code]:break-all"
          dangerouslySetInnerHTML={{ __html: highlighted }}
        />
      );
    } else {
      return (
        <pre className="h-full overflow-auto break-all bg-background p-0 font-mono text-xs text-foreground">
          {code}
        </pre>
      );
    }
  };



  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };
  
  const coppy = (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            // size="sm"
            className="disabled:opacity-100 ml-auto size-7 cursor-pointer"
            onClick={handleCopy}
            aria-label={copied ? "Copied" : "Copy to clipboard"}
            disabled={copied}
          >
            <div
              className={cn(
                "transition-all",
                copied ? "scale-100 opacity-100" : "scale-0 opacity-0"
              )}
            >
              <CheckIcon
                className="stroke-emerald-500"
                size={16}
                aria-hidden="true"
              />
            </div>
            <div
              className={cn(
                "absolute transition-all",
                copied ? "scale-0 opacity-0" : "scale-100 opacity-100"
              )}
            >
              <CopyIcon size={16} aria-hidden="true" />
            </div>
          </Button>
        </TooltipTrigger>
        <TooltipContent className="px-2 py-1 text-xs">
          Click to copy
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
  
  return (
    <div className="mx-auto w-full">
      <div className="relative w-full overflow-hidden rounded-md border border-border">
        <div className="relative divide-x divide-border">
          <div>
            <div className="flex items-center bg-accent p-2 text-sm text-foreground">
              <FileIcon className="mr-2 h-4 w-4" />
              {filename}
              {coppy}
            </div>
            {renderCode(code, highlightedCode)}
          </div>
        </div>
      </div>
    </div>
  );
}


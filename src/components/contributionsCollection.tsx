import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Skeleton } from "@/components/ui/skeleton";

export type ContributionDay = {
  date: string;
  contributionCount: number;
  color: string;
};

export type ContributionWeek = {
  contributionDays: ContributionDay[];
};

export type ContributionCalendar = {
  totalContributions: number;
  weeks: ContributionWeek[];
};

export type ContributionsCollection = {
  contributionCalendar: ContributionCalendar;
};

type Props = {
  calendar?: ContributionCalendar;
  contributionsCollection?: ContributionsCollection;
  cellSize?: number;
  cellGap?: number;
  showLegend?: boolean;
  className?: string;
  year?: number;
};

const DAY_LABELS = ["", "Mon", "", "Wed", "", "Fri", ""];
const MONTH_LABELS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const DEFAULT_LEGEND = [
  { label: "0", color: "" },
  { label: "1–3", color: "#e1bfff" },
  { label: "4–9", color: "#c084fc" },
  { label: "10–19", color: "#a855f7" },
  { label: "20+", color: "#7c3aed" },
];

const getPurpleColor = (contributionCount: number): string => {
  if (contributionCount === 0) return "";
  if (contributionCount <= 3) return "#e1bfff";
  if (contributionCount <= 9) return "#c084fc";
  if (contributionCount <= 19) return "#a855f7";
  return "#7c3aed";
};

const dUTC = (iso: string) => new Date(iso + "T00:00:00Z");
const monthShort = (iso: string) => MONTH_LABELS[dUTC(iso).getUTCMonth()];
const yearOf = (iso: string) => dUTC(iso).getUTCFullYear();
const dowOf = (iso: string) => dUTC(iso).getUTCDay();
const formatDateWithOrdinal = (iso: string): string => {
  const date = dUTC(iso);
  const month = MONTH_LABELS[date.getUTCMonth()];
  const day = date.getUTCDate();

  const getOrdinalSuffix = (day: number): string => {
    if (day >= 11 && day <= 13) return "th";
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  return `${month} ${day}${getOrdinalSuffix(day)}`;
};

function SkeletonContributionsHeatmap() {
  return (
    <div className="flex  items-center space-x-4">
      <div className="space-y-2">
        <Skeleton className="h-4 w-12" />
        <Skeleton className="h-4 w-12" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-10 w-[250px]" />
      </div>
    </div>
  );
}

export function ContributionsHeatmap({
  calendar,
  contributionsCollection,
  cellSize = 12.5,
  cellGap = 2,
  showLegend = true,
  className = "",
  year,
}: Props) {
  const cal: ContributionCalendar | null =
    calendar ?? contributionsCollection?.contributionCalendar ?? null;

  if (!cal) {
    return <SkeletonContributionsHeatmap />;
  }

  type DayOrNull = ContributionDay | null;
  const normalizedWeeks: DayOrNull[][] = cal?.weeks.map((w) => {
    const arr: DayOrNull[] = new Array(7).fill(null);
    w.contributionDays.forEach((d) => {
      const idx = dowOf(d.date); // 0..6
      arr[idx] = d;
    });
    return arr;
  });

  const monthByCol: Array<string | null> = [];
  normalizedWeeks.forEach((week, colIdx) => {
    const firstDay = week.find(Boolean);
    if (!firstDay) {
      monthByCol[colIdx] = null;
      return;
    }

    const currentDate = dUTC(firstDay.date);
    const dayOfMonth = currentDate.getUTCDate();
    const month = monthShort(firstDay.date);

    if (dayOfMonth <= 7) {
      monthByCol[colIdx] = month;
    } else {
      monthByCol[colIdx] = null;
    }
  });

  const dayLabelWidth = 26;

  return (
    <div className={cn("w-full text-sm", className)}>
      <div className="flex items-start gap-3">
        <div className="flex flex-col ml-1" style={{ width: dayLabelWidth }}>
          <div style={{ height: 15, marginBottom: 3 }} />

          <div className="flex flex-col" style={{ gap: cellGap }}>
            {DAY_LABELS.map((label, idx) => (
              <div
                key={idx}
                className="text-xs text-right leading-none"
                style={{
                  height: cellSize,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  paddingRight: 4,
                }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex mb-1" style={{ gap: cellGap, height: 15 }}>
            {normalizedWeeks.map((_, i) => (
              <div
                key={`month-${i}`}
                className="text-xs leading-none"
                style={{
                  width: cellSize,
                  display: "flex",
                  alignItems: "flex-end",
                }}
              >
                {monthByCol[i] || ""}
              </div>
            ))}
          </div>

          <div className="flex" style={{ gap: cellGap }}>
            {normalizedWeeks.map((week, weekIdx) => (
              <div
                key={`week-${weekIdx}`}
                className="flex flex-col"
                style={{ gap: cellGap }}
              >
                {week.map((day, dayIdx) => {
                  const isCurrentYear =
                    !year || (day && yearOf(day.date) === year);
                  const bgColor =
                    day && isCurrentYear
                      ? getPurpleColor(day.contributionCount)
                      : "";
                  const opacity = day && isCurrentYear ? 1 : 0.25;

                  return (
                    <Tooltip key={`${weekIdx}-${dayIdx}`}>
                      <TooltipTrigger
                        className="rounded-xs border"
                        style={{
                          backgroundColor: bgColor,
                          opacity,
                          width: cellSize,
                          height: cellSize,
                        }}
                      />
                      <TooltipContent>
                        {day
                          ? `${day.contributionCount} contribution${
                              day.contributionCount !== 1 ? "s" : ""
                            } on ${formatDateWithOrdinal(day.date)}.`
                          : "No contributions."}
                      </TooltipContent>
                    </Tooltip>
                  );
                })}
              </div>
            ))}
          </div>

          {showLegend && (
            <div className="flex items-center justify-between mt-2">
              <div className="text-xs flex gap-2">
                <span className="font-semibold">
                  {cal.totalContributions.toLocaleString()}
                </span>
                contributions
              </div>
              <div className="flex items-center gap-2 text-x">
                <span>Less</span>
                <div className="flex gap-1">
                  {DEFAULT_LEGEND.map((item, i) => (
                    <div
                      key={i}
                      className="rounded-xs"
                      style={{
                        width: 11,
                        height: 11,
                        backgroundColor: item.color,
                        border: "1px solid rgba(27, 31, 36, 0.06)",
                      }}
                      title={`${item.label} contributions`}
                    />
                  ))}
                </div>
                <span>More</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

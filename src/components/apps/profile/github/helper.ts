import { format } from "date-fns";

type ContributionDay = {
  date: string;
  contributionCount: number;
  color: string;
};

function getMonthLabels(days: ContributionDay[]): string[] {
  const labels = new Array(52).fill("");
  for (let i = 0; i < 52; i++) {
    const firstDayOfWeek = days[i * 7];
    if (!firstDayOfWeek) continue;
    const date = new Date(firstDayOfWeek.date);
    const month = date.toLocaleString("en-US", { month: "short" });
    const isFirstOfMonth = date.getDate() <= 7;
    if (isFirstOfMonth) {
      labels[i] = month;
    }
  }
  return labels;
}

function toColumnMajor(days: ContributionDay[]): (ContributionDay | null)[] {
  const weeks = Array.from({ length: 52 }, (_, i) =>
    days.slice(i * 7, i * 7 + 7)
  );
  return Array.from({ length: 7 }, (_, dayIndex) =>
    weeks.map((week) => week[dayIndex] || null)
  ).flat();
}

function forMatted(date: string): string {
  return format(new Date(date), "MMMM do");
}

export { getMonthLabels, toColumnMajor, forMatted, type ContributionDay };
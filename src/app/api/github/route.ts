export async function GET() {
  const GITHUB_GRAPHQL_API = process.env.GITHUB_GRAPHQL_API!;
  const GITHUB_TOKEN = process.env.GITHUB_TOKEN!;
  const GITHUB_USERNAME = process.env.GITHUB_USERNAME!;

  const query = `
    query {
      user(login: "${GITHUB_USERNAME}") {
        name
        bio
        avatarUrl
        pinnedItems(first: 6) {
          nodes {
            ... on Repository {
              name
              description
              parent {
                nameWithOwner
                url
              }
              url
              primaryLanguage {
                name
                color
              }
            }
          }
        }
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
                color
              }
            }
          }
        }
      }
    }
  `;

  const res = await fetch(GITHUB_GRAPHQL_API, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  const json = await res.json();
  return Response.json(json.data.user);
}

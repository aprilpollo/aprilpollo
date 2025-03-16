export type Playlist = (typeof playlists)[number]
export type Bloglist = (typeof bloglist)[number]

export const playlists = [
  "Recently Added",
  "Recently Played",
 "Top Songs",
  "Top Albums",
  "Top Artists",
  "Logic Discography",
  "Bedtime Beats",
  "Feeling Happy",
  "I miss Y2K Pop",
  "Runtober",
  "Mellow Days",
  "Eminem Essentials",
]

export const bloglist = [
    {name: "Authentication & JWT", link: "/blog/auth"},
    {name: "Docker", link: "/blog/docker"},
    {name: "Embedded System", link: "/blog/embedded-system"},
    {name: "Face Recognition", link: "/blog/face-recognition"},
    {name: "Go (Golang)", link: "/blog/go"},
]
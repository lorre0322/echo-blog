const echoEditIcon: any = [
  {
    type: "h1",
    text: '## ',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M5 17V7h2v4h4V7h2v10h-2v-4H7v4H5Zm12 0V9h-2V7h4v10h-2Z"/></svg>',
  },
  {
    type: "h2",
    text: '### ',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M3 17V7h2v4h4V7h2v10H9v-4H5v4H3Zm10 0v-4q0-.825.588-1.413T15 11h4V9h-6V7h6q.825 0 1.413.588T21 9v2q0 .825-.588 1.413T19 13h-4v2h6v2h-8Z"/></svg>',
  },
  {
    type: "list",
    text: '- ',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M9 19v-2h12v2H9Zm0-6v-2h12v2H9Zm0-6V5h12v2H9ZM5 20q-.825 0-1.413-.588T3 18q0-.825.588-1.413T5 16q.825 0 1.413.588T7 18q0 .825-.588 1.413T5 20Zm0-6q-.825 0-1.413-.588T3 12q0-.825.588-1.413T5 10q.825 0 1.413.588T7 12q0 .825-.588 1.413T5 14Zm0-6q-.825 0-1.413-.588T3 6q0-.825.588-1.413T5 4q.825 0 1.413.588T7 6q0 .825-.588 1.413T5 8Z"/></svg>'
  },
  {
    type: "checklist",
    text: '- [x] ',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M5.55 19L2 15.45l1.4-1.4l2.125 2.125l4.25-4.25l1.4 1.425L5.55 19Zm0-8L2 7.45l1.4-1.4l2.125 2.125l4.25-4.25l1.4 1.425L5.55 11ZM13 17v-2h9v2h-9Zm0-8V7h9v2h-9Z"/></svg>'
  },
  {
    type: "todolist",
    text: "- [ ] ",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M14 21v-8h8v8h-8Zm2-2h4v-4h-4v4ZM2 18v-2h9v2H2Zm12-7V3h8v8h-8Zm2-2h4V5h-4v4ZM2 8V6h9v2H2Zm16 9Zm0-10Z"/></svg>'
  },
  {
    type: "code",
    text: "```/n```",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M161.98 397.63L0 256l161.98-141.63l27.65 31.61L64 256l125.63 110.02l-27.65 31.61zm188.04 0l-27.65-31.61L448 256L322.37 145.98l27.65-31.61L512 256L350.02 397.63zM222.15 442L182 430.08L289.85 70L330 81.92L222.15 442z"/></svg>'
  },
  {
    type: "mark",
    text: "> ",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h5.175q.4 0 .763.15t.637.425L12 6h8q.825 0 1.413.588T22 8v1.8q0 .425-.288.713T21 10.8q-.425 0-.713-.288T20 9.8V8H4v10h7q.425 0 .713.288T12 19q0 .425-.288.713T11 20H4Zm14.3-5.475l1.075 1.075l-3.875 3.85v1.05h1.05l3.875-3.85l1.05 1.05l-3.725 3.725q-.275.275-.638.425t-.762.15H15q-.425 0-.712-.288T14 21v-1.35q0-.4.15-.763t.425-.637l3.725-3.725Zm3.175 3.175L18.3 14.525l1.45-1.45q.275-.275.7-.275t.7.275l1.775 1.775q.275.275.275.7t-.275.7l-1.45 1.45ZM4 8v10V8Z"/></svg>'
  },
  {
    type: "picture",
    text: "![]()",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v11m18-4v7a2 2 0 0 1-2 2h-3m5-9c-6.442 0-10.105 1.985-12.055 4.243M3 16v3a2 2 0 0 0 2 2v0h11M3 16c1.403-.234 3.637-.293 5.945.243M16 21c-1.704-2.768-4.427-4.148-7.055-4.757M8.5 7C8 7 7 7.3 7 8.5S8 10 8.5 10S10 9.7 10 8.5S9 7 8.5 7z"/></svg>'
  },
]
export default echoEditIcon
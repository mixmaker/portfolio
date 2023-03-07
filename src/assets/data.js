export const fetchUrl = () => {
  return fetch(
    "https://gist.githubusercontent.com/mixmaker/644ecbdffba7b1f2b7b818b4cb9e23f3/raw/projects.json"
  );
};

export const timelineItems = [
  {
    date: "2022 - present",
    cardTitle: "Job",
    cardDetailedText:
      "Working as BPM at India Post",
  },
  {
    date: "2021 - 2022",
    cardTitle: "College (B.Tech)",
    cardDetailedText:
      "B.Tech on ECE from Ramkrishna Mahato Government Engineering College, I had to leave college for job",
  },
  {
    date: "2021",
    cardTitle: "WBJEE",
    cardDetailedText: "Secured 8640 rank in WBJEE exam",
  },
  {
    date: "2021",
    cardTitle: "Higher Secondary Exam",
    cardDetailedText: "Passed Higher Secondary Exam with total of 93.4%",
  },
  {
    date: "2019 - 2021",
    cardTitle: "Higher Secondary Education",
    cardDetailedText:
      "Completed my Higher Secondary education from Bankura Zilla School",
  },
  {
    date: "2019",
    cardTitle: "Secondary / Madhyamik Exam",
    cardDetailedText: "Passed Secondary / Madhyamik Exam with total of 93.14%",
  },
  {
    date: "2010 - 2019",
    cardTitle: "Secondary Education",
    cardDetailedText:
      "Completed my Secondary Education from Asansol Ramakrishna Mission High School",
  },
  {
    date: "2009-2010",
    cardTitle: "Pre-primary",
    cardDetailedText:
      "Completed my pre-primary from Shyamapur Primary School, Mejia",
  },
];

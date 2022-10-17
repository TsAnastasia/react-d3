import { IData, IDataLink, IDataTask } from "./types";

const TASKS: IDataTask[] = [
  {
    id: "001",
    name: "Бурение лидерных скважин",
    start: "2022-01-02T00:00:00.000Z",
    finish: "2022-01-08T00:00:00.000Z",
    group: "01",
  },
  {
    id: "002",
    name: "Установка в скважины свай",
    start: "2022-01-08T00:00:00.000Z",
    finish: "2022-01-14T00:00:00.000Z",
    group: "01",
  },
  {
    id: "003",
    name: "Монтаж оголовников",
    start: "2022-01-14T00:00:00.000Z",
    finish: "2022-01-27T00:00:00.000Z",
    group: "01",
  },
  {
    id: "004",
    name: "Монтаж ростверков и опорных конструкций под порталы, опоры ВЛ",
    start: "2022-01-15T00:00:00.000Z",
    finish: "2022-01-24T00:00:00.000Z",
    group: "01",
  },
  {
    id: "005",
    name: "Сборка опор/порталов",
    start: "2022-01-27T00:00:00.000Z",
    finish: "2022-02-10T00:00:00.000Z",
    group: "01",
  },
  {
    id: "006",
    name: "Установка опор/порталов",
    start: "2022-02-10T00:00:00.000Z",
    finish: "2022-03-09T00:00:00.000Z",
    group: "01",
  },
  {
    id: "007",
    name: "Подвеска грозозащитного троса",
    start: "2022-02-11T00:00:00.000Z",
    finish: "2022-03-05T00:00:00.000Z",
    group: "02",
  },
  {
    id: "008",
    name: "Подвеска провода",
    start: "2022-03-05T00:00:00.000Z",
    finish: "2022-04-01T00:00:00.000Z",
    group: "02",
  },
  {
    id: "009",
    name: "Укладка полосового заземления",
    start: "2022-03-10T00:00:00.000Z",
    finish: "2022-03-14T00:00:00.000Z",
    group: "02",
  },
  {
    id: "010",
    name: "Укладка активного соляного заземления",
    start: "2022-03-14T00:00:00.000Z",
    finish: "2022-03-17T00:00:00.000Z",
    group: "02",
  },
];

const LINKS: IDataLink[] = [
  { type: "FS", source: "001", target: "002" },
  { type: "FS", source: "002", target: "003" },
  { type: "FS", source: "002", target: "004" },
  { type: "FF", source: "003", target: "004" },
  { type: "FS", source: "003", target: "005" },
  { type: "FS", source: "005", target: "006" },
  { type: "FS", source: "005", target: "007" },
  { type: "FF", source: "006", target: "007" },
  { type: "FF", source: "007", target: "008" },
  { type: "FF", source: "007", target: "009" },
  { type: "FS", source: "009", target: "010" },
];

export const DATA: IData = { tasks: TASKS, links: LINKS };

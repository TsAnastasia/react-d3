import { IDataTask } from "./interfaces";

export const TASKS: IDataTask[] = [
  {
    activity_id: 11,
    activity_name: "1 1",
    details: [
      {
        activity_id: 111,
        activity_name: "1 1 1",
        details: [
          {
            activity_id: 223084,
            activity_name: "Бурение лидерных скважин",
            start: "2022-01-02T00:00:00.000Z",
            finish: "2022-01-08T00:00:00.000Z",
            res_fact: { electrician: 10 },
          },
          {
            activity_id: 223085,
            activity_name: "Установка в скважины свай",
            start: "2022-01-08T00:00:00.000Z",
            finish: "2022-01-14T00:00:00.000Z",
            res_fact: { electrician: 10 },
          },
          {
            activity_id: 223086,
            activity_name: "Монтаж оголовников",
            start: "2022-01-14T00:00:00.000Z",
            finish: "2022-01-27T00:00:00.000Z",
            res_fact: { electrician: 12 },
          },
        ],
      },
      {
        activity_id: 112,
        activity_name: "1 1 2",
        details: [
          {
            activity_id: 223087,
            activity_name:
              "Монтаж ростверков и опорных конструкций под порталы, опоры ВЛ",
            start: "2022-01-15T00:00:00.000Z",
            finish: "2022-01-24T00:00:00.000Z",
            res_fact: { electrician: 100 },
          },
          {
            activity_id: 223088,
            activity_name: "Сборка опор/порталов",
            start: "2022-01-27T00:00:00.000Z",
            finish: "2022-02-10T00:00:00.000Z",
            res_fact: { electrician: 15 },
          },
          {
            activity_id: 223089,
            activity_name: "Установка опор/порталов",
            start: "2022-02-10T00:00:00.000Z",
            finish: "2022-03-09T00:00:00.000Z",
            res_fact: { electrician: 15 },
          },
        ],
      },
    ],
  },
  {
    activity_id: 12,
    activity_name: "1 2",
    details: [
      {
        activity_id: 123,
        activity_name: "1 2 3",
        details: [
          {
            activity_id: 223093,
            activity_name: "Подвеска грозозащитного троса",
            start: "2022-02-11T00:00:00.000Z",
            finish: "2022-03-05T00:00:00.000Z",
            res_fact: { electrician: 96 },
          },
          {
            activity_id: 223092,
            activity_name: "Подвеска провода",
            start: "2022-03-05T00:00:00.000Z",
            finish: "2022-04-01T00:00:00.000Z",
            res_fact: { electrician: 38 },
          },
        ],
      },
      {
        activity_id: 124,
        activity_name: "1 2 4",
        details: [
          {
            activity_id: 223094,
            activity_name: "Укладка полосового заземления",
            start: "2022-03-10T00:00:00.000Z",
            finish: "2022-03-14T00:00:00.000Z",
            res_fact: { electrician: 39 },
          },
          {
            activity_id: 223095,
            activity_name: "Укладка активного соляного заземления",
            start: "2022-03-14T00:00:00.000Z",
            finish: "2022-03-17T00:00:00.000Z",
            res_fact: { electrician: 31 },
          },
        ],
      },
    ],
  },
];

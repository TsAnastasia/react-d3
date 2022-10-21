export type TaskIdType = number | string;

interface IDataTaskBase {
  activity_id: TaskIdType;
  activity_name: string;
}

export interface IDataTaskSingle extends IDataTaskBase {
  start: string;
  finish: string;
  res_fact: {
    electrician: number;
  };
}

export interface IDataTaskGroup extends IDataTaskBase {
  details: IDataTask[];
}

export type IDataTask = IDataTaskSingle | IDataTaskGroup;

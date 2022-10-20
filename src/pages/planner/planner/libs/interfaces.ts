export interface IPlannerTaskBase {
  activity_id: number | string;
  activity_name: string;
  type: "task" | "group";
}

export interface IPlannerTask extends IPlannerTaskBase {
  type: "task";
  start: Date;
  finish: Date;
  res_fact: {
    electrician: number;
  };
}

export interface IPlannerTaskGroup extends IPlannerTaskBase {
  type: "group";
  open: boolean;
  details: (IPlannerTask | IPlannerTaskGroup)[];
  tasksIds: (number | string)[];
}

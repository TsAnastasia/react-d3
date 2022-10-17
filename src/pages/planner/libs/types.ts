export interface IPlannerTask {
  id: string;
  name: string;
  start: Date;
  finish: Date;
  group: string;
}

export interface IPlannerLink {
  id: string;
  type: LinkType;
  source: IPlannerTask;
  target: IPlannerTask;
}

export const LINKS_TYPES = ["FS", "FS", "SS", "SF"];
export type LinkType = typeof LINKS_TYPES[number];

export interface IData {
  tasks: IDataTask[];
  links: IDataLink[];
}

export interface IDataTask extends Omit<IPlannerTask, "start" | "finish"> {
  start: string;
  finish: string;
}
export interface IDataLink
  extends Omit<IPlannerLink, "source" | "target" | "id"> {
  source: string;
  target: string;
}

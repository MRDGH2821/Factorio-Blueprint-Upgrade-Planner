export type BluePrintConfig = {
  version: number;
  entities: Array<{
    old: string;
    new: string;
  }>;
};

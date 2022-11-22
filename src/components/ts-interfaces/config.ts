export type BluePrintConfig = {
  version: number;
  entities: Array<{
    old: string;
    new: string;
  }>;
};

export interface ConfigInputStore {
  config: string | BluePrintConfig;
  errors?: string;
}

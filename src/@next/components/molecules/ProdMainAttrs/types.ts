export interface IProps {
  description?: string;
  descriptionJson?: string;
  name?: string;
  attributes?: Array<{
    attribute: { name: string };
    values: Array<{ name: string }>;
  }>;
}

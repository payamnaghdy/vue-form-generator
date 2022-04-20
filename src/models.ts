import { VNode } from "vue";

export type VNGenerator = (
  tag: string,
  value?: string | number | null,
  label?: string,
  name?: string,
  options?: string[],
  children?: VNode[] | null
) => VNode;
export interface FormItem {
  type: string;
  name: string;
  label: string;
  value?: string | number;
  options?: string[];
  error?: string;
}

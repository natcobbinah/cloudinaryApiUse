import { modeType } from "../enumConstants/modeTypes";
export type Resize =  {
  width?: number | string;
  height?: number | string;
  mode?: modeType;
  aspectRatio?: string;
}

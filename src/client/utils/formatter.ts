import { dayjs } from "element-plus";
export const timeFormatter = (row: any, column: any, value: string) => {
  return dayjs(value).format("YYYY-MM-DD")
}
type focus = {
  ssl: string,
  address: string
}
export const webFormatter = (row: any, column: any, value: focus) => {
  return value.ssl + value.address
}
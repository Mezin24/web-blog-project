export interface SidebarItemType {
  path: string,
  text: string,
  Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>,
  auth?: boolean
}



import { SidebarProps } from "./sidebar.interface";

export const Sidebar: React.FC<SidebarProps> = ({children}) => {
  
  return (
    <>
      <div className="w-[25%] flex flex-col items-center pt-[29px] bg-smokeWhite h-screen space-y-3.5">
        {children}
      </div>
    </>
  );
};

export default Sidebar;

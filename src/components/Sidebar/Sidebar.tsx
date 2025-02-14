

import { SidebarProps } from "./sidebar.interface";

export const Sidebar: React.FC<SidebarProps> = ({children}) => {
  
  return (
    <>
      <div className="w-[100%] md:w-[313px] flex flex-col items-center pt-[29px] bg-smokeWhite h-screen space-y-3.5">
        {children}
      </div>
    </>
  );
};

export default Sidebar;

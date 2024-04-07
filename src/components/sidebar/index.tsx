import {
  Award,
  Diagram,
  FolderOpen,
  House2,
  Monitor,
  Moon,
  Sun1,
  Timer1,
} from "iconsax-react";
import news from "../../assets/news.jpeg";
import user from "../../assets/user.png";
import { RecordCircle } from "iconsax-react";
import { Tooltip } from "@mantine/core";
// import { useThemeCtx } from "../../context/themeCtx";

const Sidebar = ({ isOpen }: { isOpen: boolean }) => {
  const NavLink = [
    {
      icon: <House2 size="18" color="" variant="Bold" className="stroke-black block mx-auto"/>,
      name: "home",
      link: "/",
    },
    {
      icon: (
        <FolderOpen size="18" color="" variant="Bold" className="stroke-black block mx-auto" />
      ),
      name: "browse",
      link: "/browse",
    },
    {
      icon: <Award size="18" color="" variant="Bold" className="stroke-black block mx-auto" />,
      name: "editor picks",
      link: "/editor_picks",
    },
    {
      icon: (
        <Diagram size="18" color="" variant="Bold" className="stroke-black block mx-auto" />
      ),
      name: "trending",
      link: "/trending",
    },
    {
      icon: (
        <Timer1 size="18" color="" variant="Bold" className="stroke-black block mx-auto" />
      ),
      name: "latest",
      link: "/latest",
    },
  ];

  const featured = [
    {
      image: user,
      name: "Akademiks",
      followers: "4.6k",
    },
    {
      image: news,
      name: "NEWSMAX",
      followers: "2.58k",
    },
    {
      image: user,
      name: "Rekieta Law",
      followers: "1.82k",
    },
  ];

  const themeList = [
    {
      value: "system default",
      icon: <Monitor variant="Outline" size="20" />,
    },
    {
      value: "dark",
      icon: <Moon variant="Outline" size="20" />,
    },
    {
      value: "light",
      icon: <Sun1 variant="Outline" size="20" />,
    },
  ];
  // const { theme, setTheme } = useThemeCtx();
  return (
    <>
      <aside
        className={`${
          isOpen ? "w-[250px] block" : "w-[100px] hidden lg:block"
        } lg:z-0 main-side bg-white border border-gray-300 text-black h-screen overflow-y-scroll`}
      >
        <div className="p-3 mt-12 m-auto space-y-4">
          <div className="border-b py-3">
            <div
              className={`${
                isOpen ? "items-start space-y-2 font-bold" : "items-center"
              } flex flex-col gap-4`}
            >
              {NavLink.map(({ icon, name, link }, id) => (
                <a
                  href={link}
                  key={id}
                  className={`${isOpen ? "flex-row gap-4 hover:bg-gray-10 hover:rounded-l  " : "flex-col w-16 hover:bg-gray-100 hover:rounded-lg"} flex w-ful py-2`}
                >
                  {icon}
                  <p className="capitalize text-center text-[0.8rem]">{name}</p>
                </a>
              ))}
            </div>
          </div>

          <div className="w-full border-b py-3">
            <h4
              className={`${
                isOpen ? "text-left flex gap-2" : "text-center"
              } font-bold  text-[0.8rem] mb-4`}
            >
              Featured{" "}
              <span className={`${isOpen ? "block" : "hidden"}`}>Channels</span>
            </h4>

            <div className="space-y-3">
              {featured.map(({ image, name, followers }, id) => (
                <div
                  className={`${
                    isOpen ? "justify-between" : "justify-center"
                  } flex items-center cursor-pointer`}
                  key={id}
                >
                  <div className="flex gap-1 items-center">
                    <Tooltip
                      arrowPosition="side"
                      arrowOffset={5}
                      arrowSize={4}
                      label={
                        <p
                          className={`bg-gray-100 px-3 py-[0.1rem] text-black flex items-center rounded-full text-[.813rem] gap-2`}
                        >
                          <RecordCircle size={5} color="red" variant="Bold" />{" "}
                          {followers}
                        </p>
                      }
                      withArrow
                      position="right-start"
                      offset={{ mainAxis: 0, crossAxis: 0 }}
                      classNames={{
                        tooltip: `${isOpen ? "hidden" : "block"} !bg-white !rounded-xl`
                      }}
                    >
                      {/* <Button>Button with tooltip</Button> */}
                      <img
                        src={image}
                        alt=""
                        className="w-[2rem] h-[2rem] rounded-full border-2 border-red-500"
                      />
                    </Tooltip>
                    <p
                      className={`${isOpen ? "block" : "hidden"} font-semibold`}
                    >
                      {name}
                    </p>
                  </div>
                  <p
                    className={`${
                      isOpen ? "block" : "hidden"
                    } bg-gray-100 px-3 py-[0.1rem] flex items-center rounded-full text-[.813rem] gap-2`}
                  >
                    <RecordCircle size={5} color="red" variant="Bold" />{" "}
                    {followers}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full border-b py-3">
            <h4
              className={`${
                isOpen ? "text-left flex gap-2" : "text-center"
              } font-bold  text-[0.8rem] mb-4`}
            >
              Theme
            </h4>

            <div className="space-y-3">
              {themeList.map(({ value, icon }, id) => (
                <div
                  className={`${
                    isOpen ? "items-start space-y-2 font-bold" : "items-center"
                  } flex flex-col gap-4 cursor-pointer`}
                  key={id}
                  // onClick={() => {
                  //   setTheme(theme === 'dark' ? 'light' : 'dark');
                  // }}
                >
                  <div
                    className={`${
                      isOpen
                        ? "flex-row gap-2"
                        : "flex-col items-center text-center w-16"
                    } flex`}
                  >
                    <div
                    // className={theme === 'dark' ? 'bg-white' : 'bg-black'}
                    >
                      {icon}
                    </div>
                    <p className={`font-semi-bold text-[0.7rem]`}>{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

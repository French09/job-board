import { HiSun, HiMoon } from "react-icons/hi";
import Wrapper from "../assets/wrappers/ThemeToggle";
import { useDashboardContext } from "../pages/DashboardLayout";

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useDashboardContext();
  return (
    <Wrapper onClick={toggleDarkTheme}>
      {isDarkTheme ? <HiSun className="toggle-icon" /> : <HiMoon />}
    </Wrapper>
  );
};
export default ThemeToggle;

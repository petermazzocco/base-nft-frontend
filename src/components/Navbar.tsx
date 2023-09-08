import { ConnectKitButton } from "../components/ConnectKitButton";
import ThemeSwitcher from "./ThemeChanger";

export default function Navbar() {
  return (
    <div className="flex flex-row justify-between m-4">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Cute Corgis!</a>
      </div>
      <div className="flex flex-row space-x-4 align-middle">
        <div className="flex-none">
          <ConnectKitButton />
        </div>
        <div className="flex-none">
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
}

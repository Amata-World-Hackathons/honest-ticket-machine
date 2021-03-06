import classNames from "classnames";
import { useInternetIdentity } from "@src/context/InternetIdentity";
import DfinityLogo from "@src/ui/logos/DfinityLogo";
import Link from "next/link";

const AccountDropdown: React.FC<{ className?: string }> = ({ className }) => {
  const internetIdentity = useInternetIdentity();

  if (!internetIdentity.isLoggedIn) {
    return (
      <button
        className={classNames("btn btn-sm btn-primary gap-2", className)}
        onClick={internetIdentity.login}
      >
        <DfinityLogo className="h-full" />
        Login
      </button>
    );
  }

  console.log("IDENTITY", internetIdentity.identity);

  return (
    <div className={classNames("dropdown dropdown-end", className)}>
      <label htmlFor="" tabIndex={0} className="btn btn-sm btn-primary">
        My account
      </label>

      <ul tabIndex={0} className="dropdown-content menu p-2">
        <li>
          <Link href="/events/new">
            <a>New&nbsp;event</a>
          </Link>
        </li>
        <li className="divider"></li>
        <li>
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              internetIdentity.logout();
            }}
          >
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AccountDropdown;

import {} from "react";
import { Outlet, Link } from "react-router-dom";

export default function NavBar() {
  const routes = [
    { name: "Home", path: "/" },
    { name: "Create", path: "create" },
  ];
  return (
    <div className="w-full">
      <nav className="bg-gray-800 p-3 flex-row">
        <div className="flex gap-2">
          {routes.map((route) => {
            return (
              <Link to={route.path} key={route.path}>
                {route.name}
              </Link>
            );
          })}
        </div>
      </nav>
      <div className="container block">
        <Outlet />
      </div>
    </div>
  );
}

import { routes } from "@/app/lib/routes";
import { ChevronRightIcon, CloudIcon } from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <header className="w-full text-slate-800 py-4">
        <div className="flex items-center justify-between container mx-auto">
          <div className="flex items-center">
            <div className="flex items-center">
              <CloudIcon width={32} />
              <span className="text-xl ml-2 font-semibold">Acme</span>
            </div>
            <nav className="ml-12">
              <ul className="flex gap-6">
                {routes.map(({ id, name, link }) => (
                  <li key={id}><a className="font-medium hover:text-slate-900" href={link}>{name}</a></li>
                ))}
              </ul>
            </nav>
          </div>
          <a className="inline-flex items-center border border-slate-400 hover:border-slate-800 py-2 px-3 rounded" href="/api/auth/signin">
            <span className="font-medium">Login</span>
            <ChevronRightIcon className="ml-1" width={16} />
          </a>
        </div>
      </header>
  )
}
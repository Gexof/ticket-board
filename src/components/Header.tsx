interface IProps {
  ticketsNum: number;
}

const Header = ({ ticketsNum }: IProps) => {
  return (
    <header className="flex flex-col gap-5 pb-6 sm:flex-row sm:items-center sm:justify-between">
      {/* Brand */}
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-violet-600 to-indigo-500 text-xl font-bold text-white shadow-md shadow-violet-500/20">
          T
        </div>

        <div>
          <h1 className="text-xl font-bold tracking-tight text-slate-900">
            Ticket Board
          </h1>
          <p className="mt-0.5 text-sm text-slate-500">
            Support queue overview
          </p>
        </div>
      </div>

      {/* Open Tickets Counter */}
      <div className="flex w-fit items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2">
        <div className="flex h-4 w-4 items-center justify-center rounded-full border border-amber-100 bg-amber-50">
          <span className="h-2 w-2 rounded-full bg-amber-500" />
        </div>

        <div className="flex items-center gap-2">
          <p className="text-base font-bold leading-none text-amber-800">
            {ticketsNum}
          </p>
          <p className="text-xs font-semibold text-slate-500">Open tickets</p>
        </div>
      </div>
    </header>
  );
};

export default Header;

const filters = ["all", "this year", "this month", "this week", "today"];

interface filterProps {
  getFilter: (f: string) => void;
  filter: string;
}

const Filters = ({ getFilter, filter }: filterProps) => {
  return (
    <div className="flex flex-col space-y-2 lg:flex-row lg:space-y-0 lg:space-x-4 text-left">
      {filters.map((f) => (
        <span
          className={`text-center px-4 py-1 bg-green-700 text-white font-semibold border border-green-700 rounded-full transition-all duration-100 hover:cursor-pointer hover:-translate-y-0.5 hover:shadow-lg ${
            filter === f ? "bg-white text-green-700" : ""
          }`}
          key={f}
          onClick={() => getFilter(f)}
        >
          {f}
        </span>
      ))}
    </div>
  );
};

export default Filters;

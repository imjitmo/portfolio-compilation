import { ImSpinner10 } from 'react-icons/im';

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <ImSpinner10 className="size-24 animate-spin text-slate-950 dark:text-slate-100" />
    </div>
  );
};
export default Loader;

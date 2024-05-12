import { RiMoonClearFill, RiSunFill } from 'react-icons/ri';
import { useTheme } from './ThemeProvider';
import { Button } from './ui/button';
export function ModeToggler() {
  const { setTheme } = useTheme();
  const currentTheme = localStorage.getItem('vite-ui-theme');

  return (
    <Button
      className="bg-transparent hover:bg-transparent focus:border-none shadow-none"
      onClick={() => setTheme(currentTheme === 'light' ? 'dark' : 'light')}
    >
      <RiSunFill className="absolute size-6 dark:text-slate-50 rotate-90 scale-0 transition-all dark:-rotate-0 dark:scale-100" />
      <RiMoonClearFill className="absolute size-6 text-slate-950 rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0" />
    </Button>
  );
}

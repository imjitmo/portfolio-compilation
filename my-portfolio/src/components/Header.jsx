// import images
import logo from '../assets/j_wh.svg';

export default function Header() {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="">
            <img src={logo} alt="logo" width="64px" />
          </a>
          <button className="btn btn-sm">Work with me</button>
        </div>
      </div>
    </header>
  );
}

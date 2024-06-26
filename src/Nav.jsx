import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="bg-slate-400 p-4">
      <Link to="/"><p className="text-2xl ">Contactly</p></Link>
      <Link to="contact-list">Contacts List</Link>
    </nav>
  );
}

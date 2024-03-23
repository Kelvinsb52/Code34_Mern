import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <nav className="flex justify-between items-center mb-6">
                <NavLink to="/">
                    <img alt="MongoDB logo" className="h-20 inline" src="https://img.freepik.com/free-vector/creative-abstract-quantum-illustration_23-2149236239.jpg?t=st=1710954283~exp=1710957883~hmac=9ddf168e1f81c689cafbc05813a81971442c4f7c7db878669b7fe8dd040ae69a&w=1060"></img>
                </NavLink>

                <NavLink className="inline-flex items-center justify-center whitespace-nowrap text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 h-9 rounded-md px-3" to="/create">
                    Add Subject
                </NavLink>
            </nav>
        </div>
    );
}
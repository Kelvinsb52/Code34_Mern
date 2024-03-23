import { NavLink } from "react-router-dom";
import Stopwatch from "./Stopwatch";

export default function Home() {
    return (
        <>
            <div>
                <h1 className="text-center font-bold text-5xl font-serif">
                    Home
                </h1>
            </div>
            <div className="flex flex-col items-center mt-10">
                <Stopwatch />
            </div>
        </>

    );
}
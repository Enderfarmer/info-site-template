import { Link } from "react-router";
import ArrowLeft from "../assets/arrow-left.svg";

export default function ArrowBack() {
    return (
        <Link to="/all-content">
            <img
                src={ArrowLeft}
                alt="Back to content list"
                width={40}
                height={40}
            />
        </Link>
    );
}

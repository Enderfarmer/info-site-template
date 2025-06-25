import { Link } from "react-router-dom";

export default function ArrowBack() {
    return (
        <Link to="/all-content">
            <img
                src="/arrow-left.svg"
                alt="Back to content list"
                width="40"
                height={40}
            />
        </Link>
    );
}

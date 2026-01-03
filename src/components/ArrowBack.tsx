import { Link } from "react-router";
import ArrowLeft from "../assets/arrow-left.svg";
import ArrowLeftWhite from "../assets/arrow-left-white.svg";
import { useCurrentTheme } from "../theme";

export default function ArrowBack() {
    const [theme, _] = useCurrentTheme();
    return (
        <Link to="/all-content">
            <img
                src={theme == "dark" ? ArrowLeftWhite : ArrowLeft}
                alt="Back to content list"
                width={40}
                height={40}
            />
        </Link>
    );
}

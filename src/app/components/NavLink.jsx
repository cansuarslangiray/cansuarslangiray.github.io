import Link from "next/link";
import {useRouter} from "next/navigation";


const NavLink = ({ href, title }) => {
    const router = useRouter();

    const handleClick = (e) => {
        e.preventDefault();
        router.push(href);
        document.getElementById(href.slice(1)).scrollIntoView({ behavior: "smooth" });
    };

    return (
        <a
            href={href}
            onClick={handleClick}
            className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
        >
            {title}
        </a>
    );
};

export default NavLink;
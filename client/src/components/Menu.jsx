import { menuItems } from "../constants";

export default () => {
    return (
        <ul className="flex flex-row gap-x-6">
            {menuItems.map(item => (
                <li key={item.name}>
                    <a className={`text-base font-medium ${item.name === "Resume" ? "text-brand border-brand border-2 rounded py-2 px-4" : ""}`} href={item.url}>{item.name}</a>
                </li>
            ))}
        </ul>
    )
}
export default ({name, url}) => {
    return (
        <a 
            key={name}
            className="bg-brand-dark px-3 text-sm" 
            href={url} 
            target="_blank" 
            rel="noreferrer"
        >
            {name}
        </a>
    )
}
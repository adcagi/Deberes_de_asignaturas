interface CardHeaderProps{
    title:string;
    subtitle?:string;
}

export const CardHeader =({title, subtitle}: CardHeaderProps) =>{
    return (
        <div>
            <h2>{title}</h2>
            {subtitle && <p>{subtitle}</p>}
        </div>
    )
}


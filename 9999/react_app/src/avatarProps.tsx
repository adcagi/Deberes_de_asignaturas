interface AvatarProps {
    src?: string;
    alt: string;
    size?: number;
}

const Avatar = ({ src, alt, size }: AvatarProps) => {
    const getInitials = (name: string) => {
        return name
            .split(" ").map((word) => word[0])
            .join("")
            .toUpperCase();
    }




    return (
        <div style={{
            width: size,
            height: size,
            borderRadius: "50%",
            backgroundColor: "#ccc",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
        }}
        >
            {src ? (
                <img src={src} alt={alt} style={{ width: "100%", height: "100%" }} />
            ) : (
                <span>{getInitials(alt)}</span>
            )}
        </div>
    )


}
export default Avatar;
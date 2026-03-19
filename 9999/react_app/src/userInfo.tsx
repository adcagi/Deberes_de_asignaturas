interface UserInfoProps {
    name: string;
    age: number;
    email: string;
}


const UserInfo = ({name, age, email}: UserInfoProps) =>{

    return(
        <>

            <h3>{name}</h3>
            <p>Edat: {age}</p>
            <p>Email: {email}</p>


        </>
    )
}


export default UserInfo;
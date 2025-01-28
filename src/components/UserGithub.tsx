import logoGithub from "../assets/img/github.svg";

type User={
    name:string,
    login:string,
    avatar_url:string,
    bio:string,
    location:string
  }
type Props = {
    user:User
}

const UserGithub = ({user}: Props) => {
    
  return (
    <div className="container-results">
        <img src={user.avatar_url? user.avatar_url:logoGithub } alt="avatar" />
        <h2>{user.login}</h2>
        <h2>Nombre: {user.name}</h2>
        <p><i>{user.bio? user.bio: "El usuario no tiene bio realizada 🛠️"}</i></p>
        <p>Ubicación: <b>{user.location?`${user.location} 🏠`  :"El usuario no estableció una locación 🚨"}</b></p>
    </div>
  )
}

export default UserGithub
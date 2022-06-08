import Image from "next/image";

export default function UserProfile({ user }) {
  return (
    <div className="box-center">
      <img
        src={user.photoURL}
        alt="profile pic"
        className="card-img-center"
      ></img>
      <p>
        <i>@{user.username}</i>
      </p>
      <h1>{user.displayName}</h1>
    </div>
  );
}

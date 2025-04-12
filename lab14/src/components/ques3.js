import React from "react";

const ProfileImage = ({ imageUrl }) => {
    return (
        <div>
            <img src={imageUrl} alt="Profile" style={{ width: "150px", borderRadius: "50%" }} />
        </div>
    );
};

export default ProfileImage;

UserInfo.js
import React from "react";

const UserInfo = ({ name, email, bio }) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>{bio}</p>
        </div>
    );
};

export default UserInfo;

UserPosts.js
import React from "react";

const UserPosts = ({ posts }) => {
    return (
        <div>
            <h3>User Posts</h3>
            <ul>
                {posts.map((post, index) => (
                    <li key={index}>{post}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserPosts;

ProfilePage.js
import React from "react";
import ProfileImage from "./ProfileImage";
import UserInfo from "./UserInfo";
import UserPosts from "./UserPosts";
import profileImage from "./assets/profile.jpg"


const ProfilePage = () => {
    const user = profileImage,
        imageUrl: "https://via.placeholder.com/150", // Placeholder image
        name: "John Doe",
        email: "johndoe@example.com",
        bio: "Software developer, tech enthusiast, and blogger.",
        posts: ["React is awesome!", "Learning new things every day!", "Happy coding!"]
    };

    return (
        <div style={{ textAlign: "center", padding: "20px", border: "1px solid #ccc", width: "50%", margin: "auto" }}>
            <ProfileImage imageUrl={user.imageUrl} />
            <UserInfo name={user.name} email={user.email} bio={user.bio} />
            <UserPosts posts={user.posts} />
        </div>
    );
};

export default ProfilePage;

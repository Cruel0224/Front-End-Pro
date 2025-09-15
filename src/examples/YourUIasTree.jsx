function Avatar({ user }) {
    return <img src={user.avatarUrl} alt={user.name} width={50} height={50} />;
}

function UserInfo({ user }) {
    return (
        <div>
            <Avatar user={user} />
            <div>{user.name}</div>
        </div>
    );
}

function Comment({ author, text }) {
    return (
        <div className="comment">
            <UserInfo user={author} />
            <div>{text}</div>
        </div>
    );
}

export default function YourUIasTree() {
    const comment = {
        text: "This is an example comment.",
        author: {
            name: "Lin Lanying",
            avatarUrl: "https://i.imgur.com/1bX5QH6.jpg"
        }
    };

    return (
        <div>
            <h2>Your UI as a Tree Example</h2>
            <Comment author={comment.author} text={comment.text} />
        </div>
    );
}

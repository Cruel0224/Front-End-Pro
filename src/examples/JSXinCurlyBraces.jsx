const user = {
    name: "Lin Lanying",
    imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
    imageSize: 90
};

export default function JSXinCurlyBraces() {
    return (
        <div>
            <h2>JavaScript in JSX with Curly Braces Example</h2>
            <h3>{user.name}</h3>
            <img
                className="avatar"
                src={user.imageUrl}
                alt={"Photo of " + user.name}
                style={{
                    width: user.imageSize,
                    height: user.imageSize
                }}
            />
        </div>
    );
}

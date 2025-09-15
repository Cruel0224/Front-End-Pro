function Avatar({ person, size }) {
    return (
        <img
            className="avatar"
            src={person.imageUrl}
            alt={person.name}
            width={size}
            height={size}
        />
    );
}

export default function PassingProps() {
    return (
        <div>
            <h2>Passing Props Example</h2>
            <Avatar
                size={100}
                person={{
                    name: "Lin Lanying",
                    imageUrl: "https://i.imgur.com/1bX5QH6.jpg"
                }}
            />
            <Avatar
                size={80}
                person={{
                    name: "Alan L. Hart",
                    imageUrl: "https://i.imgur.com/QIrZWGIs.jpg"
                }}
            />
        </div>
    );
}

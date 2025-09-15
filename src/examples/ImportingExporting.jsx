function Profile() {
    return (
        <img
            src="https://i.imgur.com/QIrZWGIs.jpg"
            alt="Alan L. Hart"
            width={100}
            height={100}
        />
    );
}

export default function ImportingExporting() {
    return (
        <div>
            <h2>Importing and Exporting Components Example</h2>
            <Profile />
            <Profile />
            <Profile />
        </div>
    );
}

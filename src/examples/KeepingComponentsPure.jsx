export default function KeepingComponentsPure() {
    function formatName(user) {
        return user.firstName + " " + user.lastName;
    }

    const user = {
        firstName: "Lin",
        lastName: "Lanying"
    };

    return (
        <div>
            <h2>Keeping Components Pure Example</h2>
            <p>Hello, {formatName(user)}!</p>
        </div>
    );
}

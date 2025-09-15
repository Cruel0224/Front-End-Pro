export default function RenderingLists() {
    const numbers = [1, 2, 3, 4, 5];

    return (
        <div>
            <h2>Rendering Lists Example</h2>
            <ul>
                {numbers.map((number) => (
                    <li key={number}>Number: {number}</li>
                ))}
            </ul>
        </div>
    );
}

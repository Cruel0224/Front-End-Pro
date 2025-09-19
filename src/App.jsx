import { useState } from "react";

export default function App() {
    const emojiList = ["😍", "😂", "😎"];
    const [votes, setVotes] = useState(
        emojiList.reduce((acc, emoji) => ({ ...acc, [emoji]: 0 }), {})
    );
    const [winner, setWinner] = useState(null);

    const handleVote = (emoji) => {
        setVotes((prev) => ({
            ...prev,
            [emoji]: prev[emoji] + 1,
        }));
    };

    const showResults = () => {
        let maxVotes = Math.max(...Object.values(votes));
        if (maxVotes === 0) {
            setWinner("Ще ніхто не проголосував!");
            return;
        }

        // шукаємо всі емодзі з однаковим максимальним результатом
        let winners = Object.entries(votes)
            .filter(([, count]) => count === maxVotes)
            .map(([emoji]) => emoji);

        if (winners.length === 1) {
            setWinner(`Переміг: ${winners[0]} (${maxVotes} голосів)`);
        } else {
            setWinner(
                `Нічия! Переможці: ${winners.join(" ")} (${maxVotes} голосів)`
            );
        }
    };

    return (
        <div style={{ textAlign: "center", marginTop: "40px" }}>
            <h2>Голосування за смайлики 😍😂😎</h2>
            <div>
                {emojiList.map((emoji) => (
                    <div
                        key={emoji}
                        onClick={() => handleVote(emoji)}
                        style={{
                            display: "inline-block",
                            margin: "15px",
                            cursor: "pointer",
                            fontSize: "40px",
                        }}
                    >
                        {emoji}
                        <div style={{ fontSize: "18px", marginTop: "5px" }}>
                            {votes[emoji]}
                        </div>
                    </div>
                ))}
            </div>

            <button
                onClick={showResults}
                style={{ marginTop: "20px", padding: "10px 20px", fontSize: "18px" }}
            >
                Show Results
            </button>

            {winner && (
                <div style={{ marginTop: "30px", fontSize: "30px" }}>{winner}</div>
            )}
        </div>
    );
}

export default function Card({ card }: { card?: any }) {
    return (
        <div className="bg-rose-500 text-2xl h-20 w-20">
            Cards
            {card}
        </div>
    )
}
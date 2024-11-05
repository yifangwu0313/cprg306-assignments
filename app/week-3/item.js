export default function Item({ name, quantity, category }) {
  return (
    <ul className="bg-yellow-500 m-2 w-[30%]  pl-3 py-2 rounded">
      <li>
        <h1 className="text-xl font-bold">{name}</h1>
        <p>
          Buy {quantity} in {category}
        </p>
      </li>
    </ul>
  );
}

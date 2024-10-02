export default function Button({onClick,disabled,children}) {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray-300 disabled:bg-gray-600" 
    onClick={onClick}
    disabled={disabled}
    >
      {children}
    </button>
  );
}
export default function Button({onClick,disabled,children}) {
  return (
    <button type="button"
     className="bg-blue-500 text-white font-semibold rounded -lg shadow-md hover:bg-blue-700 px-4 py-2 focus:outline-none focus:ring-2
     disabled:bg-gray-400 focus:ring-blue-400 focus:ring-opacity-75"  
    onClick={onClick}
    disabled={disabled}
    >
      {children}
    </button>
  );
}
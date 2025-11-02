// src/components/common/Button.jsx (A good place for common components)

function Button({ name, onClick, type = "button" }) {
    return (
        <button
            type={type}
            onClick={onClick} 
            className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-6 rounded transition duration-200"
        >
            {name}
        </button>
    );
}

export default Button;


function FormInput({ label, id, type, name, value, onChange }) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-gray-700 font-medium mb-2">
        {label}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}  // ✅ must exist
        className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
      />
    </div>
  );
}

export default FormInput;
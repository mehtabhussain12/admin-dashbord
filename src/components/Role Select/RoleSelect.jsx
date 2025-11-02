
function RoleSelect() {
    return (
        <div className="flex flex-col">
            <label 
                htmlFor="role"
                className="mb-1 text-sm font-medium text-gray-700"
            >
                Role
            </label>
            <select 
                id="role" 
                name="role" 
                required
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
                <option value="admin">Admin</option>
                <option value="user">User</option>
            </select>
        </div>
    );
}

export default RoleSelect;


import { Link } from 'react-router-dom';

function AuthLink({ text, to }) {
    return (
        <Link 
            to={to} 
            className="text-sm text-blue-600 hover:text-blue-800 hover:underline transition duration-150"
        >
            {text}
        </Link>
    );
}

export default AuthLink;
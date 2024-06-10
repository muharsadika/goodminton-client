import PropsType from 'prop-types';

AuthInputForm.propTypes = {
    label: PropsType.string,
    type: PropsType.string,
    id: PropsType.string,
    name: PropsType.string,
    value: PropsType.string,
    onChange: PropsType.func,
};

function AuthInputForm({ label, type, id, name, value, onChange }) {
    return (
        <div className="mb-4">
            <label htmlFor={id} className="block text-gray-600">
                {label}
            </label>
            <input
                type={type}
                id={id}
                name={name}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                autoComplete="off"
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

export default AuthInputForm;

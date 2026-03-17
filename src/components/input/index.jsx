

export function Input({placeholder, value, onChange, type="text"}){
    return(
        <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full h-11 px-4 bg-[#F8F8F8] rounded-lg border border-black focus:outline-none text-sm"
        />
    )
}
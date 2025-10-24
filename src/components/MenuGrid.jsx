export default function MenuGrid({ options, onSelect }) {
    return (
        <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Selecciona qué deseas calcular:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {options.map((option) => {
            const Icon = option.icon;
            return (
                <button
                key={option.id}
                onClick={() => onSelect(option)}
                className="flex items-center gap-4 p-6 bg-linear-to-r from-purple-50 to-violet-50 hover:from-purple-100 hover:to-violet-100 rounded-xl border-2 border-purple-200 hover:border-purple-400 transition transform hover:scale-105"
                >
                <div className="bg-[#470985] p-3 rounded-lg">
                    <Icon className="w-6 h-6 text-white" />
                </div>  
                <span className="text-lg font-semibold text-gray-800">{option.name}</span>
                </button>
            );
            })}
        </div>
        </div>
    );
}

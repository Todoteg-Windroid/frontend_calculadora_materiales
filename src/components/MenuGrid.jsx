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
                className="flex items-center gap-4 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 rounded-xl border-2 border-blue-200 hover:border-blue-400 transition transform hover:scale-105"
                >
                <div className="bg-blue-600 p-3 rounded-lg">
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

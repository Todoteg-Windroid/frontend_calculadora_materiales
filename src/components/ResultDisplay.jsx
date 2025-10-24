export default function ResultDisplay({ result, onReset }) {
    const formatMaterial = (key, value) => {
        const labels = {
        cemento_kg: 'Cemento',
        arena_m3: 'Arena',
        piedra_m2: 'Piedra',
        piedra_m3: 'Piedra',
        ladrillos: 'Ladrillos',
        hierro_8_m: 'Hierro del 8',
        hierro_4_m: 'Hierro del 4',
        hierro_10_m: 'Hierro del 10',
        hierro_6_m: 'Hierro del 6',
        pintura_litros: 'Pintura',
        superficie_m2: 'Superficie necesaria',
        superficie_iluminacion_m2: 'Superficie de iluminación natural',
        };

        const units = {
        cemento_kg: 'kg',
        arena_m3: 'm³',
        piedra_m2: 'm²',
        piedra_m3: 'm³',
        ladrillos: 'unidades',
        hierro_8_m: 'metros',
        hierro_4_m: 'metros',
        hierro_10_m: 'metros',
        hierro_6_m: 'metros',
        pintura_litros: 'litros',
        superficie_m2: 'm²',
        superficie_iluminacion_m2: 'm²',
        };

        return {
        label: labels[key] || key,
        value: typeof value === 'number' ? value.toFixed(2) : value,
        unit: units[key] || '',
        };
    };

    return (
        <div>
        <div className="bg-linear-to-r from-purple-50 to-violet-50 border-2 border-purple-300 rounded-xl p-6 mb-6">
            <h2 className="text-2xl font-bold text-[#470985] mb-4">✓ Resultado del Cálculo</h2>
            <div className="text-lg text-gray-700 mb-2">
            <span className="font-semibold">Tipo:</span> {result.type}
            </div>
            {result.superficie && (
            <div className="text-lg text-gray-700 mb-2">
                <span className="font-semibold">Superficie:</span> {result.superficie.toFixed(2)} m²
            </div>
            )}
            {result.volumen && (
            <div className="text-lg text-gray-700">
                <span className="font-semibold">Volumen:</span> {result.volumen.toFixed(2)} m³
            </div>
            )}
        </div>

        <div className="bg-white border-2 border-purple-200 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold text-[#470985] mb-4">Materiales Necesarios</h3>
            <div className="space-y-3">
            {Object.entries(result.materials).map(([key, value]) => {
                const material = formatMaterial(key, value);
                return (
                <div key={key} className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                    <span className="font-medium text-gray-700">{material.label}</span>
                    <span className="text-[#470985] font-bold">
                    {material.value} {material.unit}
                    </span>
                </div>
                );
            })}
            </div>
        </div>

        <button
            onClick={onReset}
            className="w-full bg-[#757F9a] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#d7dde8] hover:text-gray-900 transition"
        >
            Realizar otro cálculo
        </button>
        </div>
    );
}
import React, { useState } from 'react';
export default function CalculationForm({ option, onCalculate, loading }) {
    const [formData, setFormData] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        onCalculate(formData);
    };

    const renderFields = () => {
        switch (option.endpoint) {
        case 'muro':
            return (
            <>
                <label className="block mb-4">
                <span className="text-gray-700 font-medium">Espesor del muro (cm):</span>
                <select
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3"
                    onChange={(e) => setFormData({ ...formData, espesor: parseInt(e.target.value) })}
                    required
                >
                    <option value="">Seleccionar</option>
                    <option value="20">20 cm</option>
                    <option value="30">30 cm</option>
                </select>
                </label>
                <label className="block mb-4">
                <span className="text-gray-700 font-medium">Largo (m):</span>
                <input
                    type="number"
                    step="0.01"
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3"
                    onChange={(e) => setFormData({ ...formData, largo: parseFloat(e.target.value) })}
                    required
                />
                </label>
                <label className="block mb-4">
                <span className="text-gray-700 font-medium">Alto (m):</span>
                <input
                    type="number"
                    step="0.01"
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3"
                    onChange={(e) => setFormData({ ...formData, alto: parseFloat(e.target.value) })}
                    required
                />
                </label>
            </>
            );
        case 'viga':
        case 'columna':
            return (
            <label className="block mb-4">
                <span className="text-gray-700 font-medium">Largo (m):</span>
                <input
                type="number"
                step="0.01"
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3"
                onChange={(e) => setFormData({ ...formData, largo: parseFloat(e.target.value) })}
                required
                />
            </label>
            );
        case 'contrapiso':
        case 'techo':
            return (
            <>
                <label className="block mb-4">
                <span className="text-gray-700 font-medium">Espesor (m):</span>
                <input
                    type="number"
                    step="0.01"
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3"
                    onChange={(e) => setFormData({ ...formData, espesor: parseFloat(e.target.value) })}
                    required
                />
                </label>
                <label className="block mb-4">
                <span className="text-gray-700 font-medium">Ancho (m):</span>
                <input
                    type="number"
                    step="0.01"
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3"
                    onChange={(e) => setFormData({ ...formData, ancho: parseFloat(e.target.value) })}
                    required
                />
                </label>
                <label className="block mb-4">
                <span className="text-gray-700 font-medium">Largo (m):</span>
                <input
                    type="number"
                    step="0.01"
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3"
                    onChange={(e) => setFormData({ ...formData, largo: parseFloat(e.target.value) })}
                    required
                />
                </label>
            </>
            );
        case 'piso':
            return (
            <>
                <label className="block mb-4">
                <span className="text-gray-700 font-medium">Ancho (m):</span>
                <input
                    type="number"
                    step="0.01"
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3"
                    onChange={(e) => setFormData({ ...formData, ancho: parseFloat(e.target.value) })}
                    required
                />
                </label>
                <label className="block mb-4">
                <span className="text-gray-700 font-medium">Largo (m):</span>
                <input
                    type="number"
                    step="0.01"
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3"
                    onChange={(e) => setFormData({ ...formData, largo: parseFloat(e.target.value) })}
                    required
                />
                </label>
            </>
            );
        case 'pintura':
        case 'iluminacion':
            return (
            <label className="block mb-4">
                <span className="text-gray-700 font-medium">Superficie (m²):</span>
                <input
                type="number"
                step="0.01"
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3"
                onChange={(e) => setFormData({ ...formData, superficie: parseFloat(e.target.value) })}
                required
                />
            </label>
            );
        default:
            return null;
        }
    };

    return (
        <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Calcular: {option.name}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
            {renderFields()}
            <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
            {loading ? 'Calculando...' : 'Calcular'}
            </button>
        </form>
        </div>
    );
}
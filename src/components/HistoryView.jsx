import { useState } from 'react';
import {  ChevronRight, Building2 } from 'lucide-react';
export default function HistoryView({ history, loading }) {
    const [expandedId, setExpandedId] = useState(null);

    if (loading) {
        return (
        <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Cargando historial...</p>
        </div>
        );
    }

    if (history.length === 0) {
        return (
        <div className="text-center py-12">
            <History className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No hay cálculos guardados</h3>
            <p className="text-gray-500">Realiza tu primer cálculo para ver el historial</p>
        </div>
        );
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
        }).format(date);
    };

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Historial de Cálculos ({history.length})
        </h2>
        <div className="space-y-4">
            {history.map((calc) => {
            const isExpanded = expandedId === calc.id;
            let results = null;
            try {
                results = JSON.parse(calc.results);
            } catch (e) {
                console.error('Error parsing results:', e);
            }

            return (
                <div
                key={calc.id}
                className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-blue-300 transition"
                >
                <button
                    onClick={() => toggleExpand(calc.id)}
                    className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition"
                >
                    <div className="flex items-center gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                        <Building2 className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="text-left">
                        <h3 className="font-semibold text-gray-800">{calc.calculationType}</h3>
                        <p className="text-sm text-gray-500">{formatDate(calc.createdAt)}</p>
                    </div>
                    </div>
                    <ChevronRight
                    className={`w-5 h-5 text-gray-400 transition-transform ${
                        isExpanded ? 'rotate-90' : ''
                    }`}
                    />
                </button>

                {isExpanded && results && (
                    <div className="border-t-2 border-gray-200 p-4 bg-gray-50">
                    <div className="mb-4">
                        <h4 className="font-semibold text-gray-700 mb-2">Tipo: {results.type}</h4>
                        {results.superficie && (
                        <p className="text-sm text-gray-600">
                            Superficie: {results.superficie.toFixed(2)} m²
                        </p>
                        )}
                        {results.volumen && (
                        <p className="text-sm text-gray-600">
                            Volumen: {results.volumen.toFixed(2)} m³
                        </p>
                        )}
                    </div>

                    <div>
                        <h4 className="font-semibold text-gray-700 mb-2">Materiales:</h4>
                        <div className="space-y-2">
                        {Object.entries(results.materials).map(([key, value]) => (
                            <div
                            key={key}
                            className="flex justify-between items-center p-2 bg-white rounded-lg text-sm"
                            >
                            <span className="text-gray-600">{key.replace(/_/g, ' ')}</span>
                            <span className="font-semibold text-blue-600">
                                {typeof value === 'number' ? value.toFixed(2) : value}
                            </span>
                            </div>
                        ))}
                        </div>
                    </div>
                    </div>
                )}
                </div>
            );
            })}
        </div>
        </div>
    );
}
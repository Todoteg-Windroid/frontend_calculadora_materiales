import React, { useState } from 'react';
import { Building2, Columns, Hammer, Home, Lightbulb, PaintBucket, X, History } from 'lucide-react';
import MenuGrid from './components/MenuGrid.jsx';
import CalculationForm from './components/CalculationForm.jsx';
import ResultDisplay from './components/ResultDisplay.jsx';
import HistoryView from './components/HistoryView.jsx';

const API_URL = 'http://localhost:8082/api/calculations';

export default function ConstructionCalculator() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [history, setHistory] = useState([]);
  const [loadingHistory, setLoadingHistory] = useState(false);

  const menuOptions = [
    { id: 1, name: 'Muro de ladrillo', icon: Building2, endpoint: 'muro' },
    { id: 2, name: 'Viga de hormigón', icon: Columns, endpoint: 'viga' },
    { id: 3, name: 'Columna de hormigón', icon: Columns, endpoint: 'columna' },
    { id: 4, name: 'Contrapisos', icon: Home, endpoint: 'contrapiso' },
    { id: 5, name: 'Techo', icon: Home, endpoint: 'techo' },
    { id: 6, name: 'Pisos', icon: Home, endpoint: 'piso' },
    { id: 7, name: 'Pintura', icon: PaintBucket, endpoint: 'pintura' },
    { id: 8, name: 'Iluminación', icon: Lightbulb, endpoint: 'iluminacion' },
  ];

  const handleCalculate = async (data) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/${selectedOption.endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      setResult(result);
    } catch (error) {
      alert('Error al realizar el cálculo. Asegúrate de que el backend esté corriendo.');
    } finally {
      setLoading(false);
    }
  };

  const resetCalculator = () => {
    setSelectedOption(null);
    setResult(null);
  };

  const fetchHistory = async () => {
    setLoadingHistory(true);
    try {
      const response = await fetch(`${API_URL}/history`);
      const data = await response.json();
      setHistory(data);
      setShowHistory(true);
    } catch (error) {
      alert('Error al cargar el historial. Asegúrate de que el backend esté corriendo.');
    } finally {
      setLoadingHistory(false);
    }
  };

  const closeHistory = () => {
    setShowHistory(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Hammer className="w-8 h-8" />
                <h1 className="text-3xl font-bold">Calculadora de Construcción</h1>
              </div>
              <div className="flex items-center gap-2">
                {!showHistory && !selectedOption && (
                  <button
                    onClick={fetchHistory}
                    disabled={loadingHistory}
                    className="bg-white/20 hover:bg-white/30 rounded-lg px-4 py-2 transition flex items-center gap-2"
                  >
                    <History className="w-5 h-5" />
                    <span className="hidden sm:inline">Historial</span>
                  </button>
                )}
                {(selectedOption || showHistory) && (
                  <button
                    onClick={() => {
                      resetCalculator();
                      closeHistory();
                    }}
                    className="bg-white/20 hover:bg-white/30 rounded-lg p-2 transition"
                  >
                    <X className="w-6 h-6" />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="p-8">
            {showHistory ? (
              <HistoryView history={history} loading={loadingHistory} />
            ) : !selectedOption ? (
              <MenuGrid options={menuOptions} onSelect={setSelectedOption} />
            ) : !result ? (
              <CalculationForm option={selectedOption} onCalculate={handleCalculate} loading={loading} />
            ) : (
              <ResultDisplay result={result} onReset={resetCalculator} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
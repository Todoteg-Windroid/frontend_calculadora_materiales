import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-linear-to-r from-green-500 to-green-700 p-6 text-white">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left">
          <p className="font-semibold">Nombre de los integrantes:</p>
          <ul className="mt-2 space-y-1">
            <li>Sergio Andres Castro Velasquez</li>
            <li>Juan Carlos Restrepo Penagos</li>
            <li>Cristian Steven Casanova Anacona</li>
            <li>Ricardo Castañeda Lozada</li>
          </ul>
        </div>

        <div className="mt-4 md:mt-0 text-sm text-center">
          Derechos de autor @2025
        </div>
      </div>
    </footer>
  )
}

import "../globals.css";
import React from 'react';

export default function ContactForm() {
    return (
        <div className="bg-gray-900 min-h-screen flex justify-center items-center">
            <div className="bg-gray-100 p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">Formulario de Contacto</h1>
                <form>
                    <div className="mb-6">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
                        <input type="text" id="name" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-800 text-white" placeholder="Nombre" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo electrónico</label>
                        <input type="email" id="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-800 text-white" placeholder="Correo electrónico" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensaje</label>
                        <textarea id="message" rows={4} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-800 text-white" placeholder="Escribe aquí tu mensaje"></textarea>

                    </div>
                    <div>
                        <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Enviar mensaje</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
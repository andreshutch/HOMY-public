import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { MapPin, Search } from "lucide-react";

export default function HomyHome() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <nav className="w-full flex justify-between items-center px-6 py-4 shadow-sm fixed top-0 bg-white z-10">
        <div className="text-xl font-bold">findyourhomy.com</div>
        <div className="space-x-6 hidden md:flex">
          <a href="#" className="hover:text-blue-600">Inicio</a>
          <a href="#" className="hover:text-blue-600">Propiedades</a>
          <a href="#" className="hover:text-blue-600">Nosotros</a>
          <a href="#" className="hover:text-blue-600">Contacto</a>
        </div>
        <Button className="md:hidden">Menu</Button>
      </nav>
      <header className="flex flex-col items-center text-center py-28 px-4 bg-gray-50">
        <h1 className="text-5xl font-bold mb-4 max-w-2xl">Encuentra tu hogar ideal en Panamá con Homy</h1>
        <p className="text-gray-600 max-w-xl">Explora propiedades modernas, haz comparaciones y contacta a agentes de manera rápida y sencilla.</p>
      </header>
      <div className="flex justify-center py-4 px-4">
        <div className="flex w-full max-w-2xl items-center space-x-2">
          <Input placeholder="Buscar por zona, ciudad o tipo de propiedad" className="flex-1" />
          <Button variant="default">
            <Search className="w-5 h-5" />
          </Button>
        </div>
      </div>
      <section className="py-12 px-4">
        <h2 className="text-3xl font-semibold text-center mb-10">Propiedades destacadas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((_, idx) => (
            <Card key={idx} className="rounded-2xl shadow-md hover:shadow-xl transition">
              <img
                src={`https://source.unsplash.com/random/400x300?house,panama,${idx}`}
                alt="Casa en venta"
                className="rounded-t-2xl w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-bold mb-1">Casa moderna en Clayton</h3>
                <p className="text-sm text-gray-600 flex items-center">
                  <MapPin className="w-4 h-4 mr-1" /> Ciudad de Panamá
                </p>
                <p className="text-xl font-semibold text-primary mt-2">$350,000</p>
                <Button className="mt-4 w-full">Ver detalles</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <section className="bg-gray-100 py-12 px-4 text-center">
        <h2 className="text-2xl font-semibold mb-4">¿Listo para encontrar tu hogar?</h2>
        <p className="text-gray-600 mb-6">Déjanos tus datos y te ayudaremos a encontrar la propiedad perfecta.</p>
        <form className="max-w-xl mx-auto space-y-4">
          <Input type="text" placeholder="Nombre completo" required />
          <Input type="email" placeholder="Correo electrónico" required />
          <Input type="tel" placeholder="Teléfono" required />
          <Button type="submit" className="w-full">Enviar</Button>
        </form>
      </section>
      <footer className="text-center text-gray-500 text-sm py-6 border-t">
        © {new Date().getFullYear()} findyourhomy.com – Todos los derechos reservados
      </footer>
    </div>
  );
}

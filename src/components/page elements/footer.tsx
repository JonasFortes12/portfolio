

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-blue-500 to-violet-500 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Dev_ Jonas Fortes. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
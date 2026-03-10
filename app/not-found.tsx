import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <h1 className="text-6xl font-extrabold text-accent mb-4">404</h1>
      <p className="text-xl text-muted-foreground mb-8">Página no encontrada</p>
      <Link
        href="/"
        className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors"
      >
        Volver al inicio
      </Link>
    </div>
  );
}

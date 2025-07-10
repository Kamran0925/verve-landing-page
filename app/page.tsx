import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black">
      <div className="text-center space-y-5 max-w-2xl z-10">
        <p
          className="py-1 px-2  backdrop-blur-sm font-light rounded-full
        text-white inline-block"
        >
          Join 7000+ users
          <div className="space-y-3">
            <h1
              className="text-7xl tracking-tight bg-clip-text  bg-gradient-to-r from-pink-500 via-purple-400 to-blue-500 
            text-transparent font-semibold h-20"
            >
              Modern UI Library
            </h1>
            <h3
              className="text-7xl tracking-tight bg-clip-text  bg-gradient-to-r from-purple-500 via-pink-400 to-blue-500 
            text-transparent font-semibold h-20"
            >
              For Web Developers
            </h3>
            <p className="text-gray-400 text-lg text-pretty">
              100+ free and open source modern UI components made with React,
              Tailwind CSS and Framer Motion. Perfect for easily designing
              modern webapps.
            </p>
            <div className="space-x-3">
              <Button variant="default" className="rounded-lg">
                Browse Components
              </Button>
              <Button variant="secondary" className="rounded-lg">
                Unlock All Access
              </Button>
            </div>
          </div>
        </p>
      </div>
    </div>
  );
}

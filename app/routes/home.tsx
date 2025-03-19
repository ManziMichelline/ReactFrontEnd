import type { Route } from "./+types/house"; // Ensure this file exists
import { Welcome } from "./house"; // Ensure house.tsx exports Welcome

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <Welcome />;
}

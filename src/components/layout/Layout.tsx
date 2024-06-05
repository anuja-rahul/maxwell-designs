import Header from "./header/Header";
import "./index.scss";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="">
      <Header />
      {children}
      footer
    </main>
  );
}

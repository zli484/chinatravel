import { Layout } from "@/components/tailwind-template/Layout";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}

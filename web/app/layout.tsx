import "@/styles/globals.scss";

export const metadata = {
  title: "EcoInvest",
  description: "Smart investing platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
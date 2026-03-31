export const metadata = {
  title: "Aguilar Media",
  description: "Marketing Agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

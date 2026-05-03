import './globals.css';

export const metadata = {
  title: 'Election Campaign Assistant',
  description: 'An interactive guide to help you understand the election process.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

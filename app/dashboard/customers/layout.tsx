export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <p>Test nested layout</p>
      <div className="grow py-6">{children}</div>
    </div>
  );
}

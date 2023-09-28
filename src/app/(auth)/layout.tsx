export default function AuthLayout(props: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        {props.children}
      </main>
    </div>
  );
}

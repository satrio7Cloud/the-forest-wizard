import HomeBtn from "@/app/components/HomeButton";

export default function SubPagesLayout({ children }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-8 xs:px-16 lg:px-32 text-white  py-20 ">
      <HomeBtn />
      {children}
    </main>
  );
}

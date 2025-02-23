import Link from "next/link";

const roots = [
    { id: 1, url: "/", name: "ホーム", color: ""},
    { id: 2, url: "/member", name: "メンバー", color: ""},
    { id: 3, url: "/memory", name: "活動したこと", color: ""}
];    

export default function TopBar() {
    return(
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          {
            roots.map((root) => {
                return (
                <Link className={`${root.color} px-5 text-center hover:font
                -extrabold`} href={root.url} key={root.id}>{root.name}</Link>
                )
            })
          }
        </div>
    );
}
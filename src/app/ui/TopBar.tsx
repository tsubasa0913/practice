import Link from "next/link";

const roots = [
    { id: 1, url: "/", name: "ホーム", color: ""},
    { id: 2, url: "/member", name: "メンバー", color: ""},
    { id: 3, url: "/memory", name: "活動したこと", color: ""}
];    

export default function TopBar() {
    return(
        <div className="text-center">
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
import { useRouter } from "next/navigation";

export default function withAuth(Component: any) {
    
    return (props: any) => {
        if (typeof window !== "undefined") {
            const router = useRouter();
            const user = sessionStorage.getItem("user");

            if (!user) {
                router.push("/login");
                return null;
            }
            return <Component {...props} />
        }

        return null;
    }

}
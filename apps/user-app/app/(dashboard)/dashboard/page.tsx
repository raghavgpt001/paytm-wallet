import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";

export default async function() {
    const session = await getServerSession(authOptions);
    
    return <div className="w-screen">
        <div className="text-4xl text-[#6a51a6] pt-8 mb-8 font-bold">
            Hi, {session?.user?.name}   
        </div>
    </div>
}
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import { SendCard } from "../../../components/SendCard";

export default async function() {
    const session = await getServerSession(authOptions);

    return(
        <div className="container mx-auto px-4 py-8 flex justify-center">
            <div className="w-3/4 bg-white rounded-lg shadow-lg p-8">
                <div >
                    <SendCard/>
                </div>
            </div>
        </div>
    )
}
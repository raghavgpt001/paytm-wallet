import { getServerSession } from "next-auth";
import prisma from "@repo/db/client";
import { authOptions } from "../../lib/auth";
import { P2PTransactions } from "../../../components/P2PTransactions";


async function getP2PTransactions() {
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id

    if(!userId) return []
    const transactions = await prisma.p2pTransfer.findMany({
        where: {
            OR: [
                { fromUserId: Number(userId) }, // Condition 1: fromUserId matches session user id
                { toUserId: Number(userId) }    // Condition 2: toUserId matches session user id
            ]
        }
    });

    return transactions.map(t => ({
        time: t.timestamp,
        amount: t.amount,
        sender: t.fromUserId,
        receiver: t.toUserId
    }))
}


export default async function() {
    
    const transactions = await getP2PTransactions();
    const session = await getServerSession(authOptions);
    const userId = Number(session?.user?.id)

    return(<div className="container mx-auto px-4 py-8 flex justify-center">
        <div className="w-3/4 bg-white rounded-lg shadow-lg p-8">
            <div >
                <P2PTransactions transactions={transactions} userId={userId}/>
            </div>
        </div>
    </div>
)
}
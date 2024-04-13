import { AddMoney } from "../../../components/AddMoneyCard";

import { OnRampTransactions } from "../../../components/OnRampTransactions";
import { getServerSession } from "next-auth";
import prisma from "@repo/db/client";
import { authOptions } from "../../lib/auth";

async function getOnRampTransactions() {
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id

    if(!userId) return []
    const txns = await prisma.onRampTransaction.findMany({
        where: {
            userId: Number(userId)
        }
    });
    return txns.map(t => ({
        time: t.startTime,
        amount: t.amount,
        status: t.status,
        provider: t.provider
    }))
}

export default async function() {
    const transactions = await getOnRampTransactions();

    return(
            <div className="container mx-auto px-4 py-8 flex justify-center items-center">
                <div className="w-3/4 bg-white rounded-lg shadow-lg p-8">
                    <div >
                        <AddMoney />
                    </div>
                </div>
                <div className="w-1/4 ml-8">
                    <div >
                        <OnRampTransactions transactions={transactions} />
                    </div>
                </div>
            </div>
    )    
}
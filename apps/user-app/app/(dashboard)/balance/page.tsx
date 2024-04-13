import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import prisma from "@repo/db/client";
import { BalanceCard } from "../../../components/BalanceCard";


async function getBalance() {
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id

    if(!userId) return {
        amount: 0,
        locked: 0
    }
    const balance = await prisma.balance.findFirst({
        where: {
            userId: Number(session?.user?.id)
        }
    });
    return {
        amount: balance?.amount || 0,
        locked: balance?.locked || 0
    }
}

export default async function() {
    const balance = await getBalance();

    return(<div className="container mx-auto px-4 py-8 flex justify-center">
            <div className="w-3/4 bg-white rounded-lg shadow-lg p-8">
                <div >
                    <BalanceCard amount={balance.amount} locked={balance.locked} />
                </div>
            </div>
        </div>
    )   
}
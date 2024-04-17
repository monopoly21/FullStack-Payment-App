import { SendCard } from "../../../components/SendCard";
import { p2pDisplay } from "../../../components/p2pDisplay";
// import { p2pTransfer } from "../../lib/actions/p2pTransfer";
import { authOptions } from "../../lib/auth";
import { getServerSession } from "next-auth";
import prisma from "@repo/db/client";

import { p2pTransfer } from "../../lib/actions/p2pTransfer"; // Import the correct module

// async function getTransactions() {
//     const session = await getServerSession(authOptions);
//     const txns = await p2pTransfer.findMany({ // Update the type of p2pTransfer
//         where: {
//             fromUserId: Number(session?.user?.id)
//         }
//     });
//     return txns.map(t => ({
//         time: t.startTime,
//         amount: t.amount,
//         from: t.fromUserId,
//         to: t.toUserId
//     }));
// }

export default function MyComponent() {
    return (
        <div className="w-full">
            <SendCard />
            {/* <p2pDisplay transactions={getTransactions()} /> */}
        </div>
    );
}

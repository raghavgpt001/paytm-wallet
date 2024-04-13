"use client"
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { TextInput } from "@repo/ui/textinput";
import { useState } from "react";
import { p2pTransfer } from "../app/lib/actions/p2pTransfer";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function SendCard() {
    const [number, setNumber] = useState("");
    const [amount, setAmount] = useState("");

    return(
            <Card title="Transfer">
                <div className="min-w-72 pt-2">
                    <TextInput placeholder={"Phone Number"} label="Phone Number" onChange={(value) => {
                        setNumber(value)
                    }} />
                    <TextInput placeholder={"Amount"} label="Amount (₹)" onChange={(value) => {
                        setAmount(value)
                    }} />
                    <div className="pt-4 flex justify-center">
                        <Button onClick={async () => {
                            try{
                                const res = await p2pTransfer(number, Number(amount) * 100)
                            } catch(e: any){
                                toast.error('Error occurred: ' + e.message);
                            }
                        }}>Send</Button>
                    </div>
                    <div>
                        <ToastContainer />
                    </div>
                </div>
            </Card>
    )
}
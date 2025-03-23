"use client"

import { CopilotSidebar } from "@copilotkit/react-ui";
import { useCopilotAction } from "@copilotkit/react-core";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
} from "recharts";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";



export default function DashboardPage() {
    const { data: session } = useSession();
    
    // State for modifiable financial data
    const [totalBalance, setTotalBalance] = useState(45231.89);
    const [investments, setInvestments] = useState(32123.45);
    const [monthlySavings, setMonthlySavings] = useState(2400.00);
    const [riskScore, setRiskScore] = useState(7.2);

    //Format function to display numbers with commas
    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    };

    const formatRisk = (value) => {
        return value.toFixed(1);
    };

    // State for chart data
    const [chartData, setChartData] = useState([
        { name: "Jan", value: 4000 },
        { name: "Feb", value: 3000 },
        { name: "Mar", value: 2000 },
        { name: "Apr", value: 2780 },
        { name: "May", value: 1890 },
        { name: "Jun", value: 2390 },
    ]);

    // State for pie data
    const [pieData, setPieData] = useState([
        { name: "Stocks", value: 400 },
        { name: "Bonds", value: 300 },
        { name: "Real Estate", value: 300 },
        { name: "Crypto", value: 200 },
    ]);

    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

    // Action to update total balance
    useCopilotAction({
        name: "updateTotalBalance",
        description: "Update the users total financial balance",
        parameters: [
            { name: "amount",  type: "number", description: "New balance amount" }
        ],
        handler: async (amount) => {
            console.log("updateTotalBalance called with:", amount, "type:", typeof amount);

            // Handle if amount is an object with amount property
            let numericAmount;
            if(typeof amount == 'object' && amount !== null && 'amount' in amount) {
                numericAmount = Number(amount.amount);
                console.log("Extracted amount from object:", numbericAmount);
            } else {
                numericAmount = Number(amount);
            }

            if (isNaN(numericAmount)) {
                console.error("Invalid amount format:", amount);
                return { success: false, error: "Invalid amount foirmat" };
            }

            setTotalBalance(numericAmount);
            return {
                success: true,
                message: `Total balance updated to $${formatCurrency(numericAmount)}` 
            };
        }
    });


    // Action to update investments


    return (
        <CopilotSidebar
        defaultOpen={true}
        instructions="You are assisting the user as best as you can. Answer in the best way possible given the data yu have."
        labels={{
            title: "KamalSinghania Assistant",
            initial: "How can I help you today? You can ask about your portfolio,get investment advice, or to make changes to your financial data.",
        }}
        >
        { /* Main container: fills the available viewport height */}
        <div className="flex h-[calc(100vh-3.5rem)]">
            <div className="flex-1 p-4 sm:p-6 lg:p-8 overflow-auto">
                { /* Dashboard content goes here */}
            </div>
        </div>
        </CopilotSidebar>
    );
}
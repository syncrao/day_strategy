import axios from "axios";
import { NextResponse } from "next/server";
import { loginSmartAPI } from "@/lib/smartapi";

export async function GET() {
  try {
    const token = await loginSmartAPI();

    const res = await axios.post(
      "https://apiconnect.angelbroking.com/rest/secure/angelbroking/historical/v1/getCandleData",
      {
        exchange: "NSE",
        symboltoken: "3045", // RELIANCE (example)
        interval: "FIVE_MINUTE",
        fromdate: "2024-04-01 09:15",
        todate: "2024-04-01 15:30",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
          "X-PrivateKey": process.env.SMART_API_KEY!,
          "X-SourceID": "WEB",
          "X-ClientLocalIP": "127.0.0.1",
          "X-ClientPublicIP": "127.0.0.1",
          "X-MACAddress": "AA:BB:CC:DD:EE:FF",
        },
      }
    );

    return NextResponse.json(res.data);
  } catch (err: any) {
    console.error(err.response?.data || err.message);

    return NextResponse.json({
      success: false,
      error: err.response?.data || err.message,
    });
  }
}
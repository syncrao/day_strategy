import { NextResponse } from "next/server";
import { loginSmartAPI } from "@/lib/smartapi";

export async function GET() {
  try {
    const token = await loginSmartAPI();

    return NextResponse.json({
      success: true,
      token,
    });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      error: error.message,
    });
  }
}
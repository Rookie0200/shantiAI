import { NextRequest, NextResponse } from "next/server";
// import zod from "zod";
import axios from "axios";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();
  // Here you would typically validate the user's credentials
  // For demonstration purposes, we'll assume any email/password is valid
  const API_URL = process.env.API_URL || "http://localhost:8000";
  try {
    const response = await axios.post(
      `${API_URL}/api/auth/login`,
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return NextResponse.json(response.data, { status: response.status });
  } catch (error) {
    return NextResponse.json(
      { message: "Server Error", error },
      { status: 500 }
    );
  }
}

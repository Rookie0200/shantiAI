import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const API_URL = process.env.API_URL || "http://localhost:8000";
  const token = req.headers.get("Authorization");

  if (!token) {
    return NextResponse.json({ message: "No token provided" }, { status: 401 });
  }

  try {
    const res = await axios.get(`${API_URL}/api/auth/me`, {
      headers: {
        Authorization: token,
      },
    });

    if (!res.data.success) {
      return NextResponse.json(
        { message: "Failed to fetch user data" },
        { status: res.status }
      );
    }

    const data = res.data;
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { message: "Server error", error },
      { status: 500 }
    );
  }
}

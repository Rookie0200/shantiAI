import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

const API_URL = process.env.API_URL || "http://localhost:8000";

export async function POST(
  req: NextRequest
  //   { params }: { params: { sessionId: string } }
) {
  //   const { sessionId } = params;
  //   const body = await req.json();
  try {
    const authHeader = req.headers.get("Authorization");

    if (!authHeader) {
      return NextResponse.json(
        { message: "Authorization header is required!!!" },
        { status: 401 }
      );
    }
    const response = await axios.post(`${API_URL}/api/chat/sessions/`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: authHeader,
      },
    });
    if (!response.data.success) {
      const error = response.data.error || "Failed to create chat session";
      console.error("Error creating chat session:", error);
      return NextResponse.json(
        { error: error || "Failed to create chat session" },
        { status: response.status }
      );
    }
    const data = response.data;
    console.log("Chat session created with data :", data);
    return NextResponse.json(data, { status: response.status });

    // return NextResponse.json(data, { status: response.status });
  } catch (error) {
    return NextResponse.json(
      { message: "Server Error", error },
      { status: 500 }
    );
  }
}

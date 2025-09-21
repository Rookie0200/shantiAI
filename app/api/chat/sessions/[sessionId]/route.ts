import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
const API_URL = process.env.API_URL || "http://localhost:8000";

export async function GET(
  req: NextRequest,
  { params }: { params: { sessionId: string } }
) {
  const { sessionId } = params;
  try {
    const response = await axios.get(
      `${API_URL}/api/chat/sessions/${sessionId}/history`
    );
    if (!response.data.success) {
      const error = response.data.error || "Failed to fetch chat history";
      console.error("Error fetching chat history:", error);
      return NextResponse.json(
        { error: error || "Failed to fetch chat history" },
        { status: response.status }
      );
    }
    const data = response.data;
    console.log("Chat history fetched with data :", data);
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    return NextResponse.json(
      { message: "Server Error", error },
      { status: 500 }
    );
  }
}

export async function POST(
  req: NextRequest,
  { params }: { params: { sessionId: string } }
) {
  const { sessionId } = params;
  const message = await req.json();
  try {
    if (!message) {
      return NextResponse.json(
        { error: "Message content is required" },
        { status: 400 }
      );
    }
    const response = await axios.post(
      `${API_URL}/api/chat/sessions/${sessionId}/message`,
      message,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.data.success) {
      const error = response.data.error || "Failed to send message";
      console.error("Error sending message:", error);
      return NextResponse.json(
        { error: error || "Failed to send message" },
        { status: response.status }
      );
    }
    const data = response.data;
    console.log("Message sent with response data :", data);
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    return NextResponse.json(
      { message: "Server Error", error },
      { status: 500 }
    );
  }
}

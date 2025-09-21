import { NextResponse, NextRequest } from "next/server";

const API_URL = process.env.API_URL || "http://localhost:8000";
import axios from "axios";
import { time } from "console";

export async function GET(
  req: NextRequest,
  { params }: { params: { sessionId: string } }
) {
  const { sessionId } = params;
  try {
    const response = await axios.get(
      `${API_URL}/api/chat/sessions${sessionId}/history`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
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

    const formatedData = data.data.map((item: any) => ({
      role: item.role,
      content: item.content,
      timestamp: item.timestamp,
    }));

    return NextResponse.json(formatedData, { status: response.status });

  } catch (error) {
    return NextResponse.json(
      { message: "Server Error", error },
      { status: 500 }
    );
  }
}

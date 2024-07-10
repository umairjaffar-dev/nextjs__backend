import { comments } from "./data";

export async function GET() {
  return Response.json(comments);
}

export async function POST(request: Request) {
  const comment = await request.json();
  const data = {
    id: comments.length + 1,
    text: comment.text,
  };
  comments.push(data);
  return new Response(JSON.stringify(data), {
    headers: {
      "Content-Type": "Application/json",
    },
    status: 201,
    statusText:"added a new comment."
  });
}

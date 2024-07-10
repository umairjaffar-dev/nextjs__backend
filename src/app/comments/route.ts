import { NextRequest } from "next/server";
import { comments } from "./data";

// export async function GET() {
//   return Response.json(comments);
// }
export const GET = (
    request: NextRequest,
    { params }: { params: { id: string } }
  ) => {
    const searchParams = request.nextUrl.searchParams;
    
    const query = searchParams.get("query");
    // console.log("QUERY::", query);
    const filterComments = query
      ? comments.filter((comment) => comment.text.includes(query))
      : comments;
  
    return Response.json(filterComments);
  };

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

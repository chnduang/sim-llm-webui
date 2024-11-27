export async function GET(request: Request) {
  console.log('request', request.url);
  return Response.json('hello route');
}

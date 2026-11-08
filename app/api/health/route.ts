export async function GET() {
  return Response.json({
    ok: true,
    app: "EasyEnglish",
    server: "next"
  });
}

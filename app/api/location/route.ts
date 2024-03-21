const dynamic = 'force-dynamic'
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
const ip = request.ip;
const city = request.geo?.city;
console.log("ip ", ip);
console.log("city ", city);
return Response.json({ ip, city })

}
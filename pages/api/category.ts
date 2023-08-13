import { PrismaService } from "../../lib/utils/prisma.service";

// API HANDLERS
// -----------------------------

export const modelService = new PrismaService("category");

export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    return await modelService.create(req, res);
  }

  if (req.method === "GET") {
    return await modelService.getAll(req, res);
  }

  if (req.method === "PUT") {
    return await modelService.bulkUpdate(req, res);
  }

  if (req.method === "DELETE") {
    return await modelService.bulkDelete(req, res);
  }

  return res.status(404).json({ error: "Method not found" });
}

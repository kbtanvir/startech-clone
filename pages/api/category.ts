import { PrismaService } from "../../lib/utils/prisma.service";

// API HANDLERS
// -----------------------------

export const categoryService = new PrismaService("category");

export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    return await categoryService.create(req, res);
  }

  if (req.method === "GET") {
    return await categoryService.getAll(req, res);
  }

  if (req.method === "PUT") {
    return await categoryService.bulkUpdate(req, res);
  }

  if (req.method === "DELETE") {
    return await categoryService.bulkDelete(req, res);
  }

  return res.status(404).json({ error: "Method not found" });
}

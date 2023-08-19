import { categoryService } from "../category";

// API HANDLERS
// -----------------------------

export default async function handler(req: any, res: any) {
  if (req.method === "GET") {
    return await categoryService.getOne(req, res);
  }

  if (req.method === "PUT") {
    return await categoryService.updateOne(req, res);
  }

  if (req.method === "DELETE") {
    return await categoryService.delete(req, res);
  }

  return res.status(404).json({ error: "Method not found" });
}

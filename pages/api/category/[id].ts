import { modelService } from "../category";

// API HANDLERS
// -----------------------------

export default async function handler(req: any, res: any) {
  if (req.method === "GET") {
    return await modelService.getOne(req, res);
  }

  if (req.method === "PUT") {
    return await modelService.updateOne(req, res);
  }

  if (req.method === "DELETE") {
    return await modelService.delete(req, res);
  }

  return res.status(404).json({ error: "Method not found" });
}

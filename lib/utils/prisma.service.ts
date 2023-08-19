import { PrismaClient } from "@prisma/client";

// QUERY CLASS
// -----------------------------

export const prisma = new PrismaClient();

export class PrismaService {
  constructor(private collection: any) {
    this.collection = prisma[collection];
  }

  async getAll(req: any, res: any) {
    try {
      const response = await this.collection.findMany();

      return res.status(200).json(response, { success: true });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  async getOne(req: any, res: any) {
    const { id } = req.query;

    try {
      const response = await this.collection.findUnique({
        where: {
          id: parseInt(id[0]),
        },
      });

      return res.status(200).json(response, { success: true });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
  async create(req: any, res: any) {
    let response: any;
    const { data } = req.body;

    try {
      response = await this.collection.createMany({
        data: data.map((item: any) => ({
          name: item.name,
        })),
      });

      return res.status(200).json(response, { success: true });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  async updateOne(req: any, res: any) {
    const { id } = req.query;
    try {
      const response = await this.collection.update({
        where: {
          id: parseInt(id[0]),
        },
        data: {
          name: req.body.name,
        },
      });

      return res.status(200).json(response, { success: true });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  async bulkUpdate(req: any, res: any) {
    try {
      const response = await this.collection.updateMany({
        where: {
          id: req.body.id,
        },
        data: req.body.data,
      });

      return res.status(200).json(response, { success: true });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  async delete(req: any, res: any) {
    const { id } = req.query;

    try {
      const response = await this.collection.delete({
        where: {
          id: id[0],
        },
      });

      return res.status(200).json(response, { success: true });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  async bulkDelete(req: any, res: any) {
    try {
      const response = await this.collection.deleteMany(
        req.body.all
          ? {}
          : {
              where: {
                OR: req.body.ids.map((id: any) => ({ id })),
              },
            }
      );

      return res.status(200).json(response, { success: true });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
}

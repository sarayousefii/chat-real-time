import { prisma } from "./prisma";
import { verifyToken } from "./jwt";

export const getCurrentUser = async (req) => {
  try {
    const token = req.cookies.token;
    if (!token) return null;
    const payload = verifyToken(token);
    const user = await prisma.user.findUnique({ where: { id: payload.id } });
    return user;
  } catch {
    return null;
  }
};

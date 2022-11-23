import prisma from '../db/prisma'

const getMenuItems = async (_, res) => {
  const menuItems = await prisma.menuItem.findMany()
  return res.json({ data: menuItems })
}

export { getMenuItems }

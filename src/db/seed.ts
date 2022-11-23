import prisma from './prisma'

async function main() {
  const menuItems = [
    {
      title: 'PESTO GRILLED CHEESE WITH TOMATO BISQUE',
      shortDescription:
        'crispy plant-based chicken, garlic mashed potato, plant-based cheddar, roasted corn, gravy, green onion',
      imageUrl:
        'https://nativefoods.com/wp-content/uploads/2022/10/pesto-grilled-cheese-300x300.jpg',
      price: 12,
    },
    {
      title: 'NACHOS',
      shortDescription:
        'corn tortilla chips, black beans, cashew cheese, chipotle sauce, salsa fresca, roasted corn, green onions, cilantro, jalapeño slices',
      fullDescription:
        'made with gluten-free ingredients; plant-based taco meat and plant-based bbq chicken add-ons are NOT gluten-free\nadd-ons: avocado, plant-based taco meat [not GF], plant-based bbq chicken [not GF]',
      imageUrl: 'https://nativefoods.com/wp-content/uploads/2021/08/nachos-300x300.png',
      price: 9,
    },
    {
      title: "POPPIN' JALAPEÑO BURGER",
      shortDescription:
        'two Native Foods signature burger patties, plant-based cheddar, plant-based jalapeño pimento cheese, pickled jalapeños, crispy onions, mixed lettuce, green goddess dressing, toasted pretzel bun',
      imageUrl:
        'https://nativefoods.com/wp-content/uploads/2021/08/poppin-jalapeno-burger-300x300.png',
      price: 13,
    },
    {
      title: 'DOUBLE CHEESEBURGER',
      shortDescription:
        'two Native Foods signature burger patties, plant-based cheddar, pickles, red onions, mixed lettuce, thousand island dressing, bbq sauce, toasted hamburger bun',
      imageUrl:
        'https://nativefoods.com/wp-content/uploads/2021/08/double-cheeseburger-300x300.png',
      price: 13,
    },
    {
      title: 'CHICKEN, BACON & AVO CLUB',
      shortDescription:
        'crispy plant-based chicken, plant-based bacon, avocado, chipotle sauce, mixed lettuce, tomato, red onions, toasted hamburger bun',
      imageUrl:
        'https://nativefoods.com/wp-content/uploads/2022/08/chicken-bacon-avo-club-TINDLE-300x300.jpg',
      price: 12,
    },
    {
      title: 'TACO SALAD',
      shortDescription:
        'plant-based taco meat, roasted corn, salsa fresca, mixed lettuce, cabbage, green onion, cilantro, tortilla chip strips, creamy chipotle dressing',
      imageUrl:
        'https://nativefoods.com/wp-content/uploads/2021/08/taco-salad-300x300.png',
      price: 12,
    },
  ]

  await prisma.menuItem.createMany({
    data: menuItems,
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

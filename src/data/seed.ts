import { faker } from '@faker-js/faker/locale/fa';
import { Product } from '../types';

export const generateMockProducts = (count: number): Product[] => {
  const products: Product[] = [];
  const categories = ['الکترونیک', 'پوشاک', 'مواد غذایی', 'لوازم خانگی', 'کتاب'];
  const brands = ['سامسونگ', 'اپل', 'ال‌جی', 'سونی', 'شیائومی', 'کاله', 'میهن'];

  for (let i = 0; i < count; i++) {
    const price = faker.number.int({ min: 100000, max: 50000000 });
    products.push({
      id: `PROD-${faker.string.alphanumeric(6).toUpperCase()}`,
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: price,
      discountPrice: faker.datatype.boolean(0.3) ? price * 0.8 : undefined,
      category: faker.helpers.arrayElement(categories),
      brand: faker.helpers.arrayElement(brands),
      images: [faker.image.urlLoremFlickr({ category: 'technics', width: 640, height: 480 }), faker.image.urlLoremFlickr({ category: 'technics', width: 640, height: 480 })],
      stock: faker.number.int({ min: 0, max: 200 }),
      digital: faker.datatype.boolean(0.1),
      tags: faker.helpers.arrayElements(['جدید', 'پرفروش', 'تخفیف ویژه'], faker.number.int({ min: 1, max: 3 })),
      rating: faker.number.float({ min: 3, max: 5, precision: 0.1 }),
      reviews: faker.number.int({ min: 5, max: 500 }),
      createdAt: faker.date.past({ years: 1 }),
      updatedAt: faker.date.recent(),
    });
  }
  return products;
};

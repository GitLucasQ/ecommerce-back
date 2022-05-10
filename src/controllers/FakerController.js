import { faker } from '@faker-js/faker';

const { commerce, image } = faker;


export const generateProducts = (_req, res) => {
    let fakeProduct = [];

    for (let index = 0; index < 5; index++) {
        const name = commerce.product();
        const price = commerce.price(10, 500, 0, '$');
        const photo = image.imageUrl(640, 240, 'technology', true);

        fakeProduct.push({ name, price, photo });
    }

    res.json(fakeProduct);
};
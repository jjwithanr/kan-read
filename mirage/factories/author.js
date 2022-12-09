import { Factory,association } from 'miragejs';
import { faker } from '@faker-js/faker';

export default Factory.extend({
    name() {
        return faker.name.fullName();
    },
});
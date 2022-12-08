import { Factory } from 'miragejs';
import { faker } from '@faker-js/faker';

export default Factory.extend({
    title() {
        return faker.company.catchPhrase();
    },
    author() {
        return faker.name.fullName();
    }
});

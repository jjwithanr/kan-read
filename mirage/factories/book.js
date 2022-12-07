import { Factory } from 'miragejs';

export default Factory.extend({
    title() {
        return 'Book';
    },
    author() {
        return 'Moses';
    }
});

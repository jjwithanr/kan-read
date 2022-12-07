import { Factory } from 'miragejs';

export default Factory.extend({
    title(i) {
        return `Book ${i + 1}`;
    },
    author() {
        return 'Moses';
    }
});

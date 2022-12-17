import Component from '@glimmer/component';

export default class AuthorsTableFilterComponent extends Component {
    get results() {
        let { authors, query } = this.args;
    
        if (query) {
            authors = authors.filter((author) => author.name.toLowerCase().includes(query.toLowerCase()));
        }
    
        return authors;
    }
}

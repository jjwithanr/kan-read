import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | authors-table', function(hooks) {
    setupRenderingTest(hooks);
    hooks.beforeEach(function () {
        this.setProperties({
            books: [
                {
                    "type": "books",
                    "id": "1",
                    "attributes": {
                        "author-name": "Mr. Erin Denesik",
                        "title": "Streamlined clear-thinking focus group"
                    }
                },
                {
                    "type": "books",
                    "id": "2",
                    "attributes": {
                        "author-name": "Mr. Erin Denesik",
                        "title": "Cloned mission-critical complexity"
                    }
                },
                {
                    "type": "books",
                    "id": "3",
                    "attributes": {
                        "author-name": "Annette Gleichner",
                        "title": "Front-line 3rd generation data-warehouse"
                    }
                },
                {
                    "type": "books",
                    "id": "4",
                    "attributes": {
                        "author-name": "Annette Gleichner",
                        "title": "Monitored optimal firmware"
                    }
                },
                {
                    "type": "books",
                    "id": "5",
                    "attributes": {
                        "author-name": "Noah Smith",
                        "title": "Cloned interactive moratorium"
                    }
                },
                {
                    "type": "books",
                    "id": "6",
                    "attributes": {
                        "author-name": "Noah Smith",
                        "title": "Grass-roots holistic methodology"
                    }
                },
                {
                    "type": "books",
                    "id": "7",
                    "attributes": {
                        "author-name": "Noah Smith",
                        "title": "Visionary needs-based framework"
                    }
                },
                {
                    "type": "books",
                    "id": "8",
                    "attributes": {
                        "author-name": "Noah Smith",
                        "title": "Public-key holistic hub"
                    }
                }
            ],
            authors: [
                {
                    "type": "authors",
                    "id": "1",
                    "attributes": {
                        "name": "Mr. Erin Denesik",
                        "book-list": "Streamlined clear-thinking focus group, Cloned mission-critical complexity"
                    }
                },
                {
                    "type": "authors",
                    "id": "2",
                    "attributes": {
                        "name": "Annette Gleichner",
                        "book-list": "Front-line 3rd generation data-warehouse, Monitored optimal firmware"
                    }
                },
                {
                    "type": "authors",
                    "id": "3",
                    "attributes": {
                        "name": "Noah Smith",
                        "book-list": "Cloned interactive moratorium, Grass-roots holistic methodology, Visionary needs-based framework, Public-key holistic hub"
                    }
                }
            ]
        });
    });

    test('it renders all given authors by default', async function (assert) {
        await render(hbs`<AuthorsTable @authors={{this.authors}} @books={{this.books}} />`);

        assert.dom('.authorSearch').exists();
        assert.dom('.authorSearch input').exists();

        assert.dom('.authorResults').exists();
        assert.dom('.authorResults tr').exists({ count: 4 });

        assert
            .dom('.authorResults tr:nth-child(1)')
            .containsText('Name Books');
        assert
            .dom('.authorResults tr:nth-of-type(2)') 
            .hasAnyText();
        assert
            .dom('.authorResults tr:nth-of-type(3)') 
            .hasAnyText();
        assert
            .dom('.authorResults tr:nth-of-type(4)') 
            .hasAnyText();
    });
});

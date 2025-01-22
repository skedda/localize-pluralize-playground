import Component from '@glimmer/component';
import tracked from 'tracked-built-ins/-private/decorator';
import { action } from '@ember/object';
import { htmlSafe } from '@ember/template';
import { pluralize } from 'ember-inflector';

export default class PluralTest extends Component {
  @tracked count = 1;

  @action
  addCount() {
    this.count++;
  }

  @action
  removeCount() {
    this.count--;
  }

  get countHtml() {
    return htmlSafe(
      `Add <var data-var="num-dogs" data-pluralize="${this.count}">${this.count}</var> dog`,
    );
  }

  get countHtml2() {
    let cat = pluralize(this.count, 'cat', { withoutCount: true });
    return htmlSafe(`Add <var data-var="num-cats">${this.count}</var> ${cat}`);
  }
}

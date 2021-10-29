/* eslint class-methods-use-this: ["error", { "exceptMethods": ["changeDate"] }] */
/* eslint react/prop-types: 0 */

import React from 'react';
import moment from 'moment';
import 'moment/locale/ru';

export default function withPretty(WrappedComponent) {
  return class extends React.Component {
    changeDate(dateStr) {
      return moment(dateStr).fromNow();
    }

    render() {
      const { date } = this.props;

      return <WrappedComponent {...this.props} date={this.changeDate(date)} />;
    }
  };
}

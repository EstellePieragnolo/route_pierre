import React from "react";
import "./_SummaryContent.scss";

export default class SummaryContent extends React.Component {
  render() {
    const { text, title } = this.props;
    return (
      <div className="content">
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    );
  }
}

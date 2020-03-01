import React from "react";
import "./_Summary.scss";
import SummaryImages from "./child/SummaryImages/SummaryImages";
import SummaryContent from "./child/SummaryContent/SummaryContent";

export default class Summary extends React.Component {
  render() {
    const { src, title, text } = this.props;
    return (
      <div className="summary">
        <SummaryImages src={src} />
        <SummaryContent title={title} text={text} />
      </div>
    );
  }
}

import React from "react";
import "./_SummaryImages.scss";

export default class SummaryImages extends React.Component {
  render() {
    const { src } = this.props;
    return (
      <div className="images">
        <div className="images_container">
          <span style={{ backgroundImage: `url(${src})` }} />
        </div>
      </div>
    );
  }
}

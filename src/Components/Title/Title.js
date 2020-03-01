import React from "react";
import "./_Title.scss";

export default class Title extends React.Component {
    render() {
      const {title} = this.props
        return (
          <div className='title'>
             <h3>{title}</h3>
          </div>
        )
    }
}

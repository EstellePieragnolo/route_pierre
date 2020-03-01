import React from "react";
import "./_Text.scss";

export default class Text extends React.Component {
    render() {
      const {text} = this.props
        return (
          <div className='text'>
             <p>{text}</p>
          </div>
        )
    }
}

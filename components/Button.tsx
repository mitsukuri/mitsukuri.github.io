import React from "react"

export default class Button extends React.Component <{text: string}> {
  constructor (p : {text : string}) {
    super (p);
    this.whackAMole = this.whackAMole.bind (this);
  }

  render () {
    return (
    <button onMouseDown={this.whackAMole}>
    {this.props.text}
    </button>
    )
  }
  whackAMole () {alert ('Mole whacked OK!')};
}
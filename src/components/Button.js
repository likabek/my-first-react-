import React from 'react';
import '../stylings/Button.css';

export default
class Button extends React.Component {
   clickHandler(){;
  console.log('clicked');}
  render()
{

  return(
    <div className="button"
      onClick={this.clickHandler}>
    1
     </div>
  )
}
}

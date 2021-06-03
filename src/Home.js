import React from 'react';
import Button from './Button';

// const Home = ({ title, page }) => {
//   return (
//     <section>
//       <h2>{title} - {page}</h2>
//       <Button
//         title="You can't touch this"
//         color="#333"
//         backgroundColor="#ff9800"
//         disabled
//         id="hahah"
//       />
//       <Button
//         title="You can touch this"
//         color="#fbf8f8"
//         backgroundColor="#080808"
//       />
//     </section>
//   );
// }

class Home extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <section>
        <h2>{this.props.title} - {this.props.page}</h2>
        <Button
          title="You can't touch this"
          color="#333"
          backgroundColor="#ff9800"
          disabled
          id="hahah"
        />
        <Button
          title="You can touch this"
          color="#fbf8f8"
          backgroundColor="#080808"
        />
      </section>
    )
  }
}

export default Home;

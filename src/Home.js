import React from 'react';
import Button from './Button';
import Swal from 'sweetalert2';

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
  //   this.state = {
  //     isLoggedIn: false,
  //     name: 'Shakhzod',
  //     awards: [],
  //     age: 21,
  //     isMarried: null,
  //   }
  // }

  state = {
    isLoggedIn: false,
    name: 'Shakhzod',
    friends: [],
    age: 21,
    isMarried: true,
    puppyAge: 0,
  }

  componentDidMount() {
    console.log('DID_MOUNT is started')
    fetch('https://reqres.in/api/users')
      .then(res => res.json())
      .then(({ data }) => this.setState({ friends: data }))
      .catch(err => console.log(err));

    Swal.fire({
      title: 'Xush kelibsiz!',
      text: `Salom ${this.state.name}. Bizning Bekorchidan hamma bezor portalimizga xush kelibsiz.`,
      icon: 'success'
    })
  }

  componentWillUnmount() {
    Swal.fire({
      title: 'Vayvo.',
      text: `Daf bo'l!`,
      icon: 'error'
    });
  }

  // handleAge(event) {
  //   const { value, name } = event.target;
  //   this.setState({ age: value })
  //   console.log(value)
  // }

  handleAge = (event) => {
    const { value, name } = event.target;
    this.setState({ age: value })
    console.log(value)
  }

  handleIncrement = (event) => {
    this.setState(prevState => ({ age: prevState.age + 1, jamshid: 12 }), this.handlePuppyAge());

  }

  handlePuppyAge = () => {
    this.setState(state => ({ puppyAge: state.age * 7 }));
  }


  render() {
    console.log(this.state.puppyAge);

    const { name, age, friends, puppyAge, isLoggedIn, isMarried } = this.state;
    return (
      <section>
        <h2>{name}</h2>
        <span>Married: {isMarried}</span>
        <span>Age: {age}</span>
        <h5>{puppyAge}</h5>
        <input
          name="age"
          type="number"
          placeholder="Your age"
          // onChange={this.handleAge}
          onChange={this.handleAge}
        />

        <button onClick={this.handleIncrement}>+</button>
        <label htmlFor="">Is Married</label>
        Yes<input type="radio" name="isMarried" value={true} onChange={this.handleAge} />
        Not<input type="radio" name="isMarried" value={false} onChange={this.handleAge} />
        {/* <Button
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
        /> */}
      </section>
    )
  }
}

export default Home;

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import React, { Component } from "react";

class ShoppingList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItemName: "",
      groceryItems: [
        { name: "Bananas", id: "item-1", completed: false },
        { name: "Apples", id: "item-2", completed: true },
        { name: "Rice", id: "item-3", completed: false },
      ],
      validationErrors: {},
      submitted: 0,
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleCompletedToggle = this.handleCompletedToggle.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.validateFields = this.validateFields.bind(this);
  }

  handleOnChange(e) {
    const target = e.target;
    //console.log(target)
    const name = target.name;
    //console.log(name)
    const value = target.value;
    //console.log(value)
    this.setState({
      [name]: value,
    });
  }

  handleCompletedToggle(e) {
    const target = e.target;
    const itemindexValue = target.attributes.itemindex.value;

    const index = parseInt(itemindexValue, 10);
    console.log("toggle: " + index);

    const newGroceryItemsState = [...this.state.groceryItems];
    newGroceryItemsState[index].completed = target.checked;

    this.setState({
      groceryItems: newGroceryItemsState,
    });
  }

  handleDelete(e) {
    const target = e.target;
    const itemindexValue = target.attributes.itemindex.value;

    const index = parseInt(itemindexValue, 10);
    console.log("toggle: " + index);

    const newGroceryItemsState = [...this.state.groceryItems];
    newGroceryItemsState.splice(index, 1);

    this.setState({
      groceryItems: newGroceryItemsState,
    });
  }

  handleOnSubmit(e) {
    e.preventDefault();

    const isFormValid = this.validateFields();

    if (isFormValid) {
      const newGroceryItemsObject = {
        completed: false,
        name: this.state.newItemName,
        id: `item-${this.state.submitted + 4}`,
      };

      this.setState((state) => {
        return {
          submitted: state.submitted + 1,
          groceryItems: [...state.groceryItems, newGroceryItemsObject],
          newItemName: "",
        };
      });
    }
  }

  validateFields() {
    const { newItemName } = this.state;

    const errors = {};

    if (!newItemName) {
      errors["newItemName"] = "Please enter grocery item name";
    }

    this.setState({
      validationErrors: errors,
    });

    return Object.keys(errors).length === 0;
  }

  render() {
    const { newItemName: newItemNameError } = this.state.validationErrors;

    const { groceryItems } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <Container>
            <Card border="primary" style={{ width: "18rem" }}>
              <Card.Header>Shopping List</Card.Header>
              <Card.Body>
                <section>
                  {!groceryItems.length && <p>No items!</p>}
                  <ul>
                    {groceryItems.map((item, index) => {
                      return (
                        <li key={item.id}>
                          <input
                            type="checkbox"
                            checked={item.completed}
                            onChange={this.handleCompletedToggle}
                            itemindex={index}
                          />
                          <span>{item.name}</span>
                          <button itemindex={index} onClick={this.handleDelete}>
                            Delete
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                  <form onSubmit={this.handleOnSubmit}>
                    <label>
                      <span className="error">{newItemNameError}</span>
                      <input
                        type="text"
                        name="newItemName"
                        placeholder="Bananas"
                        value={this.state.newItemName}
                        onChange={this.handleOnChange}
                      />
                    </label>
                    <button type="submit">Submit</button>
                    <br />
                    <p>Submitted {this.state.submitted} times!</p>
                  </form>
                </section>
              </Card.Body>
            </Card>
          </Container>
        </header>
      </div>
    );
  }
}

export default ShoppingList;

// import "bootstrap/dist/css/bootstrap.min.css";
// import Container from "react-bootstrap/Container";
// import Card from "react-bootstrap/Card";
// import React, { Component } from "react";

// class ShoppingList extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       newItemName: "",
//       groceryItems: [
//         { name: "Bananas", id: "item-1", completed: false },
//         { name: "Apples", id: "item-2", completed: true },
//         { name: "Rice", id: "item-3", completed: false },
//       ],
//       validationErrors: {},
//       submitted: 0,
//     };

//     this.handleOnChange = this.handleOnChange.bind(this);
//     this.handleCompletedToggle = this.handleCompletedToggle.bind(this);
//     this.handleDelete = this.handleDelete.bind(this);
//     this.handleOnSubmit = this.handleOnSubmit.bind(this);
//     this.validateFields = this.validateFields.bind(this);
//   }

//   handleOnChange(e) {
//     const { name, value } = e.target;
//     this.setState({
//       [name]: value,
//     });
//   }

//   handleCompletedToggle(e) {
//     const index = parseInt(e.target.dataset.index, 10);
//     const newGroceryItemsState = [...this.state.groceryItems];
//     newGroceryItemsState[index].completed = e.target.checked;

//     this.setState({
//       groceryItems: newGroceryItemsState,
//     });
//   }

//   handleDelete(e) {
//     const index = parseInt(e.target.dataset.index, 10);
//     const newGroceryItemsState = this.state.groceryItems.filter((_, i) => i !== index);

//     this.setState({
//       groceryItems: newGroceryItemsState,
//     });
//   }

//   handleOnSubmit(e) {
//     e.preventDefault();

//     const isFormValid = this.validateFields();

//     if (isFormValid) {
//       const newGroceryItemsObject = {
//         completed: false,
//         name: this.state.newItemName,
//         id: `item-${this.state.submitted + 4}` // Generate unique id
//       };

//       this.setState((state) => ({
//         submitted: state.submitted + 1,
//         groceryItems: [...state.groceryItems, newGroceryItemsObject],
//         newItemName: "",
//       }));
//     }
//   }

//   validateFields() {
//     const { newItemName } = this.state;

//     const errors = {};

//     if (!newItemName) {
//       errors.newItemName = "Please enter grocery item name";
//     }

//     this.setState({
//       validationErrors: errors,
//     });

//     return Object.keys(errors).length === 0; // Return true if no errors
//   }

//   render() {
//     const { newItemName: newItemNameError } = this.state.validationErrors;
//     const { groceryItems } = this.state;

//     return (
//       <div className="App">
//         <header className="App-header">
//           <Container>
//             <Card border="primary" style={{ width: "18rem" }}>
//               <Card.Header>Shopping List</Card.Header>
//               <Card.Body>
//                 <section>
//                   {!groceryItems.length && <p>No items!</p>}
//                   <ul>
//                     {groceryItems.map((item, index) => (
//                       <li key={item.id}>
//                         <input
//                           type="checkbox"
//                           checked={item.completed}
//                           onChange={this.handleCompletedToggle}
//                           data-index={index}
//                         />
//                         <span>{item.name}</span>
//                         <button data-index={index} onClick={this.handleDelete}>
//                           Delete
//                         </button>
//                       </li>
//                     ))}
//                   </ul>
//                   <form onSubmit={this.handleOnSubmit}>
//                     <label>
//                       <span className="error">{newItemNameError}</span>
//                       <input
//                         type="text"
//                         name="newItemName"
//                         placeholder="Bananas"
//                         value={this.state.newItemName}
//                         onChange={this.handleOnChange}
//                       />
//                     </label>
//                     <button type="submit">Submit</button>
//                     <br />
//                     <p>Submitted {this.state.submitted} times!</p>
//                   </form>
//                 </section>
//                 <Card.Title>Primary Card Title</Card.Title>
//                 <Card.Text>
//                   Some quick example text to build on the card title and make up
//                   the bulk of the card's content.
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </Container>
//         </header>
//       </div>
//     );
//   }
// }

// export default ShoppingList;

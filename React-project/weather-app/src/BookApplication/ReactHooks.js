import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input, Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ReactHooks = () => {
  const [books, setBooks] = useState([]);
  const [newBookData, setNewBookData] = useState({ title: '', rating: '' });
  const [editBookData, setEditBookData] = useState({ id: '', title: '', rating: '' });
  const [newBookModal, setNewBookModal] = useState(false);
  const [editBookModal, setEditBookModal] = useState(false);

  useEffect(() => {
    _refreshBooks();
  }, []);

  const toggleNewBookModal = () => setNewBookModal(!newBookModal);
  const toggleEditBookModal = () => setEditBookModal(!editBookModal);

  const addBook = () => {
    axios.post('http://localhost:3004/books', newBookData)
      .then(response => {
        setBooks([...books, response.data]);
        setNewBookModal(false);
        setNewBookData({ title: '', rating: '' });
      });
  };

  const updateBook = () => {
    axios.put('http://localhost:3004/books/' + editBookData.id, editBookData)
      .then(response => {
        _refreshBooks();
        setEditBookModal(false);
        setEditBookData({ id: '', title: '', rating: '' });
      });
  };

  const editBook = (id, title, rating) => {
    setEditBookData({ id, title, rating });
    setEditBookModal(true);
  };

  const deleteBook = id => {
    axios.delete('http://localhost:3004/books/' + id)
      .then(response => {
        _refreshBooks();
      });
  };

  const _refreshBooks = () => {
    axios.get('http://localhost:3004/books')
      .then(response => {
        setBooks(response.data);
      });
  };

  const bookRows = books.map(book => (
    <tr key={book.id}>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.rating}</td>
      <td>
        <Button color="success" size="sm" className="mr-2" onClick={() => editBook(book.id, book.title, book.rating)}>Edit</Button>
        <Button color="danger" size="sm" onClick={() => deleteBook(book.id)}>Delete</Button>
      </td>
    </tr>
  ));

  return (
    <div className="App container">
      <h1>Books App</h1>
      <Button color="primary" onClick={toggleNewBookModal}>Add Book</Button>

      <Modal isOpen={newBookModal} toggle={toggleNewBookModal}>
        <ModalHeader toggle={toggleNewBookModal}>Add a new book</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="title">Title</Label>
              <Input id="title" value={newBookData.title} onChange={e => setNewBookData({ ...newBookData, title: e.target.value })} />
            </FormGroup>
            <FormGroup>
              <Label for="rating">Rating</Label>
              <Input id="rating" value={newBookData.rating} onChange={e => setNewBookData({ ...newBookData, rating: e.target.value })} />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={addBook}>Add Book</Button>{' '}
          <Button color="secondary" onClick={toggleNewBookModal}>Cancel</Button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={editBookModal} toggle={toggleEditBookModal}>
        <ModalHeader toggle={toggleEditBookModal}>Edit a book</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="title">Title</Label>
              <Input id="title" value={editBookData.title} onChange={e => setEditBookData({ ...editBookData, title: e.target.value })} />
            </FormGroup>
            <FormGroup>
              <Label for="rating">Rating</Label>
              <Input id="rating" value={editBookData.rating} onChange={e => setEditBookData({ ...editBookData, rating: e.target.value })} />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={updateBook}>Update Book</Button>{' '}
          <Button color="secondary" onClick={toggleEditBookModal}>Cancel</Button>
        </ModalFooter>
      </Modal>

      <Table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Rating</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookRows}
        </tbody>
      </Table>
    </div>
  );
};

export default ReactHooks;

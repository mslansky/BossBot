import React from 'react';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';



export default class App extends React.Component{
  state = {
    show: false
  };

  showModal = e => {
    this.setState({
      show: true
    });
  };

  closeModal = e => {
    this.setState({
      show: false
    });
  };

  render (){
  return (
    <div className="App">
      
      <Navbar bg="dark" variant="dark fixed-top">
      <Navbar sticky="top" />
      <Navbar.Brand href="#home">BossBot</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#links"><a href="https://www.glassdoor.com/blog/guide/how-to-negotiate-your-salary/">Advice to Read Before Starting</a></Nav.Link>
          
        </Nav>

      <Button variant="outline-light" onClick={e => {this.showModal();}}>  Click Here to Learn How To Start</Button>
      </Navbar>

      <div className="sidenav"></div>

    
      <Modal show={this.state.show} onHide={this.closeModal}>
        <Modal.Header>
          <Modal.Title>BossBot: Practice Salary Negotiation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Here is where you can practice what you are going to say in a real life situation. Use the text box below to start
          a conversation with your "boss" about why you are interested in a higher compensation and what your target goal salary is. Be sure
          to consider your previous accomplishments, additional workloads, leadership qualities, and time you have been at your role.
          Be confident in yourself and know your worth!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.closeModal}>
            Let's Start!
          </Button>
        </Modal.Footer>
      </Modal>


      <main>
        <div className="conversation">

        </div>
      </main>



      <div className="footer">
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text>Enter Your Responses:</InputGroup.Text>
        </InputGroup.Prepend>
            <FormControl as="textarea" aria-label="With textarea" />
            <Button variant="secondary">Send Message</Button>
      </InputGroup>
      </div>
      



    </div>
    );
  }
}



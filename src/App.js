import React from 'react';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import prompt from './chatbot.js';
import Media from 'react-bootstrap/Media';

export default class App extends React.Component{
  state = {
    show: false,
    messages: [],
    botWaiting: false,
    convoInputValue: ""
  };

  componentDidMount(){
    const {BossBot, HintBot} = prompt();
    let botMessage = [];
    if(BossBot){
      botMessage.push({user: 
        'Boss', message: BossBot})
    }
    if(HintBot){
      botMessage.push({user: 'Hintbot', message: HintBot})
    }
    this.setState({
      messages: [...this.state.messages, ...botMessage]
    })
  }

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

  addMessage(message){
    console.log(this.state.messages);
    const messageObject = {user: 'User', message: message}
    this.setState({
      messages: [...this.state.messages, messageObject]
    }, () => {
      const {BossBot, HintBot} = prompt();
      let botMessage = [];
      if(BossBot){
        botMessage.push({user: 
          'Boss', message: BossBot})
      }
      if(HintBot){
        botMessage.push({user: 'Hintbot', message: HintBot})
      }
      this.setState({
        messages: [...this.state.messages, ...botMessage]
      })
    })
  }

  updateConvoInputValue(val){
    this.setState({
      convoInputValue: val
    })
  }

  render (){
  return (
    <Media>
    <div className="App">
      <Navbar bg="dark" variant="dark fixed-top" className="navbar">
      <Navbar sticky="top" />
      <Navbar.Brand href="#home">BossBot</Navbar.Brand>
        <Nav>
          <Nav.Link href="#links"><a href="https://www.glassdoor.com/blog/guide/how-to-negotiate-your-salary/">Advice to Read Before Starting</a></Nav.Link>
        </Nav>
      <Button className="my-nav-button" variant="outline-light" onClick={e => {this.showModal();}}>  Click Here to Learn How To Start</Button>
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
       <ul>{this.state.messages.map((e) => (<li key="userMessage" className={e.user}>{e.message}</li>))}</ul>
        </div>
      </main>

      <div className="footer">
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text>Enter Your Responses:</InputGroup.Text>
        </InputGroup.Prepend>
            <FormControl as="textarea" aria-label="With textarea" value={this.state.convoInputValue} onChange={(evt)=> this.updateConvoInputValue(evt.target.value)}/>
            <Button variant="secondary" onClick={() => this.addMessage(this.state.convoInputValue)}>Send Message</Button>
      </InputGroup>
      </div>
    </div>
    </Media>
    );
  }
}



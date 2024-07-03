import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../Css/Contact.css'; // Import CSS file

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      submitted: false
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form submitted:', this.state);
    this.setState({
      name: '',
      email: '',
      message: '',
      submitted: true
    });
  }

  render() {
  
    return (
      <>
      <Navbar/>
      <div className="contact-container"> {/* Added className for styling */}
        <h2>Contact Us</h2>
        {this.state.submitted ? (
          <div>
            <p>Thank you for your message! We'll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>Name:</label>
              <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
            </div>
            <div>
              <label>Email:</label>
              <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
            </div>
            <div>
              <label>Message:</label>
              <textarea name="message" value={this.state.message} onChange={this.handleChange} required></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
      <Footer/>
        </>
    );
  }
}

export default ContactPage;

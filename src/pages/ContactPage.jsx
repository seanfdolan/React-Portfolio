export default function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <p>
        Please fill out the form below to contact me.
        </p>
        <p>Sean Dolan</p>
        <p>Email: <a href="mailto:seanfdolan@gmail.com">Email</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/sean-dolan-564201211">LinkedIn</a></p>
        <p>GitHub: <a href="https://github.com/seanfdolan">GitHub</a></p>
        <p>Phone: 646-489-2841</p>
        <p>Please contact me with any updates.</p>
    <form>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
}

export function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

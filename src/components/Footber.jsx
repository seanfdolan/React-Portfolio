const styles = {
    link: {
      color: 'white',
      textDecoration: 'none',
    },
    footer: {
      backgroundColor: 'blue',
      color: 'white',
      padding: '10px 0',
      textAlign: 'center',
    },
  };

function Footer() {
    return (
      <footer style={styles.footer}>
        <h5>Footer Thanks for checking out my page.</h5>
        <div>
          <a href="https://github.com/seanfdolan" style={styles.link}>GitHub</a>
          <span> | </span>
          <a href="https://www.linkedin.com/in/sean-dolan-564201211/" style={styles.link}>LinkedIn</a>
          <span> | </span>
          <a href="https://www.stackoverflow.com/users/25668217/seanfdolan" style={styles.link}>Stack Overflow</a>
          <span> | </span>
          <a href="mailto:seanfdolan@gmail.com" style={styles.link}>Email</a>
        </div>
    
      </footer>
    );
  }

    export default Footer;


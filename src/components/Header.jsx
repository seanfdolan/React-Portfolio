const styles = {
    link: {
      color: 'white',
      textDecoration: 'none',
    },
    header: {
      backgroundColor: 'blue',
      color: 'white',
      padding: '10px 0',
      textAlign: 'center',
    },
  };

function Header() {
    return (
      <header style={styles.header}>
        <h1>Sean Dolan</h1>
        <h2>Full Stack Web Developer</h2>
        <p>New York, NY</p>
  
      </header>
    );
  }

export default Header;
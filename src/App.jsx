import './index.css';
import BackgroundImage from './assets/LogoCamNgo.png';

function App() {
  return (
    <div
      className="coming-soon"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="overlay">
        <h1>🚧 Coming Soon</h1>
        <p>We are working on this website.</p>
        <p>For inquiries, please contact us at:</p>
        <p>
          Email: <a href="mailto:cam.ngo017@gmail.com">cam.ngo017@gmail.com</a>
        </p>
        <p>
          Tel: <a href="tel:+37455777279">+374 55 77 72 79</a>
        </p>
      </div>
    </div>
  );
}

export default App;

import './App.css';
import ProfilePreview from './components/ProfilePreview';

function App() {
  return (
    <div className="container">
      <ProfilePreview />
      <Post />
      <Leaderboard />
    </div>
  );
}

export default App;

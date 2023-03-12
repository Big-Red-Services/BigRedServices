
import './App.css';
import Post from './components/Post/Post.js'
import Tags from './components/Post/Tags';
import Navbar from './components/Navbar/Navbar.js';
function App() {
  return (
    <><div className="App">
      <div className='App-header'>
      <Navbar></Navbar>
      </div>

      <div className='pageOptions'>
      
        <div className = "chosen" ><span>paid</span></div>
        <div>         
          <span style = {{display:'inline', opacity: 0.5 }}>volunteer</span>
          <span style = {{display:'inline', opacity: 0.5 }}> freelance</span>
        </div>
      </div>
      <div className="custom">
        <h1>All Paid Postings</h1>
      </div>
      <div className = "Promoted">
        <h2>Promoted</h2>
        </div>
        <body className="PostPage">
          <Post paid='true' time='3' expiration='2' description=
          'Deliver Milk Tea from UTea to West Campus. Pay can be in cash or Venmo' 
          payment = '10'  tag='food' tag2 = 'delivery' />

          <Post paid='true' time='5' expiration='6' description=
          'Need someone to do my laundry since I am too busy right now. Pay can be in cash or Venmo' 
          payment = '20'  tag='laundry' tag2 = 'chore' />

          <Post paid='true' time='1' expiration='1' description=
          'Need Someone to help me move. Pay can be in cash or Venmo' 
          payment = '50' tag='moving' tag2= 'chore' />
        </body>
      </div>
      <div className = "Trending Tags">
        <h3>Trending Tags</h3>
        <div className = "TagLine" style={{width: '200px'}}>
          <Tags tag = 'food' color = 'green'></Tags>
          <Tags tag = 'delivery' color = 'red'></Tags>
        </div>
      </div>
      <body className="PostPage">
          <Post paid='true' time='1' expiration='1' description=
          'Deliver some takeout from Big Red Barn to North Campus. ASAP would be appreciated' 
          payment = '15'  tag='food' tag2 = 'delivery' />

          <Post paid='true' time='2' expiration='1' description=
          'Someone pick up some groceries at Wegmans. Chips and other Snacks ' 
          payment = '40'  tag='food' tag2 = 'delivery' />

          <Post paid='true' time='1' expiration='1' description=
          'Can someone deliver a pizza to South Campus plz?' 
          payment = '25' tag='food' tag2 = 'delivery' />
        </body>
    </>

  );
}

export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import wrong from '../public/wrong.jpeg'
// import correct from '../public/correct.jpeg'

function App() {
  const first=[
  { name: "Single User", access: true },
  { name:  "50GB Storage", access: true },
  { name: "Unlimited Public Projects", access: true },
  { name: "Community Access", access: true },
  { name:" Unlimited Private Projects",access:false},
  { name: "Dedicated Phone Support", access: false },
  { name: "Free Subdomain", access: false },
  { name: "Monthly Status Reports", access: false }];
  const second=[
    { name: "5 User", access: true },
    { name:  "50GB Storage", access: true },
    { name: "Unlimited Public Projects", access: true },
    { name: "Community Access", access: true },
    { name:" Unlimited Private Projects",access:true},
    { name: "Dedicated Phone Support", access: true },
    { name: "Free Subdomain", access: true },
    { name: "Monthly Status Reports", access:false }
  ]; 
  const third=[
      { name: "Unlimited User", access: true },
      { name:  "50GB Storage", access: true },
      { name: "Unlimited Public Projects", access: true },
      { name: "Community Access", access: true },
      { name:" Unlimited Private Projects",access:true},
      { name: "Dedicated Phone Support", access: true },
      { name: "Free Subdomain", access: true },
      { name: "Monthly Status Reports", access: true}];


  return (
  
  <> 
  <div className="App container" >
  <div className="first">
  <p style={{color:"lightgray"}}>Free</p>
      <h1>$0/month</h1>
      <hr></hr>
      { first && first.map(
        (data)=>data.access?( <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
      </svg>
      <i className="bi bi-check"></i>{data.name}</p>):(<p style={{color:"lightgray"}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                </svg>
                <i className="bi bi-x"></i>{data.name}</p>)
      )}
  <button className='btn btn-primary'>button`</button>
  </div>
  <div className="second">
  <p style={{color:"lightgray"}}>Plus</p>
      <h1>$9/month</h1>
      <hr></hr>
      { second && second.map(
    (data)=>data.access?( <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
  </svg>
  <i className="bi bi-check"></i>{data.name}</p>):(<p style={{color:"lightgray"}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                </svg>
                <i className="bi bi-x"></i>{data.name}</p>)
      )}
  <button className='btn btn-primary'>button</button>
    </div>
  <div className="third">
  <p style={{color:"lightgray"}}>Pro</p>
      <h1>$49/month</h1>
      <hr></hr>
      { third && third.map(
        (data)=>data.access?( <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
      </svg>
      <i className="bi bi-check"></i>{data.name}</p>):(<p style={{color:"lightgray"}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                </svg>
                <i className="bi bi-x"></i>{data.name}</p>)
      )}
  <button className='btn btn-primary'>button</button>
  </div>
  </div>
</>
  );
}

export default App;

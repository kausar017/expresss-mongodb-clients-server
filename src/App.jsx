
import './App.css'

function App() {

  const handalSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value
    const email = form.email.value
    const password = form.password.value
    const users = { name, email, password }
    console.log(users);
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(users)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          alert('succesfully data inserted')
        }
        form.reset()

      })
  }



  return (
    <>
      <div className='text-center py-[100px]'>
        <h1 className='text-5xl font-bold'>Simple Crud Client Server</h1>
        <div className='flex flex-col justify-center items-center min-h-[600px]'>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handalSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Name" name='name' className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name='email' className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name='password' className="input input-bordered" />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </>
  )
}

export default App

import { useLoaderData } from "react-router-dom";

const Update = () => {
    const updatedData = useLoaderData();
    console.log(updatedData);

    const handaleUpdate = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const newUpdate = { name, email, password };
        console.log(newUpdate);

        fetch(`http://localhost:5000/users/${updatedData._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(newUpdate)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    alert('user updated succesfully')
                }
                form.reset()
            })  
    }

    return (
        <div className="pt-[100px] container mx-auto text-center">
            <h1>user name: {updatedData?.name}</h1>
            <h1>{updatedData.email}</h1>
            <div className="flex flex-col justify-center items-center min-h-[600px]">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handaleUpdate} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name="name" defaultValue={updatedData?.name} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" defaultValue={updatedData?.email} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" defaultValue={updatedData?.password} className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Update;
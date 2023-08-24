import React from 'react';

const ResisterBS = () => {


    const handleSubmit3=(event)=>{
        event.preventDefault();
            const email= event.target.email.value;
            const password= event.target.password.value;
            // setEmail(password);
            console.log(email,password);
    }


    return (
        <form onSubmit={handleSubmit3}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email"    name='email'   class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password"   name='password'   class="form-control" id="exampleInputPassword1"/>
        </div>

        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
          <label class="form-check-label" for="exampleCheck1">Accept Terms And Conditions</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    );
};

export default ResisterBS;
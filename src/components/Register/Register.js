import {auth} from '../../utils/firebase';

export default function Register({
  history
}) {
  const onRegisterFormSubmitHandler = async (e) => {
    e.preventDefault();
    
    const email = e.target.email.value;
    const password = e.target.password.value;
    const rePass = e.target.rePass.value;

    try {
      if(email === '' || password === '') {
        throw 'All fields is requred!';
      }
      if(password !== rePass) {
        throw 'Passwords don\'t match!';
      }
      const user = (await auth.createUserWithEmailAndPassword(email, password)).user;
      history.push('/dashboard');
    } catch(err) {
      if(err.message) {
        err = err.message;
      }
      console.log(err);
    }
    
  };
    
  return (
    <section className="register">
      <form onSubmit={onRegisterFormSubmitHandler}>
        <fieldset>
          <legend>Register</legend>
          <p className="field">
            <label htmlFor="email">Email</label>
            <span className="input">
              <input type="text" name="email" id="email" placeholder="Email" />
              <span className="actions"></span>
              <i className="fas fa-user"></i>
            </span>
          </p>
          <p className="field">
            <label htmlFor="password">Password</label>
            <span className="input">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
              <span className="actions"></span>
              <i className="fas fa-key"></i>
            </span>
          </p>
          <p className="field">
            <label htmlFor="rePass">Repeat Password</label>
            <span className="input">
              <input
                type="password"
                name="rePass"
                id="rePass"
                placeholder="Repeat Password"
              />
              <span className="actions"></span>
              <i className="fas fa-key"></i>
            </span>
          </p>
          <input className="button submit" type="submit" value="Register" />
        </fieldset>
      </form>

      <style jsx>
        {`
          .register form {
            margin: 5rem auto;
          }
          .field .input {
            display: flex;
            position: relative;
            align-items: center;
          }

          .field .input:after {
            display: block;
            content: "";
          }

          .field .input input {
            border: none;
            flex: 1 1 auto;
            padding: 0.8rem;
            outline: none;
            background: transparent;
            z-index: 2;
            order: 2;
          }

          .field .input .fas {
            z-index: 2;
            position: relative;
            padding: 0 0 0 0.8rem;
            font-size: 0.9em;
            order: 1;
          }

          .field .input input + .actions {
            display: block;
            background: #fff;
            border: 1px solid #ccc;
            border-radius: 0.3rem;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 1;
          }

          .field .input input:focus + .actions {
            border-color: #090;
          }

          .field .input input:focus + .actions + .fas {
            color: #090;
          }
          form,
          form fieldset,
          form legend,
          form label,
          form input {
            display: block;
          }

          form fieldset,
          form legend {
            border: 1px solid #666;
            background: #f9f9f9;
            border-radius: 0.3rem;
            box-shadow: 0 0 1rem 0.1rem rgba(0, 0, 0, 0.1);
          }

          form fieldset {
            padding: 2.5em 2em 2em 2em;
            position: relative;
          }

          form legend {
            width: 30%;
            padding: 0.5rem 1rem;
            left: -1px;
            top: -1.4rem;
            position: absolute;
          }

          form label {
            font-weight: bold;
          }
        `}
      </style>
    </section>
  );
}

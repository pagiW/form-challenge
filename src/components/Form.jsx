import React, {useState} from 'react';
import "@styles/form.scss";

const Form = () => {
    let [form, setForm] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: ''
    })
    let [fc, setf] = useState({
        borderColor: ''
    })
    let [lc, setl] = useState({
        borderColor: ''
    })
    let [ec, sete] = useState({
        borderColor: ''
    })
    let [pc, setp] = useState({
        borderColor: ''
    })
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })

        if (e.target.value === '') {
            if (e.target.name === 'first_name') {
                setf({
                    borderColor: '#ff7a7a'
                })
            } else if (e.target.name === 'last_name') {
                setl({
                    borderColor: '#ff7a7a'
                })
            } else if (e.target.name === 'email') {
                sete({
                    borderColor: '#ff7a7a'
                })
            } else {
                setp({
                    borderColor: '#ff7a7a'
                })
            }
        } else {
            if (e.target.name === 'first_name') {
                setf({
                    borderColor: ''
                })
            } else if (e.target.name === 'last_name') {
                setl({
                    borderColor: ''
                })
            } else if (e.target.name === 'email') {
                sete({
                    borderColor: ''
                })
            } else {
                setp({
                    borderColor: ''
                })
            }
        }
    }
    return (
        <section className='form'>
            <div className='offer'>
                <p>Try it free 7 days then $20/mo. thereafter</p>
            </div>
            <form>
                <input style={fc} placeholder='First Name' name='first_name' type='text' autoComplete='name' onChange={handleChange} />
                {fc.borderColor !== '' && <p>First Name cannot be empty</p>}
                <input style={lc} placeholder='Last Name' name='last_name' type='text' autoComplete='name' onChange={handleChange} />
                {lc.borderColor !== '' && <p>Last Name cannot be empty</p>}
                <input style={ec} placeholder='Email Address' name='email' type='text' autoComplete='email' onChange={handleChange} />
                {ec.borderColor !== '' && <p>Email Address cannot be empty</p>}
                <input style={pc} placeholder='Password' name='password' type='password' onChange={handleChange} />
                {pc.borderColor !== '' && <p>Password cannot be empty</p>}
                <button>CLAIM YOUR FREE TRIAL</button>
                <div className='text'>
                    <div className='p'>
                        <p>By clicking the button, you are agreeing to our</p>
                    </div>
                    <div className='link'>
                        <a href='/'>Terms and Services</a>
                        <div></div>
                    </div>
                </div>
            </form>
        </section>
    );
}

export default Form;
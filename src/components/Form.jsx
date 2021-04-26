import React, {useState} from 'react';
import {createPortal} from 'react-dom';
import "@styles/form.scss";

const Form = () => {
    let [show, isShow] = useState(false);
    let [isOk, setOk] = useState(true)
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
    let [cf, setcf] = useState('');
    let [cl, setcl] = useState('');
    let [ce, setce] = useState('');
    let [cp, setcp] = useState('');
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
                setcf('warning')
                e.target.placeholder = '';
            } else if (e.target.name === 'last_name') {
                setl({
                    borderColor: '#ff7a7a'
                })
                setcl('warning')
                e.target.placeholder = '';
            } else if (e.target.name === 'email') {
                sete({
                    borderColor: '#ff7a7a'
                })
                setce('warning')
                e.target.placeholder = '';
                setOk(true);
            } else {
                setp({
                    borderColor: '#ff7a7a'
                })
                setcp('warning')
                e.target.placeholder = '';
            }
        } else {
            if (e.target.name === 'first_name') {
                setf({
                    borderColor: ''
                })
                setcf('')
            } else if (e.target.name === 'last_name') {
                setl({
                    borderColor: ''
                })
                setcl('')
            } else if (e.target.name === 'email') {
                if (e.target.value.includes('@') && e.target.value.includes('.')) {
                    sete({
                        borderColor: ''
                    })
                    setce('')
                    setOk(true)
                }
                else {
                    sete({
                        borderColor: '#ff7a7a',
                        color: '#ff7a7a'
                    });
                    setce('warning');
                    setOk(false);
                }
            } else {
                setp({
                    borderColor: ''
                })
                setcp('')
            }
        }
    }

    const handleClick = () => {
        if (isOk && fc.borderColor === '' && lc.borderColor === '' && ec.borderColor === '' && pc.borderColor === '' && form.first_name !== '' && form.last_name !== '' && form.email !== '' && form.password !== '') {
            isShow(true);
        }
    }

    const handleExit = () => {
        isShow(false);
    }

    onkeyup = (e) => {
        if (e.key === 'Escape') {
            isShow(false);
        }
    }

    return (
        <section className='form'>
            <div className='offer'>
                <p>Try it free 7 days then $20/mo. thereafter</p>
            </div>
            <form>
                <input required style={fc} placeholder='First Name' name='first_name' type='text' autoComplete='name' onChange={handleChange} />
                <div className={cf}>
                    <div className='palo'></div>
                    <div className='point'></div>
                </div>
                {fc.borderColor !== '' && <p>First Name cannot be empty</p>}
                <input required style={lc} placeholder='Last Name' name='last_name' type='text' autoComplete='name' onChange={handleChange} />
                <div className={cl}>
                    <div className='palo'></div>
                    <div className='point'></div>
                </div>
                {lc.borderColor !== '' && <p>Last Name cannot be empty</p>}
                <input required style={ec} placeholder='Email Address' name='email' type='text' autoComplete='email' onChange={handleChange} />
                <div className={ce}>
                    <div className='palo'></div>
                    <div className='point'></div>
                </div>
                {ec.borderColor !== '' && isOk ? <p>Email Address cannot be empty</p> : !isOk ? <p>Looks like this is not an email</p> : ''}
                <input required style={pc} placeholder='Password' name='password' type='password' autoComplete='password' onChange={handleChange} />
                <div className={cp}>
                    <div className='palo'></div>
                    <div className='point'></div>
                </div>
                {pc.borderColor !== '' && <p>Password cannot be empty</p>}
                <button type='button' onClick={handleClick}>CLAIM YOUR FREE TRIAL</button>
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
            {show && createPortal(
                <div className='portal'><div className='modal'>
                    <h1>your user:</h1>
                    <p>your first name: {form.first_name}</p>
                    <p>your last name: {form.last_name}</p>
                    <p>your email address: {form.email}</p>
                    <p>your password: {form.password}</p>
                    <button onClick={handleExit} type='button'>exit</button>
                </div></div>, document.getElementById('modal'))}
        </section>
    );
}

export default Form;
import React from 'react';
import "@styles/form.scss";

const Form = () => {
    return (
        <section className='form'>
            <div className='offer'>
                <p>Try it free 7 days then $20/mo. thereafter</p>
            </div>
            <form>
                <input type='text' />
                <input type='text' />
                <input type='text' />
                <input type='password' />
                <button>CLAIM YOUR FREE TRIAL</button>

            </form>
        </section>
    );
}

export default Form;
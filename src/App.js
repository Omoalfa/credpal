import './App.css';
import emailjs from 'emailjs-com'

import { useState } from 'react';
import Button from './components/Button';
import {  Container } from 'reactstrap';
import { Card, CardGroup } from 'react-bootstrap';
import { MenuFoldOutlined, CloseOutlined } from '@ant-design/icons';
import { ReactComponent as Dochase } from './assets/Dochase.svg';
import { ReactComponent as OpenQuote } from './assets/open-quote.svg';
import { ReactComponent as CloseQuote } from './assets/close-quote.svg';
import { ReactComponent as Cloud } from './assets/cloud.svg';
import card1 from './assets/card-1.png'
import card2 from './assets/card-2.png'
import card3 from './assets/card-3.png'

function App() {
  const [showNav, setShowNav] = useState(false);
  const [loan, setLoan] = useState(800000);
  const [time, setTime] = useState(7);

  const formatNumber = (value) => {
    const Format = new Intl.NumberFormat('en-NG', {
      currency: 'NGN', style: 'currency'
    })

    return Format.format(value);
  }

  const submitForm = (e) => {
    e.preventDefault();
    emailjs.sendForm('PayAsUgo', 'template_csvkhlp', e.target.form, 'UwPCuhqgquoWxqbt4')
    .then(r => alert('we will reach out to you soon!'))
    .catch(e => console.log(e))
  }

  return (
    <div className="App">
      <Container fluid>
        <Container className='top' fluid>
        <div className='header container'>
          <a href='/'><Dochase /></a>
          <div className={`my-nav ${showNav ? 'show' : ''}`}>
            <ul className='nav-bar'>
              <li className='nav-items'><a href='/programatic-solutions.html'>Solutions</a></li>
              <li className='nav-items'><a href='#howitworks'>How it works</a></li>
            </ul>
          </div>
          <div className='hamburger'>
            { 
              showNav ? <CloseOutlined style={{fontSize: '35px'}} onClick={()=>setShowNav(false)} /> 
              : <MenuFoldOutlined style={{fontSize: '35px'}} onClick={()=>setShowNav(true)} />
            }
          </div>
        </div>
        <section className='container first text-center'>
          <h3 className='m-none'>Get up to</h3>
          <h1 className='brand-color p-none m-none'>2 Million Loan</h1>
          <h3>to advertise your business</h3>
        </section>
        </Container>
        <section className='container second'>
          <Card className='budget'>
            <div className='cloud'><Cloud /></div>
            <div className='form-group'>
              <label>
                <span>How much do you need to advertise your business</span>
                <span>Max {formatNumber(2000000)}</span>
              </label>
              <input type='number' value={loan} onChange={(e)=>setLoan(e.target.value)} />
              <div className='display-screen'>{formatNumber(loan)}</div>
            </div>
            <div className='form-group'>
              <input type='range' min='0' max='2000000' step='100000' value={loan} onChange={(e)=>setLoan(e.target.value)} />
              <label>
                <span>{formatNumber(loan)}</span>
                <span>Max 2,000,000</span>
              </label>
            </div>
            <div className='form-group'>
              <label>
                <span>For how long</span>
                <span>Max 24 months</span>
              </label>
              <input type='number' value={time} onChange={(e)=>setTime(e.target.value)} />
              <div className='display-screen'>{time}</div>
            </div>
            <div className='form-group'>
              <input type='range' min='0' max='24' step='1' value={time} onChange={(e)=>setTime(e.target.value)} />
              <label>
                <span>{time} months</span>
                <span>Max 24 months</span>
              </label>
            </div>
          </Card>
        </section>
        <section className='text-center container third'>
            <OpenQuote />
            <div className='col-md-6 text-center m-auto'>
              <p>We believe that you should never stop trying to put your company’s name and products in front of prospective customers.</p>
              <p>
              Our advertising loans can help you implement new marketing 
              strategies that can set your business growth in motion. We also 
              provide you with the infrastructure to run adverts. 
              </p>
            </div>
            <CloseQuote />
        </section>
        <section id='howitworks' className='container text-center fourth'>
          <h1>How it works</h1>
          <div className='steps'><span>Apply</span><hr /><span>Review</span><hr /><span>Advertise</span></div>
          <CardGroup>
            <Card>
              <Card.Img variant='top' src={card1} ></Card.Img>
              <Card.Body>
              Fill out one simple application. There's no fee or obligation, and it won't impact your credit.
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant='top' src={card2} ></Card.Img>
              <Card.Body>
              Your application is reviewed by our account officers and your loan is approved within 48 hours.
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant='top' src={card3} ></Card.Img>
              <Card.Body>
              Your advertising loan is ready for you to advertise. 
              </Card.Body>
            </Card>
          </CardGroup>
        </section>
        <section className='fifth'></section>
        <section id='apply' className='sixth'>
          <div className='container'>
          <h3 className='text-center'>Application Form</h3>
          <form>
            <div className='app-form-group'>
              <label>Business Name</label>
              <input name='buniess_name' type='text' required />
            </div>
            <div className='app-form-group flex'>
              <div className='app-form-group'>
                <label>Registration No.</label>
                <input name='reg_no' type='text' required />
              </div>
              <div className='app-form-group'>
                <label>Website URL</label>
                <input name='url' type='url' required />
              </div>
            </div>
            <div className='app-form-group flex'>
              <div className='app-form-group'>
                <label>Email Address</label>
                <input name='email' type='email' required />
              </div>
              <div className='app-form-group'>
                <label>Phone No.</label>
                <input name='phone' type='tel' required />
              </div>
            </div>
            <div className='app-form-group'>
              <label>What is your minimum annual net revenue?</label>
              <input name='revenue' type='number' step='1000' required />
            </div>
            <button className='d-button primary' onClick={submitForm} type='submit'>Submit</button>
          </form>
          </div>
        </section>
        <section className='container seventh'>
          <h3>FAQs</h3>
          <div className='row'>
            <div className='col-md-4'>
              <p>How much does it cost to apply for an advertising loan? </p>
              <p>Applying for an advertising loan is completely FREE. </p>
              <a href='#apply'><Button text='Apply now' /></a>
            </div>
            <div className='col-md-4'>
              <p>How much will you give me?</p>
              <p>This depends on your advertising needs, budget, timelines, and qualifications - but comparing and choosing the right small business loan is easier than you think. To get started, simply fill out the application.</p>
            </div>
            <div className='col-md-4'>
              <p>What are the benefits of acquiring a loan from you?</p>
              <p>Acquiring a loan from us means you also get to use our advertising infrastructure with superior targeting capabilities, which allows you to place your business right in fron of your interested audience. </p>
            </div>
          </div>
        </section>
        <section>

        </section>
        <footer>
          <Container>Need support? Reach out to us <a href='http://dochase.com'>@dochase.com</a></Container>
        </footer>
      </Container>
    </div>
  );
}

export default App;

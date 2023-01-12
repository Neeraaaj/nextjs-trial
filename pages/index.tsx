import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import styles from '../styles/Home.module.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {animate, motion} from 'framer-motion'
import AnimatedTextCharacter from "../component/animationtext";
import {useForm} from 'react-hook-form'

export default function Home() {
  const {register, handleSubmit, reset,formState:{errors}} = useForm()
  
  function submitHandler(data: any){
    console.log(data);

    fetch("./api/sheet", {
      method: 'POST',
      body:JSON.stringify(data),
      headers:{
        'Content-Type':'application/json'
      }
    })
    reset()
  }
  return (
    <div className={styles.container} style={{backgroundColor: 'white'}}>
      {/* <div className="bg-wrap">
        <img src='./edited.jpg' style={{width: '110vw', margin: '0px', zIndex: '-10', left: '0', position: 'absolute', filter: 'blur(2.2px)' }}></img>
      </div> */}
        <Head>
          <title>WASHO</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="../favicon/washo.ico" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" ></link>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" />
          <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"></link>
          <script src="https://kit.fontawesome.com/54269ac8ae.js" crossOrigin="anonymous"></script>
          <link rel="apple-touch-icon" sizes="180x180" href="../favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="../favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="../favicon/favicon-16x16.png" />
          <link rel="manifest" href="../favicon/site.webmanifest" />
        </Head>
        
        <div className="upper-container" style={{width: '60px'}} >
          <input type="checkbox" id="trigger" />
          <nav style={{zIndex: '12', position: 'fixed'}}>
            <ul className='menu01'>
                <li>
                    <label htmlFor="trigger" className='trigger'>
                      <i className='fa fa-bars'></i>
                    </label>
                </li>
                <li className='fa fa-car'></li>
                <li><i className='fa fa-calendar'></i></li>
                <li><i className='fa fa-phone'></i></li>
            </ul>

            <ul className='menu02'>
              <a href="#services" style={{textDecoration: "none"}}><li style={{paddingTop: '10px'}}>Services</li></a>
              <a href="#form" style={{textDecoration: "none"}}><li style={{paddingTop: '10px', fontSize: "17px"}}>Appointment</li></a>
              <a href="#contact" style={{textDecoration: "none"}}><li style={{paddingTop: '10px'}}>Contact</li></a>
            </ul>
          </nav>
        </div>
        
        <main className={styles.main}>
          <motion.div className="heading" initial='hidden' animate='visible' variants={{
            hidden:{
              scale: 12,
              opacity: 0
            },
            visible:{
              scale: 1,
              opacity: 1,
              transition: {
                delay: .2
              }
            },
          }}>
            <h1 className={styles.title} style={{fontFamily:'amarante', fontSize: '30vw', textShadow: '8px 9px 12px rgba(0,0,0.10,0.9)', color: 'white', fontWeight: 'bolder'}}>
              WASHO
            </h1>
          </motion.div>  
          

          <div className={styles.description} style={{fontFamily: 'amarante', fontSize: '2rem', marginTop: '1vh', zIndex: '10', animationDelay: "2s", textShadow: '3px 2px 1px rgba(0,0,0,1)', color:'white'}}>
              INDIA'S MOST AFFORDABLE DETAILING SERVICES
          </div>
        </main>

        {/* <footer className={styles.footer}>
          
        </footer> */}
        <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 21 150 49" preserveAspectRatio="none" shapeRendering="auto" style={{ marginTop: '-30vh', height: '349', width: '100%' }}>
          <defs>
          <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className="parallax">
          <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(25,355,555,0.20" />
          <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.51)" />
          <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.30)" />
          <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </svg>
        <div className="section2" style={{columnGap: '10px'}}>
            <h1 style={{ fontFamily:'amarante', textAlign: 'center', color: 'black', fontSize: '5vh'}}>WHAT WE <span style={{color: 'aqua'}}>DO</span></h1>
            <br />
            <h3 style={{color: 'black', textAlign: 'center', fontFamily: 'Amarante'}}>WE PROVIDE THE MOST AFFORDABLE DOORSTEP CLEANING SERVICES</h3>
            <br />
            <div className="container2" id='services'>
              <div className="row">
                <div className="col-md-4">
                  <div className="service-box layout">
                    <div className="icon"><i className='fa fa-car' style={{fontSize: '55px', color: 'white'}}></i></div>
                    <div className="img-in" style={{marginTop: '-85px'}}>
                      <a href="#">
                        <Image src={"https://images.unsplash.com/photo-1543857182-68106299b6b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"} width={375} height={375} alt="" style={{borderRadius: '10px 10px 70px 70px'}}/>
                      </a>
                    </div>
                    <div className="img-icon-box-content">
                      <h1 className="title" style={{fontSize: '55px', fontFamily: 'Amarante', color: 'white', fontWeight:'bolder'}}>DEEP CLEANING</h1>
                        <div className="card-desc" style={{color: 'white'}}>
                          <ul>
                            <li>-FULL INTERIOR CLEANING</li>
                            <li style={{fontWeight: 'bolder'}}>-DEEP SEATS CLEANING (GIVES COMPLETE FRESH LOOKS)</li>
                            <li>-DEEP ROOF CLEANING</li>
                            <li>-DEEP DOOR CLEANING</li>
                            <li>-DEEP DASHBOARD CLEANING</li>
                            <li>-DEEP FLOOR CLEANING</li>
                            <li>-DEEP AC VENT FOAM CLEANING</li>
                            <li>-SEATBELT'S CLEANING</li>
                            <li>-INTERIOR POLISHING</li>
                            <li>-DEEP EXTERIOR CLEANING</li>
                            <li>-DEEP RIM CLEANING</li>
                            <li>-UNDERBODY CLEANING</li>
                            <li>-HEADLIGHT/TAILLIGHT ENHANCEMENT</li>
                            <li>-GLASS CLEANING</li>                            
                            <li>-MATT CLEANING</li>
                            <li>-DEEP ENGINE BAY CLEANING</li>
                            <li>-EXTERIOR TEFLON COATING (REMOVES SWIRL MARKS & MINOR SCRATCHES )</li>
                            <li>-MIRROR & HYDROPHOBIC FINISHING ( ENHANCES CAR PAINT )</li>
                          </ul>
                        </div>
                        <a href="#form">
                          {/* <button type='submit' style={{fontFamily: 'Amarante'}} className='subscription'>SUBSCRIBE</button> */}
                          <div className="button">
                              <p className="btnText" style={{fontFamily: 'Amarante'}}>CLICK HERE FOR APPOINTMENT</p>
                              <div className="btnTwo">
                                <p className="btnText2" style={{fontFamily: 'Amarante', fontSize: '12px'}}>FILL FORM</p>
                              </div>
                          </div>
                        </a>    
                    </div>    
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="service-box layout">
                    <div className="icon"><i className='fa fa-car' style={{fontSize: '55px', color: 'white'}}></i></div>
                    <div className="img-in" style={{marginTop: '-85px'}}>
                      <a href="#">
                        <Image src="https://img.freepik.com/free-photo/man-washing-his-car-garage_1157-26072.jpg?w=740&t=st=1671029404~exp=1671030004~hmac=69ac65e7a73d3b7612ef0fd652fd6642dfa1c683a05560b9699e1a30d885593c" alt="" width={500} height={500} style={{borderRadius: '10px 10px 55px 55px'}}/>
                      </a>
                    </div>
                    <div className="img-icon-box-content">
                      <h1 className="title" style={{fontSize: '55px', fontFamily: 'Amarante', color:'white', fontWeight: 'bolder'}}>INTERIOR CLEANING</h1>
                        <div className="card-desc" style={{color: 'white'}}>
                          <ul>
                            <li>-FULL INTERIOR CLEANING</li>
                            <li>-DEEP SEATS CLEANING (GIVES COMPLETE FRESH LOOKS)</li>
                            <li>-DEEP ROOF CLEANING</li>
                            <li>-DEEP DOOR CLEANING</li>
                            <li>-DEEP DASHBOARD CLEANING</li>
                            <li>-DEEP FLOOR CLEANING</li>
                            <li>-DEEP AC VENT FOAM CLEANING</li>
                            <li>-SEATBELT'S CLEANING</li>
                            <li>-INTERIOR POLISHING</li>
                          </ul>
                        </div>
                        <a href="#form">
                          {/* <button type='submit' style={{fontFamily: 'Amarante'}} className='subscription'>SUBSCRIBE</button>   */}
                          <div className="button">
                              <p className="btnText" style={{fontFamily: 'Amarante'}}>CLICK HERE FOR APPOINTMENT</p>
                              <div className="btnTwo">
                                <p className="btnText2" style={{fontFamily: 'Amarante', fontSize: '12px'}}>FILL FORM</p>
                              </div>
                          </div>
                        </a>
                    </div>    
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="service-box layout">
                    <div className="icon"><i className='fa fa-car' style={{fontSize: '55px', color: 'white'}}></i></div>
                    <div className="img-in" style={{marginTop: '-85px'}}>
                      <a href="#">
                        <Image src={"https://images.pexels.com/photos/6873088/pexels-photo-6873088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} width={500} height={500} alt=""  style={{borderRadius: '10px 10px 55px 55px'}}/>
                      </a>
                    </div>
                    <div className="img-icon-box-content">
                      <h1 className="title" style={{fontSize: '55px', fontFamily: 'Amarante', color:'white', fontWeight: 'bolder'}}>EXTERIOR CLEANING</h1>
                        <div className="card-desc" style={{color: 'white'}}>
                          <ul>
                            <li>-INTERIOR VACUUMING</li>
                            <li>-DEEP EXTERIOR CLEANING</li>
                            <li>-DEEP RIM CLEANING</li>
                            <li>-UNDERBODY CLEANING</li>
                            <li>-HEADLIGHT/TAILLIGHT ENHANCEMENT</li>
                            <li>-GLASS CLEANING</li>                            
                            <li>-MATT CLEANING</li>
                            <li>-DEEP ENGINE BAY CLEANING</li>
                            <li>-EXTERIOR TEFLON COATING (REMOVES SWIRL MARKS & MINOR SCRATCHES )</li>
                            <li>-MIRROR & HYDROPHOBIC FINISHING ( ENHANCES CAR PAINT )</li>
                          </ul>
                        </div>
                        <a href="#form">
                          {/* <button type='submit' style={{fontFamily: 'Amarante'}} className='subscription'>SUBSCRIBE</button> */}
                          <div className="button">
                              <p className="btnText" style={{fontFamily: 'Amarante'}}>CLICK HERE FOR APPOINTMENT</p>
                              <div className="btnTwo">
                                <p className="btnText2" style={{fontFamily: 'Amarante', fontSize: '12px'}}>FILL FORM</p>
                              </div>
                          </div>
                        </a>    
                    </div>    
                  </div>
                </div>
                <div className="wrapper">
                  <h3 className='card-title' style={{fontWeight: "lighter", fontSize: '45px'}}>Announcing Our Subscription Plan</h3>
                  <span><Image src="https://cdn.pixabay.com/photo/2022/06/29/17/53/megaphone-7292261_960_720.png" alt="" width={500} height={100} style={{width: "95px", left: "6%",marginTop: "-20px",position:"absolute", zIndex: "2", overflowY: "visible"}}/></span>

                  <div className="cols">
                    <div className="col">
                      <div className="container">
                        <div className="front">
                          <div className="inner">
                            <h2 style={{fontSize: "30px", fontFamily: "Amarante",fontWeight:'bolder'}}>Get Deep Cleaning 3 Services Per Year.</h2>
                            <ul style={{fontSize: "12px", fontWeight: 'bold'}}>
                              <li>Cleaning Includes Deep Interior And Exterior Windows</li>
                              <li>Upholstery</li>
                              <li>Engine Bay</li>
                              <li>Interior Polishing</li>
                              <li>Exterior Polishing</li>
                              <li>Headlight/Taillight Enchancement + Teflon Coating (Removes Minor Scratches And Swirl Marks)</li>
                              <b>Services Are Spread Over 4 Months Which Means You Can Book Any Time Of The Year.</b>
                              <li>Hatchback - ₹6299/-</li>
                              <li>Sedan/Mid Size SUV - ₹7199/-</li>
                              <li>Large SUV/MUV is prices at - <b>*₹8599*</b></li>
                            </ul>
          
                          </div>
                        </div>
                        <div className="back">
                          <div className="inner">
                            <h2 style={{fontSize: "26px", fontFamily: "Amarante", fontWeight: 'bolder'}}>Get 12 Premium Services Per Year</h2>
                            <ul style={{fontSize: "11px",fontWeight: 'bolder'}}>
                              <li>Full Interior Cleaning</li>
                              <li>Full Exterior Cleaning</li>
                              <li>Exterior Foam Wash</li>
                              <li>Exterior Pressure Wash</li>
                              <li>Exterior Wax Polish</li>
                              <li>Scratch Removal Process (Every 3 Month)</li>
                              <li>Interior Polishing</li>
                              <li>Tyre Dressing</li>
                              <li>Matt Cleaning</li>
                              <li>Interior Vacuuming</li>
                              <li>Engine Bay Cleaning</li>
                              <li>Roof Cleaning (Every 3 Month)</li>
                              <li>Deep A/C Vent Foam Cleaning(Every 3 Month)</li>
                              <b>These Are The Services You Will Get In Our Yearly Plan</b>
                              <li><b>Hatchback - ₹13999</b></li>
                              <li><b>Sedan/Mid Size SUV - ₹15999</b></li>
                              <li><b>Large SUV/MUV - ₹18999</b></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
              
        </div>
        <br />
        
        <div className="container-form" style={{marginTop: '260px'}}>
            <div className="row m-5 no-gutters shadow-lg" style={{ boxShadow: '45px' }}>
                <div className="col-md-6 d-none d-md-block" style={{ background: "black" }}>
                  <iframe src='https://my.spline.design/krillincopy-f495517d7cf230640adab8067817ca8b/' width='100%' height='100%' style={{boxShadow: '5px 5px 6px gray'}}></iframe>
                </div>
                <div className="col-md-6 p-5" style={{ background: "linear-gradient(to bottom right, black 60%, aliceblue 30%)", boxShadow: 'inset 0px 0px 20px rgba(255, 255, 255, 1.5)',borderRadius: '16px' }}>
                    <h3 className="pb-3" style={{ fontFamily: 'Amarante', textAlign:'center', fontWeight: 'bolder', color:'white'}}>BOOK YOUR APPOINTMENT</h3>
                    <div className="form-style">
                        <form onSubmit={handleSubmit(submitHandler)} autoComplete='off' id='form'>
                            <>  
                              <div className="form-group pb-3">
                                  <input type="text" placeholder="Your Name" className="form-control" id="exampleName1" {...register('Name', {required: "Please fill in your name"})} />
                                  {/* {errors.Name && errors.Name.message} */}
                              </div>
                              <div className="form-group pb-3">    
                                  <input type="email" placeholder="Email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register('Email',{required: "Please fill in your Email Id"} )}/>   
                                  {/* {errors.Email && errors.Email.message} */}
                              </div>
                              <div className="form-group pb-3">   
                                  <input type="tel" placeholder="Mobile no" className="form-control" id="exampleInputPassword1" pattern='[0-9]{4}[0-9]{2}[0-9]{4}' maxLength={10} {...register('Mobile', {required: "Please fill in your Mobile no"})}/>
                                  {/* {errors.Mobile && errors.Mobile.message} */}
                              </div>
                            </>  
                            <label style={{fontFamily: "Amarante", color:'white'}}><b>Service: </b></label>
                            <select style={{fontFamily: "Amarante", marginLeft: '20px'}} {...register('Service')}>
                              <option value="deepcleaning" style={{fontFamily: "Amarante"}}>Deep Cleaning</option>
                              <option value="interiorcleaning" style={{fontFamily: "Amarante"}}>Interior Cleaning</option>
                              <option value="exteriorcleaning" style={{fontFamily: "Amarante"}}>Exterior Cleaning</option>
                            </select> <br />
                            <label htmlFor="" style={{fontFamily: "Amarante", color:'white'}}><b>Choose Date for Appointment: </b></label><input type="date" id="" min={"2022-12-27"} style={{marginLeft: '5px'}} {...register('Appointment', {required: "Please choose a date for Appointment"})} required/> <br />
                            <label style={{fontFamily: "Amarante", color:'white', fontWeight: 'bolder'}}>Choose Your Time Slot: </label>
                            <select style={{fontFamily: "Amarante", marginLeft: "20px"}} {...register('Time')}>
                              <option value="10am">10 AM</option>
                              <option value="2pm">2 PM</option>
                            </select>

                            <div className="pb-2">
                                <button type="submit" className="btn btn-dark w-100 font-weight-bold mt-2" style={{ fontFamily: 'Amarante' }}>Submit</button>
                            </div>
                       </form> 
                    </div>
                </div>
            </div>
        </div>
        <div className="image-left" id='contact'>
          <div className="heading">
            <h1 style={{textAlign: "center", marginTop: "15px", fontFamily: "Amarante", fontWeight: "bolder"}}>CONTACT US AT</h1>
          </div>
          <div className="contac_image" style={{marginLeft: "15px", boxShadow: "10px 14px 10px 10px grey"}}>
            <Image className="col-lg-0 ml-lg-5" src="https://img.freepik.com/free-vector/organic-flat-customer-support-illustration_23-2148899134.jpg?w=740&t=st=1673180361~exp=1673180961~hmac=ccba984fabdcc7fc179fb85d3b231dd888e5aeb5596d3aaa0d1cffc7f6d947c0" alt="" style={{width: "45%"}} width={500} height={500} id="contact" />
          </div>  
          <div className="main" style={{color: 'white'}}>
            <div className="icon1 fb">
              <i className="fa-brands fa-instagram" style={{color: "white"}}></i>
              <a href="https://www.instagram.com/washo.in/?hl=en" style={{textDecoration: "none"}}><span>washo.in</span></a>
            </div>
            <div className="icon1 twt">
              <i className="fa-brands fa-whatsapp" style={{color: "white"}}></i>
              <a href="tel:+919987960512"><span style={{fontSize: "40px"}}>+91 9987960512</span></a>
            </div>
            <div className="icon1 lnk">
              <i className="fa-solid fa-envelope" style={{color: "white"}}></i>
              <span>inwasho@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="footer">
          <h1 className="col-lg-12 text-larger" id="head" style={{color: "white",fontFamily: "Amarante", position: "absolute", marginTop: "15%", zIndex: "1"}}>WASHO</h1>
          <p className="p-3" style={{position: "absolute", marginTop: "22%", zIndex: "1", color: "white"}}>Copyright © 2023</p>
          <svg id="wave" style={{ transform:"rotate(0deg)", transition: "0.3s", zIndex: "-1" }} viewBox="0 0 1440 490" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stopColor="rgba(0, 73.603, 255, 1)" offset="0%"></stop><stop stopColor="rgba(0, 246.362, 255, 1)" offset="100%"></stop></linearGradient></defs><path style={{ transform:"translate(0, 0px)", opacity:"1", fill:"url(#sw-gradient-0)" }} d="M0,49L120,106.2C240,163,480,278,720,285.8C960,294,1200,196,1440,130.7C1680,65,1920,33,2160,40.8C2400,49,2640,98,2880,163.3C3120,229,3360,310,3600,294C3840,278,4080,163,4320,114.3C4560,65,4800,82,5040,89.8C5280,98,5520,98,5760,98C6000,98,6240,98,6480,130.7C6720,163,6960,229,7200,236.8C7440,245,7680,196,7920,163.3C8160,131,8400,114,8640,147C8880,180,9120,261,9360,245C9600,229,9840,114,10080,106.2C10320,98,10560,196,10800,228.7C11040,261,11280,229,11520,187.8C11760,147,12000,98,12240,81.7C12480,65,12720,82,12960,138.8C13200,196,13440,294,13680,294C13920,294,14160,196,14400,147C14640,98,14880,98,15120,138.8C15360,180,15600,261,15840,310.3C16080,359,16320,376,16560,383.8C16800,392,17040,392,17160,392L17280,392L17280,490L17160,490C17040,490,16800,490,16560,490C16320,490,16080,490,15840,490C15600,490,15360,490,15120,490C14880,490,14640,490,14400,490C14160,490,13920,490,13680,490C13440,490,13200,490,12960,490C12720,490,12480,490,12240,490C12000,490,11760,490,11520,490C11280,490,11040,490,10800,490C10560,490,10320,490,10080,490C9840,490,9600,490,9360,490C9120,490,8880,490,8640,490C8400,490,8160,490,7920,490C7680,490,7440,490,7200,490C6960,490,6720,490,6480,490C6240,490,6000,490,5760,490C5520,490,5280,490,5040,490C4800,490,4560,490,4320,490C4080,490,3840,490,3600,490C3360,490,3120,490,2880,490C2640,490,2400,490,2160,490C1920,490,1680,490,1440,490C1200,490,960,490,720,490C480,490,240,490,120,490L0,490Z"></path></svg>
        </div>
    </div>
  )
}

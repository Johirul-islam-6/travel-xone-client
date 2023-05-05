import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from '../../styles/mainService.module.css';
import Link from "next/link";

const Plain = () => {
    const router = useRouter();
    const id = router.query.plain;
    const [transport, setTransport] = useState({});
    const [one, setOne] = useState(null)
    const [two, setTwo] = useState(null)
    const [three, setThree] = useState(null);
    const [price,setPrice] = useState()
    const [seat,setSeat] = useState(1)

    useEffect(() => {
        fetch(`https://assignment-11-server-ridoymia.vercel.app/transport/${id}`)
            .then(res => res.json())
            .then(data => {

                setTransport(data)
                setPrice(data?.Price)
                setOne(data?.images[0])
                setTwo(data?.images[1])
                setThree(data?.images[2])



            })
    }, []);
    const inCrease = ()=>{
        setSeat(seat + 1)
      
    };
    const deCrease =()=>{
        if(seat > 1){
            setSeat(seat -1)
            
        }
        
        
    }


    return (
        <div className="bg-light-800">
            
            <div className="py-3">
                <img className={styles.transportBanner} src={two}></img>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lx:grid-cols-2">
                <div>
                    <div className="carousel w-full">
                        <div id="slide1" className="carousel-item relative w-full">
                            <img src={one} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <img src={two} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <img src={three} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    <div className="shadow-md py-5 px-5 rounded-sm">
                        <h2 className="text-2xl py-3 text-blue-800 text-left font-semibold">{transport.PlaneName}</h2>
                        <h2 className="text-left text-xl pb-3">Departure place = {transport.Destinations}</h2>
                        <p className="text-left text-3xl font-bold pb-5"> Price {transport.Price}</p>
                        <p className="text-left">{transport.Descriptions}</p>
                        {/* The button to open modal */}
                    
                      <label htmlFor={transport.id} className="btn text-left align-left justify-left my-3">Book now</label>
                     

                        {/* Put this part before </body> tag */}
                        <input type="checkbox" id={transport.id} className="modal-toggle" />
                        <div className="modal">
                        
                            <div className="modal-box py-12"> 
                           

                            <div className="modal-action self-center px-5">
                                    <label htmlFor={transport.id} className="outline outline-offset-2 outline-pink-500">X</label>
                                    
                                </div>
                                <p className="py-5 text-xl font-semibold">Total price :{price * parseInt(seat)} </p>
                               <div>
                                  
                                 <div className="grid grid-cols-3 py-5">
                                    <div></div>
                                 <div className="flex justify-evenly items-center">
                                    <button className="btn text-left align-left justify-left" onClick={deCrease}>-</button>
                                      <p className="px-5">{seat}</p>
                                    <button className="btn text-left bg-light-800 text-black-600 align-left justify-left" onClick={inCrease}>+</button>
                                  </div>
                                 </div>

                               <form>
                                <input type="email" placeholder="Email" className="input input-bordered input-sm w-full max-w-xs my-1" />
                                <input type="number" placeholder="Phone number" className="input input-bordered input-sm w-full max-w-xs my-1" />
                                <input type="text" placeholder="country" className="input input-bordered input-sm w-full max-w-xs my-1" />
                                <input type="date" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs my-1" /><br></br>
                                <button type="submit" className="btn mt-4 ">Book</button>
                                </form>
                               </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Plain;

import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import './Home.css';

const Home = () => {

    let navigate = useNavigate();

    //Primero comprobamos en el hook si tenemos el token (estamos logeados)
    const [credenciales, setCredenciales] = useState(JSON.parse(localStorage.getItem("dataUser")));



    const takeMeLogin = () => {
        setTimeout(()=>{
            navigate("/login");
        },1500)
    }

    if(credenciales?.dataUser?.token !== undefined){

        return(
            <div>
                Hola {credenciales.dataUser.nombre}, bienvenido a tu app favorita
            </div>
        )

    }else{
        return(
            <div className='designHome'>
                Hola foraster@, debes de logearte primero....
                <div className='designBotonHome' onClick={()=>takeMeLogin()}>
                    LOGIN
                </div>
            </div>
            
        )
    }

    
}

export default Home;
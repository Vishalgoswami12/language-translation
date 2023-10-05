import React from "react"
import Menu from "../components/menu"
import Languageoption from '../components/language-dropdown'
import {useTranslation} from 'react-i18next'
import i18next from "i18next"
const Home = () => {
    const {t} = useTranslation();
    const handleClick=(e)=>{
        i18next.changeLanguage(e.target.value)
    }
    return(
        <div style={{marginTop:'50px'}}>
            <Menu/>
            <Languageoption onChange={(e)=> handleClick(e)}/>
            <h1>{t('welcome')} {t('home')} || Vishal Goswami {t('React')} Frontend Developer</h1>
            </div>
        
    )
}
export default Home;
import React, {useState} from 'react'

const Arrow = ({AOS}) => {

    const [closeMiddle, setCloseMiddle] = useState("tall")
    const [stopped, setStopped] = useState("arrow no")

    const handleMiddle = () => {
        if (closeMiddle === "tall") {
            setCloseMiddle("short")
            setStopped("arrow yes")
        } else {
            setCloseMiddle("tall")
            setStopped("arrow no")
        }
    }
  return (
        <a href="#about" className={stopped} data-aos="slide-up" data-aos-duration="1000" data-aos-offset="-50">
            <div id="rectangle"></div>
            <div id="triangle"></div>
        </a>
  )
}

export default Arrow
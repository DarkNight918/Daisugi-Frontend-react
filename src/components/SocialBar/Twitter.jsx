import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Twitter = () => {
  return (
    <div className='flex flex-col gap-2'>
      <div className='bg-[#292929] px-5 py-2 flex gap-3 items-center rounded-lg hover:opacity-[0.8] cursor-pointer'>
        <FontAwesomeIcon
          icon={faTwitter}
          size="2x"
          color="#1c9cea"
        />
        <div className='text-white text-[13px]'>
          Lorem ipsum dolor sit amet consectetur. Velit placerat risus adipiscing aliquet .
        </div>
      </div>
      <div className='bg-[#292929] px-5 py-2 flex gap-3 items-center rounded-lg hover:opacity-[0.8] cursor-pointer'>
        <FontAwesomeIcon
          icon={faTwitter}
          size="2x"
          color="#1c9cea"
        />
        <div className='text-white text-[13px]'>
          Lorem ipsum dolor sit amet consectetur. Velit placerat risus adipiscing aliquet .
        </div>
      </div>
      <div className='bg-[#292929] px-5 py-2 flex gap-3 items-center rounded-lg hover:opacity-[0.8] cursor-pointer'>
        <FontAwesomeIcon
          icon={faTwitter}
          size="2x"
          color="#1c9cea"
        />
        <div className='text-white text-[13px]'>
          Lorem ipsum dolor sit amet consectetur. Velit placerat risus adipiscing aliquet .
        </div>
      </div>
    </div>
  )
}

export default Twitter
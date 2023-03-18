import React from 'react'
import logo from '../asset/logo.png'
const Footer = () => {
  return (
    <div className='bottom-0 left-0 w-full bg-[#f0f4f8]'>
        <div className='flex flex-col items-center justify-center space-y-2 pb-2 pt-16'>

            <div className='flex flex-col items-center justify-center w-full'>
                <div className='w-full px-28 text-[#6c757d] text-sm pb-12'>
                    Disclaimer: MyBricks Finance Ltd recognises that the NFT contracts that are planned to be minted in the future are likely deemed securities and the company is currently working towards authorisation with the appropriate regulatory bodies. The NFTs will not be minted until authorisation has been granted or clearance to mint under the relevant regulatory body has been explicitly given. BRICKS tokens that are purchased at this time are utility tokens only and can be used to access features of the MyBricks platform. BRICKS tokens bare no rights to ownership of assets. 
                </div>
                <div className='flex justify-evenly text-xs text-[#6c757d] font-semibold w-full -ml-[20%]'>

                    <div className=''>
                    <img
                src={logo}
                
                alt=""
                className="h-[50px] w-[182px]"
              />
                    </div>
                    <div className='mb-2 space-y-4'>
                        <p>Navigate</p>
                        <p>Knowledgebase</p>
                        <p>Team</p>
                        <p>FAQ's</p>
                        <p>BRICKS Token Agreement</p>
                        <p>AMA Videos</p>
                        <p>Learning Materials</p>
                    </div>

                    <div className='mb-2 space-y-4'>
                        <p>Chat to us</p>
                        <p>Telegram</p>
                        <p>Discord</p>
                    </div>
                    <div className='mb-2 space-y-4'>
                        <p>Social</p>
                        <p>Twitter</p>
                        <p>Reddit</p>
                        <p>YouTube</p>
                        <p>Facebook</p>
                        <p>Instagram</p>
                        <p>TikTok</p>
                    </div>

                </div>
            </div>
            <div className='p-2 text-[#6c757d] text-sm'>
                Copyright © 2023 MyBricks Finance 
            </div>
            <div className='text-[#6c757d] font-bold text-sm'>
                <a href='https://mybricksfinance.com/privacy-policy'> Privacy Policy </a>
                <span className="font-semibold">&nbsp;|&nbsp;</span>
                <a href='https://mybricksfinance.com/terms-conditions'> Terms & Conditions </a>
            </div>

        </div>
    </div>
  )
}

export default Footer
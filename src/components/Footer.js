import React from 'react'
import logo from '../asset/logo.png'
const Footer = () => {
  return (
    <div className='bottom-0 left-0 w-full bg-[#f0f4f8]'>
        <div className='flex flex-col items-center justify-center space-y-2 pb-2 pt-16'>

            <div className='flex flex-col items-center justify-center w-full'>

                <div className='w-full px-8 md:px-28 text-[#6c757d] text-sm pb-12'>
                    Any investment made in connection with MyBricks 2.0 is solely at the Participant's own risk. The Company is not liable for any financial loss or other damages that may result from such investment. The Participant should carefully consider all risks before making any investment and should seek professional advice if necessary. The Company makes no representations or warranties, express or implied, regarding the value or potential value of the Tokens or the success of the Platform. The Participant is solely responsible for conducting their own due diligence and evaluating the potential risks and rewards associated with investing in Tokens. 
                </div>

                <div className='flex flex-col md:flex-row justify-evenly text-xs text-[#6c757d] font-semibold w-full ml-10 md:-ml-[20%]'>
                    <div className=''>
                    <img
                src={logo}
                
                alt=""
                className="h-[50px] w-[182px]"
              />
                    </div>
                    
                    <div className='mb-2 space-y-4 pb-4 md:pb-0'>
                        <p className='text-[#002159] font-bold'> <a href='https://docs.airbrick.finance/mybricks-2.0-innovations' target='_blank'> Navigate</a> </p>
                        <p> <a href='https://docs.airbrick.finance/protocol/referral-system-and-whitelisted' target='_blank'>Referral System & Whitelisted</a> </p>
                        <p> <a href='/teams' target='_blank'>Team</a> </p>
                        <p> <a href='https://docs.airbrick.finance/protocol/faq' target='_blank'>FAQ's</a> </p>
                        <p> <a href='https://docs.airbrick.finance/legal/token-sales-agreement' target='_blank'>Token Agreement</a> </p>
                        <p> <a href='https://docs.mybricksfinance.com/knowledge-base/learning-resources/amas' target='_blank'>AMA Videos</a> </p>
                        <p> <a href=''>Learning Materials</a> </p>
                    </div>

                    <div className='mb-2 space-y-4 pb-4 md:pb-0'>
                        <p className='text-[#002159] font-bold'> Chat to us </p>
                        <p> <a href='https://t.me/airbrickfinance' target='_blank'>Telegram</a> </p>
                    </div>

                    <div className='mb-2 space-y-4 pb-4 md:pb-0'>
                        <p className='text-[#002159] font-bold'>Social</p>
                        <p> <a href='https://twitter.com/MyBricksFinance' target='_blank'>Twitter</a> </p>
                        <p> <a href='https://www.reddit.com/r/MyBricksFinance/' target='_blank'>Reddit</a> </p>
                        <p> <a href='https://www.youtube.com/channel/UCSy6_IckShnzQjfJw5Xh9qQ/featured' target='_blank'>YouTube</a> </p>
                        <p> <a href='https://www.facebook.com/MyBricksFinance/' target='_blank'>Facebook</a> </p>
                        <p> <a href='https://www.instagram.com/mybricksfinance/' target='_blank'>Instagram</a> </p>
                        <p> <a href='https://www.tiktok.com/@mybricksfinance' target='_blank'>TikTok</a> </p>
                    </div>

                </div>
            </div>
            <div className='p-2 text-[#6c757d] text-sm'>
            Copyright © 2023 | MyBricks 2.0 | Made with ❤️in 🇬🇧 
            </div>
            <div className='text-[#6c757d] font-bold text-sm'>
                <a href='https://docs.airbrick.finance/legal/privacy-policy'> Privacy Policy </a>
                <span className="font-semibold">&nbsp;|&nbsp;</span>
                <a href='https://mybricksfinance.com/terms-conditions'> Terms & Conditions </a>
            </div>

        </div>
    </div>
  )
}

export default Footer
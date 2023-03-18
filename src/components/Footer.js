import React from 'react'

const Footer = () => {
  return (
    <div className='bottom-0 left-0 w-full bg-[#f0f4f8]'>
        <div className='flex flex-col items-center justify-center space-y-2 pb-2 pt-16'>

            <div className='flex flex-col items-center justify-center w-full'>
                <div className='w-full px-32 text-[#6c757d] text-sm pb-12'>
                    Disclaimer: MyBricks Finance Ltd recognises that the NFT contracts that are planned to be minted in the future are likely deemed securities and the company is currently working towards authorisation with the appropriate regulatory bodies. The NFTs will not be minted until authorisation has been granted or clearance to mint under the relevant regulatory body has been explicitly given. BRICKS tokens that are purchased at this time are utility tokens only and can be used to access features of the MyBricks platform. BRICKS tokens bare no rights to ownership of assets. 
                </div>
                <div className='flex justify-evenly text-xs text-[#6c757d] font-semibold w-full -ml-[20%]'>

                    <div className=''>
                        <img className='w-[164px] h-[32px]' src='https://mybricksfinance.com/assets/images/logo_full.svg' alt='logo'/>
                    </div>
                    <div className='mb-2 space-y-4'>
                        <p className='text-[#002159] font-bold'> Navigate </p>
                        <p> <a href='https://docs.mybricksfinance.com/knowledge-base/start-here/introduction' target='_blank'>Knowledgebase</a> </p>
                        <p> <a href='https://mybricksfinance.com/team-partners/founding-team' target='_blank'>Team</a> </p>
                        <p> <a href='https://docs.mybricksfinance.com/knowledge-base/start-here/faqs' target='_blank'>FAQ's</a> </p>
                        <p> <a href='https://mybricksfinance.com/token-agreement' target='_blank'>BRICKS Token Agreement</a> </p>
                        <p> <a href='https://docs.mybricksfinance.com/knowledge-base/learning-resources/amas' target='_blank'>AMA Videos</a> </p>
                        <p> <a href=''>Learning Materials</a> </p>
                    </div>

                    <div className='mb-2 space-y-4'>
                        <p className='text-[#002159] font-bold'> Chat to us </p>
                        <p> <a href='https://t.me/joinchat/4Anv441AtLUxNDhk' target='_blank'>Telegram</a> </p>
                        <p> <a href='https://discord.com/invite/2Wm6Z9sp5v' target='_blank'>Discord</a> </p>
                    </div>
                    <div className='mb-2 space-y-4'>
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
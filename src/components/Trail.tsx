import React from 'react'
import icon from '../assets/info.png'
export default function Trail() {
	return (
		<section className='flex justify-center items-center bg-[#FFF4EA] rounded-sm h-16 w-full  text-center text-[#252525] text-sm font-light '>
			<div>
				<img src={icon} alt='' className='w-1/2' />
			</div>{' '}
			<p className=''>
				Tada! Get started with a free template. Can’t find what you are looking for? Search from the 1000+ available
				templates
			</p>
		</section>
	)
}

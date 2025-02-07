import ReactLoading from 'react-loading';

const LoadingElement = () => {
  return(
    <div className='h-screen w-screen flex justify-center flex-col items-center text-center bg-[#0000007f]'>
      <ReactLoading type='spinningBubbles' color='#bc9a64' height={5+'rem'} />
      <h3 className='text-2xl lg:text-3xl tracking-wide font-[600] text-g-1'>
        Loading...
      </h3>
    </div>
  )
}

export default LoadingElement
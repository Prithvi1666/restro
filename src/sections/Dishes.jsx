import Animated from '../components/Animated'

const Dishes = () => {
  return (
    <section id='dishes' className='px-auto mt-44 '>
        <div className='text-center mb-16'>
            <Animated delay={0.2}>
                <p className='text-orange-500 font-medium uppercase mb-3.5 '>Chef's Signature Selection</p>
            </Animated>
            <Animated>
                <h2 className='text-4xl md:text-5xl max-w-lg mx-auto text-balance'>
                    Discover our signature dishes
                </h2>
            </Animated>
        </div>

        <div>
            {}
        </div>
    </section>
  )
}

export default Dishes
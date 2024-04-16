import Logo from './logo'

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">

          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-3">
            <div className="mb-2">
              <Logo />
            </div>
            <div className="text-sm text-gray-600">
            
            </div>
          </div>
          {/* Copyrights note */}
          <div className=" lg:col-start-12 text-right b-0">
          <p className='flex text-sm text-gray-600'>&copy; UTSJR.</p>
          </div>
           
          </div>
      </div>
    </footer>
  )
}
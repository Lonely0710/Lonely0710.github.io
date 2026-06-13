import Sidebar from './sidebar'

export default function SiteLayout({ children }) {
    return (
        <div className="flex flex-col md:flex-row">
            {/* navigator */}
            <div className="navigator mx-auto text-center pt-5 md:pt-0 md:pr-20 md:pl-20
                md:h-screen md:sticky md:top-0 md:flex md:items-center md:justify-center">
                <Sidebar/>
            </div>

            {/* content */}
            <div className="content w-screen p-5 md:p-20 pt-0 md:pt-10">
                {children}
            </div>
        </div>
    )
  }

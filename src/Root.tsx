import { Outlet, ScrollRestoration } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

export default function Root() {
  return (
    <>
      <ScrollRestoration
        getKey={(location) => {
          const paths = ['/']
          return paths.includes(location.pathname)
            ? location.pathname
            : location.key
        }}
      />
      <div className="body-container">
        <Header></Header>
        <Outlet />
      </div>
      <Footer></Footer>
    </>
  )
}

import { Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import MainPage from './pages/MainPage'
import Footer from './components/Footer'
import ProjectSunsetPage from './pages/ProjectSunsetPage';
import BlogPage from './pages/BlogPage';
import ArtPage from './pages/ArtPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { Helmet } from "react-helmet";


function App() {

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Helmet>

        <script>
          {`
                        (function(w,d,e,u,f,l,n){w[f] = w[f] || function () {
              (w[f].q = w[f].q || [])
              .push(arguments);
            }, l = d.createElement(e), l.async = 1, l.src = u,
              n = d.getElementsByTagName(e)[0], n.parentNode.insertBefore(l, n);})
            (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
            ml('account', '1861321');
            `}

        </script>

      </Helmet>
      <header>
        <Header />
      </header>


      <main >
        <Routes>
          <Route path='/' element={<MainPage />} />

          <Route path='/Books' element={<ProjectSunsetPage />} />

          <Route path='/Blog' element={<BlogPage />} />

          <Route path='/Art' element={<ArtPage />} />

          <Route path='/About' element={<AboutPage />} />

          <Route path='/Contact' element={<ContactPage />} />


        </Routes >

      </main>

      <footer >
        <Footer />
      </footer>

    </div>
  )
}

export default App

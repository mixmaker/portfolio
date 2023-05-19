import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { Home, About, Contact, PageNotFound, Projects, Loading } from "./pages";
import { Scroll, Footer, Navbar } from "./components";
import { fetchUrl } from "./assets/data";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const locationForAnim = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState();

  const onPageLoad = () => {
    setIsLoading(false);
  };

  const setProjectsData = async () => {
    const res = await fetchUrl();
    const parsedData = await res.json();
    setProjects(parsedData);
    onPageLoad();
  };
useEffect(() => {
  setProjectsData()
}, [])

  useEffect(() => {
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? setThemeMode("dark")
      : setThemeMode("light");
  }, []);
  if (!document.body.classList.contains(themeMode)) {
    document.body.className = themeMode;
  }
  // setProjectsData();
  setTimeout(() => {
    // onPageLoad();
  }, 2000);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loading key={`${isLoading}`} />
        ) : (
          <>
            {/* <PageAnimation /> */}
            <StyledApp
              id="App"
              // onLoad={() => setIsLoading(false)}
              // key={`${isLoading}`}
              // key={locationForAnim.pathname}
              // style={{ originY: 0.6 }}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.8,
                type: "spring",
                damping: 10,
                stiffness: 60,
                // duration: 2,
                when: "beforeChildren",
                // ease: "backInOut",
              }}
            >
              <Scroll />
              {/* <LoadingBar
              color="var(--loading-bar-bg)"
              height={3}
              progress={progress}
              onLoaderFinished={() => setProgress(0)}
            /> */}
              {/* <AnimatePresence> */}

              <Navbar themeMode={themeMode} setThemeMode={setThemeMode} />
              {/* <Background /> */}
              <AnimatePresence exitBeforeEnter={true} initial={false}>
                <Routes
                  location={locationForAnim}
                  key={locationForAnim.pathname}
                >
                  <Route path="/" element={<Home />} exact />
                  <Route path="/about" element={<About />} />
                  <Route
                    path="/projects"
                    element={
                      <Projects projects={projects} setProjects={setProjects} />
                    }
                  />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="*" element={<PageNotFound />} />
                </Routes>
              </AnimatePresence>
              <Footer />
              {/* </AnimatePresence> */}
            </StyledApp>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

const StyledApp = styled(motion.div)`
  min-height: 100vh;
  position: relative;
`;

export default App;

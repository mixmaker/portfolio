import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import styled from "styled-components";
import LoadingBar from "react-top-loading-bar";
import { AnimatePresence } from "framer-motion";
import { Home, About, MyWork, Contact, PageNotFound } from "./pages";
import { Scroll, Background, Footer, Navbar } from "./components";

function App() {
  const [progress, setProgress] = useState(0);
  const [themeMode, setThemeMode] = useState("light");
  const locationForAnim = useLocation();

  useEffect(() => {
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? setThemeMode("dark")
      : setThemeMode("light");
  }, []);
  if (!document.body.classList.contains(themeMode)) {
    document.body.className = themeMode;
  }

  return (
    <StyledApp id="App">
      <Scroll />
      <LoadingBar
        color="var(--loading-bar-bg)"
        height={3}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Navbar
        setProgress={setProgress}
        themeMode={themeMode}
        setThemeMode={setThemeMode}
      />
      <Background />
      <AnimatePresence exitBeforeEnter>
        <Routes location={locationForAnim} key={locationForAnim.pathname}>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<MyWork />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </StyledApp>
  );
}

const StyledApp = styled.div`
  min-height: 100vh;
  position: relative;
`;

export default App;

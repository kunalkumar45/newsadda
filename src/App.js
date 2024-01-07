import "./App.css";

import React, {useState} from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const pageSize = 6;
 const apikey= process.env.REACT_APP_NEWS_API
 const [progress,setProgress] = useState(0)
    return (
      <>
        <BrowserRouter>
          <LoadingBar
          height={3}
            color='#f11946'
            progress={progress}
          />
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <News setProgress={setProgress} apikey={apikey}
                  pageSize={pageSize}
                  country="in"
                  category="general"
                  key={"general"}
                />
              }
            ></Route>
            <Route
              path="/general"
              element={
                <News setProgress={setProgress} apikey={apikey}
                  pageSize={pageSize}
                  country="in"
                  category="general"
                  key={"general"}
                />
              }
            ></Route>
            <Route
              path="/business"
              element={
                <News setProgress={setProgress} apikey={apikey}
                  pageSize={pageSize}
                  country="in"
                  category="business"
                  key={"business"}
                />
              }
            ></Route>
            <Route
              path="/entertainment"
              element={
                <News setProgress={setProgress} apikey={apikey}
                  pageSize={pageSize}
                  country="in"
                  category="entertainment"
                  key={"entertainment"}
                />
              }
            ></Route>
            <Route
              path="/health"
              element={
                <News setProgress={setProgress} apikey={apikey}
                  pageSize={pageSize}
                  country="in"
                  category="health"
                  key={"health"}
                />
              }
            ></Route>
            <Route
              path="/sports"
              element={
                <News setProgress={setProgress} apikey={apikey}
                  pageSize={pageSize}
                  country="in"
                  category="sports"
                  key={"sports"}
                />
              }
            ></Route>
            <Route
              path="/science"
              element={
                <News setProgress={setProgress} apikey={apikey}
                  pageSize={pageSize}
                  country="in"
                  category="science"
                  key={"science"}
                />
              }
            ></Route>
            <Route
              path="/technology"
              element={
                <News setProgress={setProgress} apikey={apikey}
                  pageSize={pageSize}
                  country="in"
                  category="technology"
                  key={"technology"}
                />
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </>
    );

}
export default App;
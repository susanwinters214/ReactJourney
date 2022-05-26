import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import MainContent from "./MainContent"

export default function Website() {
    return (
        <>
        <Header />
        <MainContent className="main" />
        <Footer />
        </>
    )
}

//ReactDOM.render(<Website />, document.getElementById("root"))
import React from "react"
import ReactClient from "react-dom/client"
import CajaTexto from "./components/CajaTexto"

const root = document.querySelector('#root')

ReactClient.createRoot(root).render(
    <CajaTexto />
)

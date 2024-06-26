import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";

export default function MainSection() {
    return (
        <main className="text-2xl p-4">
        <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact-list" element={<ContactList />}></Route>
        <Route path="/contact-list/:id" element={<ContactDetail />}></Route>
        </Routes>
        </main>
    )
}
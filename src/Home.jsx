import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import profil from "./img/spider.jpg";

function Home() {
    
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);
    return (
        <div className ="min-h-screen bg-white text-gray-800">

            {/* Navbar */}

            <nav className="fixed top-0 z-50 w-full bg-black backdrop-blur-md shadow-sm">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

                    <a
                    href="#home"
                    className="text-xl font-bold text-purple-300"> MY PORTFOLIO</a>

                    <div className="gap-8 md:flex">
                        <a
                        href="#home"
                        className="text-purple-300">Home</a>

                        <a
                        href="#about"
                        className="text-purple-300">About</a>

                        <a
                        href="#projects"
                        className="text-purple-300">Projects</a>
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <section id="home" className="flex min-h screen items-cener justify-center px-6 pt-20">
                
                <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">

                    {/* text */}
                    <div className="text-center md:text-left" data-aos="fade-down" data-aos-delay="300">

                        <p className="mb-3 text-lg font-medium text-blue-600">Halo, Nama saya </p>
                        <h1 className="mb-3 text-lg font-medium text-blue-600"> Adam Levine</h1>
                        <h2 className="mt-4 text-2xl font-semibold text-gray-600"> Web Developer</h2>
                        <p className="mt-6 max-w-xl text-gray-500"> Saya seorang developer yang tertarik pada 
                            pembuatan front end website.
                        </p>
                        <div className="mt-8 flex justify-center gap-4 md:justify-start">
                            <a href="#projects" className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700">
                                View Projects
                            </a>

                            <a href="#about" className="rounded-lg border border-gray-300 px-6 py-3 font-medium transition hover:bg-gray-100">
                                About Me
                            </a>
                        </div>
                    </div>

                    <div className="flex justify-center" data-aos="slide-left" data-aos-delay="300">

                        <img src={profil} alt="Profile" className="h-72 w-72 rounded-full object-cover shadow-xl md:h-96 md:w-96"/>
                    </div>
                </div>
            </section>

            {/* ABOUT */}
            <section
                id="about"
                className="bg-gray-50 px-6 py-24">

                    <div className="mx-auto max-w-6xl">

                        <div className="mb-12 text-center">

                            <p className="font-medium text-blue-600" data-aos="fade-down" data-aos-delay="100">About Me</p>

                        </div>

                        <div className="grid items-center gap-12 md:grip-cols-2">

                            

                            {/* informasi */}
                            <div>
                                <h3 className="text-2xl font-bold" data-aos="fade-up" data-aos-delay="100"> Adame Levine</h3>
                                <p className="mt-4 mb-6 leading-relaxed text-gray-600" data-aos="fade-up" data-aos-delay="100">
                                    Saya adalah seorang web developer yang memiliki ketertarikan
                                    terhadap pengembangan desain web dari wireframe hingga Front End Desainer
                                </p>
                                
                                {/* data pribadi */}
                                <div classname="mt-8 space-y-4" data-aos="fade-up" data-aos-delay="300">
                                    <div className="flex border-b pb-3">
                                        <span className="w-32 font-semibold">No telp : </span>
                                        <span className="text-gray-600">081344827354 (whatsapp) </span>
                                    </div>

                                    <div className="flex border-b pb-3">
                                        <span className="w-32 font-semibold">Email : </span>
                                        <span className="text-gray-600">adam.levine@gmail.com</span>
                                    </div>

                                    <div className="flex border-b pb-3">
                                        <span className="w-32 font-semibold">Lokasi : </span>
                                        <span className="text-gray-600"> Tangerang Selatan</span>
                                    </div>

                                    <div className="flex border-b pb-3">
                                        <span className="w-32 font-semibold">Pendidikan : </span>
                                        <span className="text-gray-600"> Universitas Gunadarma (2024)</span>
                                    </div>


                                    <div className="flex border-b pb-3">
                                        <span className="w-32 font-semibold">Profesi : </span>
                                        <span className="text-gray-600"> IT dan Front End website developer.</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
            </section>

            <section
            id="pengalaman"
            className="px-6 py-24">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-12 text-center" data-aos="fade-down" data-aos-delay="200">
                        <p className="font-medium text-blue-600">
                            Experience
                        </p>
                        <h2 className="mt-2 text-4xl font-bold">Pengalaman Saya</h2>
                    </div>

                    {/* detail pengalaman */}

                    <div className="relative space-y-9">
                        <div className="absolute left-0 top-0 h-full w-[2px] bg-red-600"></div>
                        <div className="relative ml-7 border-r-7 border-purple-600 rounded-lg bg-gray-200 p-4 shadow-sm" data-aos="slide-right" data-aos-delay="100">

                            <div className="absolute -left-[35px] top-0 h-4 w-4 rounded-full bg-blue-500"></div>

                                    <h3 className="flex items-center justify-between text-2xl mb-6 font-semibold text-black">
                                    <span className="font-mono">INFINITE LEARNING (Batam) </span> <span className="text-medium">Jul 2023 - Des 2023</span>
                                    </h3>
                                    
                                <ul className="space-y-3 text-medium text-gray-800">
                                    Mengikuti program kampus merdeka (MSIB) selama 6 bulan sebagai fullstack web development,
                                    berpengalaman sebagai Project Manager dan Front End Developer
                                </ul>
                        </div>
                                </div>

                </div>
            </section>

            <section
            id="projects"
            className="px-6 py-24">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-12 text-center">
                        <p className="font-medium text-blue-600">
                            My Works
                        </p>
                        <h2 className="mt-2 text-4xl font-bold">Projects</h2>
                        <p className="mx-auto mt-4 max-w-2xl text-gray-500">
                            Beberapa project yang pernah saya kerjakan.
                        </p>
                    </div>

                    {/* project cards */}
                    <div className="grid gap-8 md:grid-cols-3">

                        {/*project 1*/}
                        <div className="overflow-hidden rounded-xl bg-white shadow-lg transition hover:-translate-y-2">

                            <img src={profil} alt="project1" className="h-52 w-full object-cover"/>

                            <div className="p-6">
                                <h3 className="text-xl font-bold">judul Project One</h3>
                                <p className="mt-3 text-gray-500">deksripsi projeknya</p>

                                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-600">
                                    react
                                </span>

                                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-600">
                                    Tailwind
                                </span>
                            </div>

                            <a
                            href="#"
                            className="mt-6 inline-block font-medium text-blue-600 hover:underline">
                                View project
                            </a>
                        </div>

                        {/* project 2 */}
                    </div>
                </div>
            </section>

            <footer className="bg-gray-900 px-6 py-8 text-center text-white">

                <p>@ 2026 Adam Levine, All right reserved</p>
            </footer>
        </div>
    )
}
export default Home;
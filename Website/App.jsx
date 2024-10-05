import RootLayout from './app/layout.jsx';
import forgeLogo from "./public/forgeLogo.png";
import forge from "./public/forge.png";

export default function App() {
    return (
        <RootLayout>
            <nav className="z-50 flex fixed top-0 left-0 px-12 h-20 justify-between items-center w-full tracking-wide text-sm text-[#EEE] font-medium bg-[#222] shadow-lg">
                <div className="flex items-center gap-3">
                    <img src={forgeLogo.src} className="h-12" alt="Forge Logo"/>
                    <h1 className="text-4xl font-bold text-[#F95E1D]">Forge</h1>
                </div>
                <div className="flex space-x-12">
                    <a href="#" className="hover:text-[#f95e1d]">Home</a>
                    <a href="#">Gallery</a>
                    <a href="https://github.com/hackclub/forge">Github</a>
                    <a className="rounded-full" href="https://forge.hackclub.com/editor/">
                        <button className="bg-[#F95E1D] px-8 py-2 rounded-lg text-[#222] hover:bg-[#F95E1DEE] transition duration-300">Editor</button>
                    </a>
                </div>
            </nav>

            <main className="pt-40 px-8 sm:px-36 flex flex-col sm:flex-row gap-12 sm:gap-28 items-center">
                <div className="sm:w-1/2 space-y-4">
                    <h1 className="title text-[#F95E1D] text-8xl font-extrabold glow">Forge</h1>
                    <p className="text-[#EEE] text-lg leading-relaxed">
                        Forge is an open-source, hackable 3D printer & OpenSCAD-based editor made by teens at Hack Club. High schoolers (and younger) can get one for free!
                    </p>
                    <a href="https://forge.hackclub.com/editor/" className="inline-block text-[#F95E1D] font-bold underline hover:text-[#F95E1DEE]">Explore the Forge Editor</a>
                </div>
                <div className="sm:w-1/2">
                    <img src={forge.src} alt="Forge 3D Printer Image" className="rounded-lg shadow-lg w-full" />
                </div>
            </main>

            <div className="container grid grid-cols-1 md:grid-cols-1 gap-32">
                <section className="p-8 bg-[#222] rounded-lg shadow-lg">

                    <div className="container text-center">
                        <h2 className="text-3xl font-bold mb-6">Forge, Hack Club's 3D Printer</h2>
                        <p className="mb-6">
                            <a href="https://forge.hackclub.com/editor/" className="text-[#F95E1D] font-bold">Forge Editor</a> |
                            <a href="https://forge.hackclub.com/gallery" className="text-[#F95E1D] font-bold">Gallery</a>
                        </p>
                        <p className="max-w-3xl mx-auto leading-relaxed">
                            2nd Place Finalist of the Hack Club Arcade Showcase 2024. Forge lets teens tackle real-world problems with programmatic 3D modeling. Submit your designs to the Gallery and earn a free Forge 3D Printer. It's easy to start, but challenging to master!
                        </p>
                    </div>

                </section>
            </div>

            <section>
                <div className="container grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div className="p-8 bg-[#222] rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold text-[#F95E1D] mb-4">🖨️ What is Forge?</h2>
                        <ul className="list-disc list-inside text-lg leading-relaxed">
                            <li><strong>Forge Printer:</strong> Fixed-bed cantilevered 3D Printer</li>
                            <li><strong>Forge Editor:</strong> OpenSCAD-based online modeling software</li>
                            <li><strong>Forge Mainboard:</strong> Custom-engineered control board</li>
                            <li><strong>Forge Firmware:</strong> Open-source firmware</li>
                        </ul>
                    </div>

                    <div className="p-8 bg-[#222] rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold text-[#F95E1D] mb-4">📐 About the Forge Printer</h2>
                        <p className="leading-relaxed">
                            The Forge printer is designed for portability and efficiency, featuring a custom control board, STM32 F405 series MCU, and TMC2209 drivers. Its compact design makes it ideal for hackathons and events.
                        </p>
                    </div>
                </div>
            </section>

            <section>
                <div className="container grid grid-cols-1 md:grid-cols-1 gap-16">
                    <div className="p-8 bg-[#222] rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold text-[#F95E1D] mb-6 text-center">🔧 Specifications</h2>
                        <ul className="list-disc list-inside max-w-3xl mx-auto space-y-2 text-lg leading-relaxed">
                            <li>STM32F405RGT6 32-Bit MCU</li>
                            <li>TMC2209 Stepper Drivers</li>
                            <li>Reduced Motor Noise</li>
                            <li>Sensorless XY homing</li>
                            <li>TZ-E3 Hotend, 300°C Max</li>
                            <li>120x110x110mm Build Volume</li>
                            <li>Up to 100°C heated bed temperature</li>
                            <li>Magnetic Textured PEI Plate</li>
                            <li>220x210x75mm Folded Volume</li>
                            <li>MGN9C Linear Rails</li>
                            <li>OLED and Rotary Encoder interface</li>
                            <li>Sherpa Mini Direct Drive Extruder</li>
                            <li>Automatic Bed Leveling</li>
                            <li>PLA, PETG, TPU Compatible</li>
                        </ul>
                        <p className="text-sm text-center italic mt-4">Specifications may change as testing continues (Updated August 2024).</p>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-[#222]">
                <div className="container p-8 bg-[#222] rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-[#F95E1D] mb-6">⚠️ WIP Disclaimers</h2>
                    <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed">
                        <li>This is a potential upcoming Hack Club You Ship, We Ship (YSWS) program.</li>
                        <li>This project is semi-endorsed by Hack Club and isn't fully official yet.</li>
                        <li>Things are under heavy development, with both the Forge Editor and Forge Printer being WIP projects.</li>
                        <li>All information on this website is subject to change.</li>
                        <li>If you have questions, visit <a href="https://hackclub.com/arcade/?param=slack" className="text-[#F95E1D] font-bold">our Slack community</a>.</li>
                    </ul>
                </div>
            </section>
        </RootLayout>
    )
}
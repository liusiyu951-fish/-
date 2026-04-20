/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Metamorphosis from "./components/Metamorphosis";
import Gallery from "./components/Gallery";
import Archive from "./components/Archive";
import EntryPoint from "./components/EntryPoint";

export default function App() {
  return (
    <div className="bg-black min-h-screen selection:bg-white selection:text-black">
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <div className="bg-black">
            <Metamorphosis />
            <Gallery />
            <Archive />
            <EntryPoint />
          </div>
        </main>
      </div>
    </div>
  );
}

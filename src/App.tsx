import React from 'react';
import { ReactComponent as Scrimba } from './asset/scrimba.svg';
import { ReactComponent as Hamburger } from './asset/hamburger.svg';
import { ReactComponent as TailwindIcon } from './asset/tailwind.svg';
import { ReactComponent as CSSIcon } from './asset/css-icon.svg';
import { ReactComponent as DeveloperIcon } from './asset/developer-icon.svg';
import { ReactComponent as MobileIcon } from './asset/mobile-icon.svg';

function App() {
  return (
      <div className="bg-gray-200 font-sans flex flex-col items-center">
          <header className="bg-indigo-700 w-full px-4 py-3 flex justify-center border-b-4 border-pink-500">
              <div className="max-w-4xl w-full">
                  <div className="flex items-center justify-between text-pink-500">
                      <Scrimba className="h-8 fill-current "/>
                      <button type="button" className="text-gray-500 hover:text-gray-400 sm:hidden">
                          <Hamburger className="w-6 h-6 fill-current"/>
                      </button>
                  </div>
                  <div className="my-4">
                      <h1 className="text-2xl text-indigo-100">Want to learn Tailwind CSS?</h1>
                      <p className="text-sm text-indigo-200">Tailwind is the fastest growing utility-first CSS framework. Let's learn it step by step.</p>
                      <div className="relative mt-4 flex">
                          <div>
                              <a href="#"
                                 className="bg-pink-500 text-indigo-100  font-bold mt-2 px-4 py-2 rounded-full text-xs uppercase">Enroll
                                  Now</a>
                          </div>
                          <div className="absolute right-0 bg-white rounded-full flex justify-center items-center p-5 border-4 border-pink-500">
                              <TailwindIcon className="w-16 h-16"/>
                          </div>
                      </div>
                  </div>
              </div>
          </header>
          <main className="mt-16 w-full flex flex-col items-center">
              <div className="max-w-4xl mx-4">
                  <h2 className="pb-1 font-bold text-xl text-indigo-700 border-b border-indigo-200">How It Works</h2>
                  <p className="text-sm mt-4 text-gray-600">Tailwind is designed for rapid development of modern
                      applications. At its core, it is a robust
                      mobile-first design system built with developer experience in mind. After using Tailwind CSS, you
                      will find it difficult to go back to use anything else. Learn all about it in this all-inclusive
                      course.</p>
                  <h2 className="pb-1 font-bold text-xl text-indigo-700 border-b border-indigo-200">Advantage</h2>

                  <div className="flex flex-col sm:flex-row sm:-mx-2">
                      <div className="mt-4 sm:w-1/3">
                          <div
                              className="bg-white p-8 border-b-4
                              border-pink-500 rounded-lg flex flex-col items-center
                              sm:mx-2
                              ">
                              <div className="bg-gray-200 text-indigo-700 w-16 rounded-full p-2">
                                  <CSSIcon className="h-12 w-12 fill-current"/>
                              </div>
                              <div className="mt-4 font-bold">No Custom CSS</div>
                              <div className="text-center mt-2 text-gray-600 text-sm">Tailwind's advanced class
                                  extraction will leave your project free of custom CSS.
                              </div>
                          </div>
                      </div>

                      <div className="mt-4 sm:w-1/3">
                          <div
                              className="bg-white p-8 border-b-4
                              border-pink-500 rounded-lg flex flex-col items-center  sm:mx-2">
                              <div className="bg-gray-200 text-indigo-700 w-16 rounded-full p-2">
                                  <DeveloperIcon className="h-12 w-12 fill-current"/>
                              </div>
                              <div className="mt-4 font-bold">Developer Experience</div>
                              <div className="text-center mt-2 text-gray-600 text-sm">Tailwind is designed with your happiness in mind. The ease of performing changes is refreshing.
                              </div>
                          </div>
                      </div>

                      <div className="mt-4 sm:w-1/3">
                          <div
                              className="bg-white p-8 border-b-4
                              border-pink-500 rounded-lg flex flex-col items-center  sm:mx-2">
                              <div className="bg-gray-200 text-indigo-700 w-16 rounded-full p-2">
                                  <MobileIcon className="h-12 w-12 fill-current"/>
                              </div>
                              <div className="mt-4 font-bold">Mobile Friendly</div>
                              <div className="text-center mt-2 text-gray-600 text-sm">Modern applications demand mobile-friendly & Tailwind's responsive modifiers make it
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </main>
          <footer>
              <p>Copyright © 2019 Scrimba</p>
          </footer>
      </div>
  );
}

export default App;

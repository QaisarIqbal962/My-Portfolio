import React from "react";  
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";  
import installNode from "../assets/portfolio/installNode.jpg";  
import navbar from "../assets/portfolio/navbar.jpg";  
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";  
import reactWeather from "../assets/portfolio/reactWeather.jpg";  
import spogmaiFoundation from "../assets/portfolio/spogmaiFoundation.jpg";  
import Amazon from "../assets/portfolio/amazon.png";  
import WebPage from "../assets/portfolio/webPage.png";  
import Bootstrap from '../assets/portfolio/bootstrap..png'  
import Coffee from '../assets/portfolio/coffee.png'  

const Portfolio = () => {  
  const portfolios = [  
    {  
      id: 1,  
      src: Amazon,  
      lang: "HTML,CSS",  
      live: "#",  
      code: "#",  
    },  

    {  
      id: 2,  
      src: WebPage,  
      lang: "HTML,CSS",  
      live: "#",  
      code: "#",  
    },  

    {  
      id: 3,  
      src: Bootstrap,  
      lang: "Bootstrap",  
      live: "#",  
      code: "#",  
    },  

    {  
      id: 4,  
      src: Coffee,  
      lang: "JavaScript",  
      live: "#",  
      code: "#"  
    },  

    {  
      id: 5,  
      src: spogmaiFoundation,  
      lang: "React",  
      code: "https://github.com/QaisarIqbal962",  
      live: "https://spogmai-foundation.vercel.app/",  
    },  

    {  
      id: 6,  
      src: reactWeather,  
      lang: "React",  
      live: "#",  
      code: "#"  
    },  
  ];  

  return (  
    <div  
      name="portfolio"  
      className="pt-60 bg-gray-800 w-full md:h-screen text-white pb-28"  
    >  
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">  
        <div className="pb-8">  
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">  
            Portfolio  
          </p>  
          <p className="py-6">Check out some of my work right here</p>  
        </div>  

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">  
          {portfolios.map(({ id, src, lang, live, code }) => (  
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">  
              <img  
                src={src}  
                alt={`Portfolio Project ${id}`}  
                className="rounded-md w-full h-48 object-cover duration-200 hover:scale-105"  
              />  
              <h1 className="text-center py-2 font-bold text-xl text-blue-400 shadow-md">{lang}</h1>  
              <div className="flex items-center justify-center">  
                <a href={live}>  
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">  
                    Demo  
                  </button>  
                </a>  

                <a href={code}>  
                  <button className="px-6 py-3 w-1/2 m-4 duration-200 hover:scale-105">  
                    Code  
                  </button>  
                </a>  
              </div>  
            </div>  
          ))}  
        </div>  
      </div>  
    </div>  
  );  
};  

export default Portfolio;
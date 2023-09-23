import {
  SunIcon,
  ExclamationTriangleIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";

export default function Home() {
  return (
    <div className=" text-white flex flex-col items-center justify-center  h-screen  overflow-y-auto   px-2    ">
      <h1 className=" text-5xl font-bold pb-20">ChatGpt</h1>

      <div className=" grid grid-cols-3 zero:grid-cols-1 mobile:grid-cols-0 zero:space-y-3  space-x-3 text-center  ">
        <div>
          <div className="flex flex-col items-center justify-center  mb-5">
            <SunIcon className=" h-8 w-8" />
            <h2>Example</h2>
          </div>
          <div className="space-y-2">
            <p className=" textInfo">
              Explain quantum computing in simple terms
            </p>
            <p className=" textInfo">
              Got any creative ideas for a 10 year olds birthday?
            </p>
            <p className=" textInfo">
              How do I make an HTTP request in Javascript?
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <BoltIcon className=" h-8 w-8" />
            <h2>Capeblity</h2>
          </div>
          <div className="space-y-2">
            <p className=" textInfo">
              Explain quantum computing in simple terms
            </p>
            <p className=" textInfo">
              Got any creative ideas for a 10 year olds birthday?
            </p>
            <p className=" textInfo">
              How do I make an HTTP request in Javascript?
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <ExclamationTriangleIcon className=" h-8 w-8" />
            <h2>Limatation</h2>
          </div>
          <div className="space-y-2">
            <p className=" textInfo">
              Explain quantum computing in simple terms
            </p>
            <p className=" textInfo">
              Got any creative ideas for a 10 year olds birthday?
            </p>
            <p className=" textInfo">
              How do I make an HTTP request in Javascript?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "@inertiajs/react";

export default function Index() {
  return (
    <div className="flex justify-center flex-col h-full w-full space-y-4 p-8">
      <h1 className="font-bold text-xl">Hello, world!</h1>
      <p>Welcome to your new single-page application, built with:</p>
      <ul className="list-disc list-inside">
        <li>
          <a
            className="underline text-blue-500 visited:text-purple-500 hover:text-blue-800"
            href="https://get.asp.net/"
          >
            ASP.NET Core
          </a>{" "}
          and{" "}
          <a
            className="underline text-blue-500 visited:text-purple-500 hover:text-blue-800"
            href="https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx"
          >
            C#
          </a>{" "}
          for cross-platform server-side code
        </li>
        <li>
          <a
            className="underline text-blue-500 visited:text-purple-500 hover:text-blue-800"
            href="https://facebook.github.io/react/"
          >
            React
          </a>{" "}
          for client-side code
        </li>
        <li>
          <a
            className="underline text-blue-500 visited:text-purple-500 hover:text-blue-800"
            href="https://tailwindcss.com/"
          >
            TailwindCSS
          </a>{" "}
          for layout and styling
        </li>
      </ul>
      <p>To help you get started, we have also set up:</p>
      <ul className="list-disc list-inside">
        <li>
          <strong>Weather Forecast Route</strong>. For example, click{" "}
          <em>
            <Link className="text-blue-500 underline" href="WeatherForecast">
              Open Forecast
            </Link>{" "}
          </em>{" "}
          then <em>Back</em> to return here.
        </li>
        <li>
          <strong>Development server integration</strong>. In development mode,
          the development server from <code>create-react-app</code> runs in the
          background automatically, so your client-side resources are
          dynamically built on demand and the page refreshes when you modify any
          file.
        </li>
        <li>
          <strong>Efficient production builds</strong>. In production mode,
          development-time features are disabled, and your{" "}
          <code>dotnet publish</code> configuration produces minified,
          efficiently bundled JavaScript files.
        </li>
      </ul>
      <p>
        The <code>ClientApp</code> subdirectory is a standard React application
        based on the <code>create-react-app</code> template. If you open a
        command prompt in that directory, you can run <code>npm</code> commands
        such as <code>npm test</code> or <code>npm install</code>.
      </p>
    </div>
  );
}

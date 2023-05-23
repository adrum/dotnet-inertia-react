import { Link } from "@inertiajs/react";
import React from "react";

type Forecast = {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
};

export default function Index({ forecasts }: { forecasts: Forecast[] }) {
  return (
    <div className="flex justify-center flex-col h-full w-full space-y-4 p-8">
      <Link className="text-blue-500 underline" href="/">
        &lt; Back
      </Link>
      <table className="table table-striped" aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Date</th>
            <th>Temp. (C)</th>
            <th>Temp. (F)</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map((forecast) => (
            <tr key={forecast.date}>
              <td>{forecast.date}</td>
              <td>{forecast.temperatureC}</td>
              <td>{forecast.temperatureF}</td>
              <td>{forecast.summary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

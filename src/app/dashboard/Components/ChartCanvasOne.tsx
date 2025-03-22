"use client"; // Ensure this runs only on the client side

import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
export default function ChartCanvasOne() {
        const chartRef = useRef<HTMLCanvasElement | null>(null);
        const chartInstance = useRef<Chart | null>(null);
      
        useEffect(() => {
          if (!chartRef.current) return;
      
          const ctx = chartRef.current.getContext("2d");
          if (!ctx) return;
      
          // Destroy previous chart instance if exists (prevents duplication)
          if (chartInstance.current) {
            chartInstance.current.destroy();
          }
      
          chartInstance.current = new Chart(ctx, {
            type: "line", // Line chart
            data: {
              labels: [
                "Jan", "Feb", "Mar", "Apr", "May", "Jun",
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
              ],
              datasets: [
                {
                  label: "Dataset",
                  backgroundColor: "rgba(251, 247, 237, 0.9)",
                  borderColor: "#5BBB7B",
                  data: [148, 140, 210, 120, 160, 140, 190, 170, 135, 210, 180, 249],
                  fill: true,
                },
              ],
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              layout: { padding: 10 },
              plugins: {
                legend: { position: "top" },
                title: { display: false },
              },
              scales: {
                y: {
                  ticks: { min: 0, max: 300, stepSize: 50 },
                },
                x: {
                  ticks: {},
                },
              },
            },
          });
      
          return () => {
            // Cleanup chart instance when component unmounts
            if (chartInstance.current) {
              chartInstance.current.destroy();
            }
          };
        }, []);
      
        return <canvas ref={chartRef} style={{ height: "230px", width: "100%" }} />;
}

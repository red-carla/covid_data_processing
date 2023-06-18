import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "./App.css";
import fastXmlParser from "fast-xml-parser";

async function fetchData() {
    //fetch happiness data
    const happinessResponse = await fetch("http://localhost:3000/happiness", {
        headers: {
            Accept: "application/json, application/xml",
        },
    });

    if (!happinessResponse.ok) {
        throw new Error(`Error fetching happiness data: ${happinessResponse.statusText}`);
    }

    const happinessContentType = happinessResponse.headers.get("content-type");
    let happinessData;

    if (happinessContentType.includes("application/json")) {
        happinessData = await happinessResponse.json();
    } else if (happinessContentType.includes("application/xml")) {
        const xmlString = await happinessResponse.text();
        const options = {
            ignoreAttributes: false,
            attributeNamePrefix: "",
            textNodeName: "value",
        };
        const parsedData = fastXmlParser.parse(xmlString, options);
        happinessData = parsedData.world_happiness;
    } else {
        throw new Error(`Unsupported content type: ${happinessContentType}`);
    }


    const deathResponse = await fetch("http://localhost:3000/death", {
        headers: {
            Accept: "application/json, application/xml",
        },
    });

    if (!deathResponse.ok) {
        throw new Error(`Error fetching death data: ${deathResponse.statusText}`);
    }

    const deathContentType = deathResponse.headers.get("content-type");
    let deathData;

    if (deathContentType.includes("application/json")) {
        deathData = await deathResponse.json();
    } else if (deathContentType.includes("application/xml")) {
        const xmlString = await deathResponse.text();
        const options = {
            ignoreAttributes: false,
            attributeNamePrefix: "",
            textNodeName: "value",
        };
        const parsedData = fastXmlParser.parse(xmlString, options);
        deathData = parsedData.covid_death;
    } else {
        throw new Error(`Unsupported content type: ${deathContentType}`);
    }


    const healthResponse = await fetch("http://localhost:3000/health", {
        headers: {
            Accept: "application/json, application/xml",
        },
    });

    if (!healthResponse.ok) {
        throw new Error(`Error fetching death data: ${healthResponse.statusText}`);
    }

    const healthContentType = healthResponse.headers.get("content-type");
    let healthData;

    if (healthContentType.includes("application/json")) {
        healthData = await healthResponse.json();
    } else if (healthContentType.includes("application/xml")) {
        const xmlString = await healthResponse.text();
        const options = {
            ignoreAttributes: false,
            attributeNamePrefix: "",
            textNodeName: "value",
        };
        const parsedData = fastXmlParser.parse(xmlString, options);
        healthData = parsedData.health_expenditure;
    } else {
        throw new Error(`Unsupported content type: ${healthContentType}`);
    }


    return {
        happinessData,
        deathData,
        healthData,
    };
}

function App() {
    const jsonCanvasRef = useRef();
    const xmlCanvasRef = useRef();
    //choosing to ignore eslint warning here because otherwise browser error of chart needs to be destroyed before it can be created
    let jsonChartInstance;
    let xmlChartInstance;

    useEffect(() => {
        async function renderChart() {
            const { happinessData, healthData, deathData } = await fetchData();

            //destroy chart instances if they exist to prevent chart instance error in browser
            if (jsonChartInstance) {
                jsonChartInstance.destroy();
            }

            if (xmlChartInstance) {
                xmlChartInstance.destroy();
            }
//render json chart
            const jsonCtx = jsonCanvasRef.current.getContext("2d");
            jsonChartInstance = new Chart(jsonCtx, {
                type: "bar",
                data: {
                    labels: happinessData.map((item) => item.country_name),
                    datasets: [
                        {
                            label: "Health Expenditure in USD millions",
                            data: healthData.map((item) => item.health_expenditure),
                            backgroundColor: "rgba(265, 53, 45, 0.9)",
                            borderColor: "rgba(265, 53, 45, 1)",
                            borderWidth: 1,
                        },
                        {
                            label: "Happiness Score",
                            data: happinessData.map((item) => item.happiness_score),
                            backgroundColor: "rgba(140, 12, 195, 0.9)",
                            borderColor: "rgba(140, 12, 195, 1)",
                            borderWidth: 1,
                        },
                    ],
                },
                options: {
                    scales: {
                        y: {
                            max: 20,
                            beginAtZero: false,
                            title: {
                                display: true,
                                text: "Health Expenditure in USD millions, Happiness Score",
                            },
                        },
                    },
                },
            });

            //render xml chart
            const xmlLabels = deathData.map((item) => item.country_name);
            const bubbleData = happinessData.map((item, index) => ({
                x: item.happiness_score,
                y: healthData[index].health_expenditure,
                r: Math.sqrt(deathData[index].deaths) / 20,
            }));

            const xmlCtx = xmlCanvasRef.current.getContext("2d");
            xmlChartInstance = new Chart(xmlCtx, {
                type: "bubble",
                data: {
                    labels: xmlLabels,
                    datasets: [
                        {
                            label: "Happiness Score, Health Expenditure, COVID-19 Deaths",
                            data: bubbleData,
                            backgroundColor: "rgba(92,115,205, 0.9)",
                            borderColor: "rgba(92,115,205, 1)",
                            borderWidth: 1,
                        },
                    ],
                },
                options: {
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: "Happiness Score",
                            },
                            ticks: {
                                beginAtZero: true,
                            },
                        },
                        y: {
                            title: {
                                display: true,
                                text: "Health Expenditure in USD millions",
                            },
                            ticks: {
                                beginAtZero: true,
                            },
                        },
                    },
                },
            });
        }

        renderChart();

        //destroy chart instances on unmount to prevent chart instance error in browser
        return () => {
            if (jsonChartInstance) {
                jsonChartInstance.destroy();
            }

            if (xmlChartInstance) {
                xmlChartInstance.destroy();
            }
        };
    }, []);

    return (
        <div className="App">
            <div className="container">
                <h1 className="title">JSON</h1>
                <div className="card">
                    <h2 className="chart-title">
                        Health Expenditure and Happiness Score Per Country
                    </h2>
                    <canvas
                        id="jsonChart"
                        ref={jsonCanvasRef}
                        width="1100"
                        height="500"
                    />
                </div>
            </div>

            <div className="container">
                <h1 className="title">XML</h1>
                <div className="card">
                    <h2 className="chart-title">
                        Covid Deaths (thousands) vs Health Expenditure and Happiness Score
                    </h2>
                    <canvas id="xmlChart" ref={xmlCanvasRef} width="1100" height="500" />
                </div>
                <div className="documentation-link">
                    <a
                        href="http://localhost:3000/api-docs"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View API Documentation
                    </a>
                    <br/>
                </div>
            </div>
        </div>
    );
}

export default App;

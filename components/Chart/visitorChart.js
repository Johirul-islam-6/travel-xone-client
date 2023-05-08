import { useEffect } from "react"
import { Chart } from "chart.js";
function VisitorChart() {
    useEffect(() => {
        var ctx = document.getElementById('visitorChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ["Desktop", "Mobile", "Laptop"],
                datasets: [{
                    data: [70, 10, 6],
                    borderColor: [
                        "rgb(29, 78, 216)",
                        "rgb(34, 211, 238)",
                        "rgb(255, 99, 132)",
                    ],
                    backgroundColor: [
                        "rgb(29, 78, 216)",
                        "rgb(34, 211, 238)",
                        "rgb(255, 99, 132)",
                    ],
                    borderWidth: 2,
                }]
            },
            options: {
                scales: {
                    xAxes: [{
                        display: false,
                    }],
                    yAxes: [{
                        display: false,
                    }],
                }
            },

        });
    }, [])


    return (
        <>
            {/* Doughnut chart */}
            <h1 className=" text-xl font-semibold capitalize mb-3 text-center">Visitor Analytics</h1>
            <div className="w-[100%] flex mx-auto my-auto bg-white rounded-xl">
                <div className='border border-gray-300 pt-0 rounded-xl w-full h-fit my-auto pb-2'>
                    <canvas id='visitorChart'></canvas>
                </div>
            </div>
        </>
    )
}

export default VisitorChart;
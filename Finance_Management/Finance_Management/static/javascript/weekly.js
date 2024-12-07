const renderCharts = (data, labels) => {
    var ctx = document.getElementById('myChart').getContext('2d');
    ctx.height = 100;
    var myChart = new Chart(ctx, {
        type: 'bar', // Change to 'bar' for bar graph
        data: {
            labels: labels,
            datasets: [{
                label: 'Weekly Expense',
                data: data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true, // Ensure the y-axis starts at zero
                    title: {
                        display: true,
                        text: 'Amount Spent ($)',
                        font: {
                            size: 14
                        }
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Expense Categories',
                        font: {
                            size: 14
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return `${tooltipItem.label}: $${tooltipItem.raw}`;
                        }
                    }
                }
            },
            title: {
                display: true,
                text: 'Expense per Category'
            }
        }
    });
}

const getChartData = () => {
    console.log('fetching');
    fetch('/expense_week')
        .then(res => res.json())
        .then(results => {
            console.log("results", results);
            const category_data = results.expense_category_data;
            const [labels, data] = [Object.keys(category_data), Object.values(category_data)];
            renderCharts(data, labels);
        });
};

document.onload = getChartData();

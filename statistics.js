const ctx = document.getElementById("studyHoursChart")

new Chart(ctx, {
    type: "bar",
    data: {
        labels: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        datasets: [{
            label: "Study Hours",
            data: [2, 1, 3, 4, 2, 5, 1],
            backgroundColor: "#c8bbff",
            borderColor: "#c8bbff",
        }]
    }
})




const ctx2 = document.getElementById("progressTrendsChart")

new Chart(ctx2, {
    type: "line",
    data: {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        datasets: [{
            label: "Completion Rate %",
            data: [60, 70, 65, 80],
            backgroundColor: "#c8bbff",
            borderColor: "#c8bbff"
        }]
    }
})
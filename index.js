const form = document.querySelector("form");
const results = document.querySelector(".results");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    results.innerHTML = "";

    const number = document.querySelector("#number").value;

    let tableHtml = 
        "<tr class='header'>" +
            "<th>Number 1</th>" + 
            "<th></th>" + 
            "<th>Number 2</th>" + 
            "<th></th>" + 
            "<th>Results</th>" + 
        "</tr>";

        for (let i = 1;i <= 10; i++) {
            tableHtml += 
                "<tr>" +
                    "<th>" + number + "</th>" + 
                    "<th> x </th>" + 
                    "<th>" + i + "</th>" + 
                    "<th> = </th>" + 
                    "<th>" + number * i + "</th>" + 
                "</tr>";
        }

        const table = document.createElement("table");
        table.innerHTML = tableHtml;

        results.append(table);
})
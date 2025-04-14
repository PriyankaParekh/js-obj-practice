const names = [
  "Ashish Shah",
  "Rashmin Chhatrala",
  "Yash Dubey",
  "Prakash Jain",
  "Yashraj Singh",
  "Viraj Sinha",
  "Rajesh Kumar",
  "Mahesh Marwadi",
  "Suresh Sahni",
  "Amar Vilas",
  "Virdas Singhania",
  "Rajeshwari Bindra",
  "Birendra Bhalerao",
  "Virendra Bhupati",
  "Bhupendra Singh",
  "Bhuvam Bam",
  "Shri Raj",
  "Prashant Kamle",
  "Kamlesh Tomar",
  "Risabh Khare",
  "Rishi Kohli",
  "Kunwar Kharwanda",
  "Kartik Koli",
  "Komal Jain",
  "Kartikey Pandey",
];

function filterNames() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const namesList = document.getElementById("namesList");
  namesList.innerHTML = "";

  if (input.length < 2) return;

  let found = false;

  names.forEach((name) => {
    if (name.toLowerCase().includes(input)) {
      const li = document.createElement("li");
      const highlightedName = name.replace(
        new RegExp(input, "gi"),
        (match) => `<span class="highlight bg-warning fw-bold">${match}</span>`
      );

      li.innerHTML = highlightedName;
      namesList.appendChild(li);
      found = true;
    }
  });
  if (!found) {
    const li = document.createElement("div");
    li.textContent = "data not found";
    namesList.appendChild(li);
  }
}

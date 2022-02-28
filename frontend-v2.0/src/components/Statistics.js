import "./Statistics.css";

const Statistics = () => {
  const countEl = document.getElementById("count");

  updateVisitCount();

  function updateVisitCount() {
    fetch("https://api.countapi.xyz/update/florin-popcom/codepen/?amount=1")
      .then((res) => res.json())
      .then((res) => {
        countEl.innerHTML = res.value;
      });
  }

  return (
    <div className="Stat-b">
      <p>This Portofolio was viewed</p>
      <h1 id="count-b">0</h1>
      <p>times</p>
    </div>
  );
};

export default Statistics;

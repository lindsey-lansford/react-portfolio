import GitHubCalendar from "react-github-calendar";
import { Button } from "react-bootstrap";
import "../styles/resume.css";

const Github = () => {
  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 9;

    return contributions.filter((day) => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };

  return (
    <div className="mb-2 github-comp">
      <h1>My GitHub Activity</h1>
      <GitHubCalendar
        id="cal"
        username="lindsey-lansford"
        transformData={selectLastHalfYear}
        blockSize={10}
      />
      <div className="github-btn">
        <Button
          variant="dark"
          href="https://github.com/lindsey-lansford"
          target="_blank"
          rel="noopener noreferrer"
          size="sm"
        >
          View My Github
        </Button>
      </div>
    </div>
  );
};

export default Github;

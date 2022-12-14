import GitHubCalendar from 'react-github-calendar';
import { Row } from 'react-bootstrap';

const Github = () => {

  const selectLastHalfYear = contributions => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 9;
  
    return contributions.filter(day => {
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
    <Row>
      <h1>My GitHub Activity</h1>
      <GitHubCalendar
        username='lindsey-lansford'
        color="#164A4A"
        transformData={selectLastHalfYear}
      />
    </Row>

  );
};

export default Github;
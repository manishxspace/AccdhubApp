import Header from '../components/Header'
import Icon from '../components/Icon'
import RecentResources from '../components/RecentResources'
import SubjectCard from '../components/SubjectCard'
import { recentResources, subjects } from '../data/mockData'

export default function Dashboard() {
  return (
    <>
      <Header />
      <div className="dashboard-content" id="dashboard">
        <section className="welcome-row" aria-labelledby="welcome-heading">
          <div>
            <div className="date-label"><span className="date-sparkle">✳</span> YOUR LEARNING OVERVIEW</div>
            <h1 id="welcome-heading">Good morning, Manish<span className="wave">✦</span></h1>
            <p className="welcome-subtitle">A new day to learn something meaningful.</p>
          </div>
          <div className="week-pill"><span className="week-dot" /> Week 06 <span className="week-divider" /> Fall semester</div>
        </section>

        <section className="subjects-section" aria-labelledby="subjects-heading">
          <div className="section-heading">
            <div><div className="section-kicker">YOUR CLASSES</div><h2 id="subjects-heading">Subjects <span className="count-badge">04</span></h2></div>
            <a className="text-link" href="#subjects">View all <Icon name="arrow" size={16} /></a>
          </div>
          <div className="subject-grid">
            {subjects.map((subject) => <SubjectCard key={subject.name} subject={subject} />)}
          </div>
        </section>

        <section className="recent-section" aria-labelledby="resources-heading">
          <div className="section-heading resource-heading">
            <div><div className="section-kicker">PICK UP WHERE YOU LEFT OFF</div><h2 id="resources-heading">Recent resources</h2></div>
            <a className="text-link" href="#resources">See library <Icon name="arrow" size={16} /></a>
          </div>
          <RecentResources resources={recentResources} />
        </section>

        <footer className="dashboard-footer"><span>Made for your learning journey</span><span>Fall semester · 2025</span></footer>
      </div>
    </>
  )
}

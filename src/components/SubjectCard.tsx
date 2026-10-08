import type { Subject } from '../data/mockData'
import Icon from './Icon'

export default function SubjectCard({ subject }: { subject: Subject }) {
  return (
    <article className="subject-card">
      <div className="subject-card-top">
        <div className={`subject-icon ${subject.color}`}><Icon name={subject.icon} size={21} /></div>
        <button className="icon-button card-menu" aria-label={`Options for ${subject.name}`}><Icon name="dots" size={19} /></button>
      </div>
      <div className="subject-copy">
        <span className="subject-eyebrow">{subject.shortName}</span>
        <h3>{subject.name}</h3>
      </div>
      <div className="progress-caption"><span>Course progress</span><strong>{subject.progress}%</strong></div>
      <div className="progress-track" role="progressbar" aria-label={`${subject.name} progress`} aria-valuenow={subject.progress} aria-valuemin={0} aria-valuemax={100}>
        <span className={`progress-fill ${subject.color}`} style={{ width: `${subject.progress}%` }} />
      </div>
    </article>
  )
}

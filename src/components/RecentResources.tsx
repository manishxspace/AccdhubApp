import type { Resource } from '../data/mockData'
import Icon from './Icon'

export default function RecentResources({ resources }: { resources: Resource[] }) {
  return (
    <section className="resources-panel" aria-labelledby="resources-heading">
      <div className="resource-list">
        {resources.map((resource) => (
          <article className="resource-row" key={resource.title}>
            <div className={`resource-icon ${resource.color}`}><Icon name={resource.icon} size={19} /></div>
            <div className="resource-info">
              <h3>{resource.title}</h3>
              <span>{resource.subject}<span className="resource-dot">·</span>{resource.type}</span>
            </div>
            <span className="resource-date"><Icon name="clock" size={14} />{resource.updated}</span>
            <button className="icon-button resource-open" aria-label={`Open ${resource.title}`}><Icon name="arrow" size={17} /></button>
          </article>
        ))}
      </div>
      <a className="all-resources" href="#resources">Browse all resources<Icon name="arrow" size={16} /></a>
    </section>
  )
}

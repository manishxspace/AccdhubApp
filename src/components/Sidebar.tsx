import Icon from './Icon'

const navigation = [
  { label: 'Dashboard', icon: 'grid', active: true },
  { label: 'Subjects', icon: 'book', active: false },
  { label: 'Resources', icon: 'folder', active: false },
  { label: 'Progress', icon: 'chart', active: false },
] as const

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <a className="brand" href="#dashboard" aria-label="Campus home">
        <span className="brand-mark"><span /></span>
        <span>campus<span className="brand-period">.</span></span>
      </a>

      <div className="nav-label">LEARNING SPACE</div>
      <nav aria-label="Main navigation">
        <ul className="nav-list">
          {navigation.map((item) => (
            <li key={item.label}>
              <a className={`nav-link${item.active ? ' active' : ''}`} href="#dashboard" aria-current={item.active ? 'page' : undefined}>
                <Icon name={item.icon} size={19} />
                <span>{item.label}</span>
                {item.active && <span className="active-indicator" />}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-bottom">
        <div className="semester-card">
          <div className="semester-icon"><Icon name="book" size={17} /></div>
          <p>Keep your momentum</p>
          <span>A little progress each day adds up.</span>
          <div className="semester-dots"><i /><i /><i /><i /><i /><i /><i /></div>
        </div>
        <div className="profile-row">
          <div className="avatar">M</div>
          <div className="profile-copy"><strong>Manish</strong><span>Student account</span></div>
          <button className="icon-button profile-menu" aria-label="Account options"><Icon name="dots" size={19} /></button>
        </div>
      </div>
    </aside>
  )
}

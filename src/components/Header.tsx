import Icon from './Icon'

export default function Header() {
  return (
    <header className="topbar">
      <div className="breadcrumb"><span>Learning space</span><Icon name="chevron" size={14} /><strong>Dashboard</strong></div>
      <div className="topbar-actions">
        <button className="search-button" aria-label="Search resources"><Icon name="search" size={18} /><span>Search anything...</span><kbd>⌘ K</kbd></button>
        <button className="icon-button notification-button" aria-label="Notifications"><Icon name="bell" size={19} /><i /></button>
        <div className="topbar-avatar" aria-label="Manish">M</div>
      </div>
    </header>
  )
}

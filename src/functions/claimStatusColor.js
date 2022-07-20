export const claimStatusColor = (status) => {
  switch (status) {
    case "decl":
      return { background: '#E84393' }
    case "new":
      return { background: '#6C5CE7' }
    case "in-progress":
      return { background: '#FDCB6E' }
    case "done":
      return { background: '#00B894' }
    default:
      return null
  }
}
import classes from './logistics-item.module.css'

function LogisticsItem(props) {
  const { icon: Icon, children } = props

  return (
    <li className={classes.item}>
      <span className={classes.icon}>
        <Icon />
      </span>
      <span className={classes.content}>{children}</span>
    </li>
  )
}

export default LogisticsItem

import './index.css'

const cardItem = props => {
  const {techCard} = props
  const {title, description, imgUrl, className} = techCard
  return (
    <li className={`${className}`}>
      <div>
        <h1 className="heading">{title}</h1>
        <p className="description">{description}</p>
        <img src={imgUrl} alt="{title}" />
      </div>
    </li>
  )
}

export default cardItem

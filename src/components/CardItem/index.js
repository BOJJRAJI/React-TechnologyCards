import './index.css'

const CardItem = props => {
  const {details} = props
  const {title, description, imgUrl, className} = details

  return (
    <li className={`${className} card`}>
      <h1 className="card-heading">{title}</h1>
      <p className="card-para">{description}</p>
      <div className="image-container">
        <img src={imgUrl} className="image" alt={title} />
      </div>
    </li>
  )
}

export default CardItem

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from '../../styles/Card.module.css';

// Importing card data
import cardData from '../../utils/cardData.json';

function ProjectCard() {
  return (
    <div className={styles['card-container']}>
      {
        cardData?.card.map((card, index) => {
          return (
            <Card style={{ width: '18rem', border: 'none' }} key={`card-${index}`}>
              <Card.Img variant="top" src={`/images/${card.imageName}.webp`} />
              <Card.Body>
                <Card.Title style={{ display: 'flex', justifyContent: 'center' }}>{card.title}</Card.Title>
                <Card.Text>
                  {card.description}
                </Card.Text>
                <div className={styles['link-container']}>
                <a href={card.github}>Github</a>
                <a href={card.demo}>Demo</a>
                </div>
              </Card.Body>
            </Card>
          )
        })
      }
    </div>
  )
}

export default ProjectCard;
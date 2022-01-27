import React from "react"
import { Card, Button} from 'react-bootstrap'

class ProductCard extends React.Component {

    render(){
        return(
            <Card class="p-2" style={{ width: '14rem', margin: 10 , padding: 0}}>
                <Card.Img variant="top" src={this.props.productData.image} />
                <Card.Body>
                    <Card.Title style={{ height: '6rem'}}>{this.props.productData.name}</Card.Title>
                    <Card.Text>
                    {this.props.productData.volume}
                    </Card.Text>
                    <div className="d-grid gap-2">
                        <Button variant="danger" size="lg">Buy</Button>
                    </div>
                </Card.Body>
            </Card>
        )
    }
}

export default ProductCard;
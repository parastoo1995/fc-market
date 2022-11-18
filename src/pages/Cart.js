import React , { useEffect  } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch , useSelector } from 'react-redux'
import { Row , Col , ListGroup , Image , Button ,Card } from 'react-bootstrap'

import { addToCart , removeFromCart } from '../action/cartAction'

const Cart = () => {
  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)

  const { cartItems } = cart

  const { id } = useParams()

  useEffect(() => {
    if( id ) {
      dispatch(addToCart(id))
    }
    
  } , [dispatch , id])

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  return (
  <div>
    <Row>
      <Col md={8}>
        <h2>سبد خرید</h2>
        {cartItems.lenght === 0 ? <p>سبد خرید خالی است</p> :
        <ListGroup variant="flush">
          {cartItems.map((item) => (
            <ListGroup.Item key={item.product}>
              <Row>
                <Col md={2}>
                  <Image src={item.image} alt={item.name} fluid rounded />
                </Col>
                <Col md={3}>
                  {item.name}
                </Col>
                <Col md={2}>
                  {item.price}
                </Col>
                <Col md={2}>
                  <Button
                  type="button"
                  variant="light"
                  onClick={() => removeFromCartHandler(item.product)}
                  >
                    <i className='fa fa-trash'></i>
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
        }
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              مجموع: {cartItems.reduce((acc , item) => acc + item.price , 0)}
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  </div>
  )
}

export default Cart
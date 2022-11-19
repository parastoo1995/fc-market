import React , { useEffect } from 'react'
//import axios from 'axios'
import { useDispatch , useSelector } from 'react-redux'
import { Link , useParams , useNavigate } from 'react-router-dom'
import { Row , Col , Image , ListGroup , Button, ListGroupItem } from 'react-bootstrap'

// import products from '../products'
import { productDetailAction } from '../action/productAction'

const Product = ({ match }) => {
  //const [product , setProduct] = useState({})

  const dispatch = useDispatch()

  const productDetail = useSelector((state) => state.productDetail)

  const { loading , product } = productDetail

  const { id } = useParams()

  let navigate = useNavigate()

  // const product = products.find((item) => {
  //   return item._id === id
  // })

  useEffect(() => {
    dispatch(productDetailAction(id))

    // const sendRequest = async () => {
    //   const response = await axios.get(`http://localhost:8000/api/products/${id}`)

    //   setProduct(response.data)
    // }

    // sendRequest()

  } , [dispatch , match])

  const addToCartHandler = () => {
    navigate(`/cart/${id}`)
  }

  return (
    <div>
      <Link to="/" className='btn btn-light my-3'>
        بازگشت به صفحه اصلی
      </Link>

      {loading ? <h2>در حال دریافت محصول ...</h2> :
      <Row>
      <Col md={6}>
        <Image src={product?.image} fluid />
      </Col>
      <Col md={3}>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <h3>{product?.name}</h3>
          </ListGroup.Item>
          <ListGroup.Item>
            {product?.price}
          </ListGroup.Item>
          <ListGroup.Item>
            {product?.description}
          </ListGroup.Item>
        </ListGroup>
      </Col>
      <Col md={3}>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <Button
            onClick={addToCartHandler}
            className='btn-block' type="button">
              افزودن به سبد خرید
            </Button>
          </ListGroup.Item>
        </ListGroup>
      </Col>
    </Row>
      }
    </div>
  )
}

export default Product
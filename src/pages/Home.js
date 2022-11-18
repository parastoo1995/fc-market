import React , { useEffect } from 'react'
import { Row , Col } from 'react-bootstrap'
import { useDispatch , useSelector } from 'react-redux'
//import axios from 'axios'

import Product from '../components/Product/Product'
import { productListAction } from '../action/productAction'
// import products from '../products'

const Home = () => {
    //const [products , setProducts] = useState([])
    const dispatch = useDispatch()

    const productList = useSelector((state) => state.productList)

    const { loading , products } = productList

    useEffect(() => {
        dispatch(productListAction())

        // const sendRequest = async () => {
        //     const response = await axios.get('http://localhost:8000/api/products')

        //     setProducts(response.data)
        // }

        // sendRequest()
    } , [dispatch])

  return (
    <div>
        <h1>محصولات</h1>
        {loading ? <h2>در حال دریافت محصولات ...</h2> : 
        <Row>
        {products.map((item) => {
            return (
                <Col key={item._id} sm={12} md={6} lg={4}>
                    <Product product={item} />
                </Col>
            )
        })}
    </Row>
        }
    </div>
  )
}

export default Home
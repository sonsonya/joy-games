import React from 'react'
import { Container, Row, Col, Form, InputGroup, FormControl, Button} from 'react-bootstrap'
import Axios from 'axios'
import { API_URL } from '../constans/API'
import ProductCard from '../components/ProductCard'

class Products extends React.Component {

    state = {
        products: [],
        filteredBy: [],
        searchInput: "",
        selectCategoryInput: "0",
        sortBy: ""
    }

    fetchProducts = () => {
        Axios.get(`${API_URL}/products`)
        .then((result) => {
            this.setState({ products: result.data, filteredBy: result.data })
        })
        .catch(() => {
            alert("Terjadi kesalahan di server")
        })
    }

    selectInputHandler = (event) => {
        const name = event.target.name
        const value = event.target.value

        this.setState({ [name] : value })
    }

    submitHandler = () => {
        const filteredBy = this.state.filteredBy.filter((val)=> {
            return val.category.includes(this.state.selectCategoryInput) && val.name.toLowerCase().includes(this.state.searchInput.toLowerCase())
        })

        this.setState({ filteredBy })
    }

    renderProducts = () => {

        let rawData = [ ...this.state.filteredBy ]

        const compareString = (a,b) => {
            if(a.name < b.name) {
                return -1;
            }
            if(b.name > a.name) {
                return 1;
            }
            return 0;
        }

        switch (this.state.sortBy) {
            case "lowestPrice":
                rawData.sort((a,b) => a.price - b.price);
                break
            case "highestPrice":
                rawData.sort((a,b) => b.price - a.price);
                break
            case "ascending":
                rawData.sort((a,b)=> compareString(a,b));
                break
            case "descending":
                rawData.sort((a,b) => compareString(b,a));
                break
            default:
                rawData = [ ...this.state.filteredBy ];
                break;
        }

        // this.setState({ filteredBy:rawData})

        return this.state.products.map((val) => {
            return <ProductCard productData={val} />
        })
    }

    componentDidMount(){
        this.fetchProducts();
    }


    render () {
        return (
            <div>
                <Container>
                    <Row >
                        <Col></Col>
                        <Col xs={9}>
                            <Form>
                                <Row className="align-items-center mt-4 mb-4">
                                    <Col xs="auto">
                                        <Form.Label>Urutkan berdasarkan </Form.Label>
                                    </Col>
                                    <Col xs="auto">
                                        <Form.Select onChange={this.selectInputHandler} name='sortBy'>
                                            <option>Pilih urutan</option>
                                            <option value="lowestPrice">Harga terendah</option>
                                            <option value="highestPrice">Harga tertinggi</option>
                                            <option value="ascending">A-Z</option>
                                            <option value="descending">Z-A</option>
                                        </Form.Select>
                                    </Col>
                                    <Col xs="auto">
                                        <Form.Label>Pilih Kategori</Form.Label>
                                    </Col>
                                    <Col xs="auto">
                                        <Form.Select onChange={this.selectInputHandler} name="selectCategoryInput">
                                            <option value="0">Semua Kategori</option>
                                            <option value="PROPOELIX™">PROPOELIX™</option>
                                            <option value="BEE BOTANICS™">BEE BOTANICS™</option>
                                            <option value="HDI ORIGINS™">HDI ORIGINS™</option>
                                            <option value="HDI NATURALS™">HDI NATURALS™</option>
                                            <option value="HDI KIDS">HDI KIDS</option>
                                            <option value="HDI">HDI</option>
                                            <option value="HDI PLUS">HDI PLUS</option>
                                        </Form.Select>
                                    </Col>
                                    <Col>
                                        <InputGroup>
                                            <FormControl 
                                                name="searchInput"
                                                placeholder="Cari Produk..."
                                                onChange={this.selectInputHandler} />
                                        </InputGroup>
                                    </Col>
                                    <Col xs="auto">
                                        <Button variant="danger" onClick={this.submitHandler}>
                                            Cari
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                            <Row>{this.renderProducts()}</Row>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}


export default Products;
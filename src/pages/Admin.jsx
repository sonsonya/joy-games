import React from 'react'
import { Button} from 'react-bootstrap'
import Axios from 'axios'
import { API_URL } from '../constans/API'
import swal from 'sweetalert';
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom';

class Admin extends React.Component {

    state = {
        products: [],
        addProductName: "",
        addProductVolume: "",
        addProductPrice: "",
        addProductImage: "",
        addProductCategory: "",

        editID: 0,

        editProductName: "",
        editProductVolume: "",
        editProductPrice: "",
        editProductImage: "",
        editProductCategory: "",

        show: false
    }

    fetchProducts = () => {
        Axios.get(`${API_URL}/products`)
        .then((result) => {
            this.setState({ products: result.data})
        })
        .catch(() => {
            alert("Terjadi kesalahan di server")
        })
    }

    inputHandler = (event) => {
        const { name, value } = event.target

        this.setState({ [name] : value})
    }

    addNewProduct = () => {
        if((this.state.addProductName && 
            this.state.addProductPrice &&
            this.state.addProductImage &&
            this.state.addProductVolume &&
            this.state.addProductCategory) !== "")
            {
                Axios.post(`${API_URL}/products`, {
                    name: this.state.addProductName,
                    price: parseInt(this.state.addProductPrice),
                    image: this.state.addProductImage,
                    volume: this.state.addProductVolume,
                    category: this.state.addProductCategory
                })
                .then(() => {
                    this.fetchProducts()
                    this.setState({
                        addProductName: "",
                        addProductVolume: "",
                        addProductPrice: "",
                        addProductImage: "",
                        addProductCategory: "",
                    })
                })
                .catch(() => {
                    alert("Terjadi kesalahan di server")
                })
            } else {
                swal({
                    title: "Mohon lengkapi data product!",
                    icon: "warning",
                    button: "OK",
                    dangerMode: true
                  });
            }
        
    }

    editoggle = (editData) => {
        this.setState({ 
            editID: editData.id,
            editProductName: editData.name,
            editProductImage: editData.image,
            editProductCategory: editData.category,
            editProductVolume: editData.volume  
        })
    }

    cancelButton = () => {
        this.setState({ editID: 0})
    }

    saveBtnHandler = () => {
        swal({
            title: "Are you sure save product?",
            icon: "info",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                Axios.patch(`${API_URL}/products/${this.state.editID}`,{
                    name: this.state.editProductName,
                    price: parseInt(this.state.editProductPrice),
                    image: this.state.editProductImage,
                    volume: this.state.editProductVolume,
                    category: this.state.editProductCategory
                })
                .then(()=>{
                    this.fetchProducts()
                    this.cancelButton()
                })
                .catch(()=>{
                    alert('Terjadi kesalahan pada server')
                })
            }
          });
    }

    deleteBtnHandler = (deleteID) => {
        swal({
            title: "Are you sure delete product?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                Axios.delete(`${API_URL}/products/${deleteID}`)
                .then(() => {
                    this.fetchProducts()
                })
                .catch(() => {
                    alert('Terjadi kesalahan di server')
                })
            }
          });
       
    }

    renderProducts = () => {
        return this.state.products.map(val => {
            if(val.id === this.state.editID){
                return (
                    <tr>
                        <td>{val.id}</td>
                        <td>{
                            <input value={this.state.editProductName} name="editProductName" onChange={this.inputHandler} type="text" className="form-control" />
                        }</td>
                        <td>
                            <input value={this.state.editProductPrice} name="editProductPrice" onChange={this.inputHandler} type="number" className="form-control" />
                        </td>
                        <td>
                            <input value={this.state.editProductImage} name="editProductImage" onChange={this.inputHandler} type="text" className="form-control" />
                        </td>
                        <td>
                            <input value={this.state.editProductVolume} name="editProductVolume" onChange={this.inputHandler} type="text" className="form-control" />
                        </td>
                        <td>
                            <select value={this.state.editProductCategory} name="addProductCategory" onChange={this.inputHandler} id="" className="form-control">
                                <option value="">All Items</option>
                                <option value="PROPOELIX™">PROPOELIX™</option>
                                <option value="BEE BOTANICS™">BEE BOTANICS™</option>
                                <option value="HDI ORIGINS™">HDI ORIGINS™</option>
                                <option value="HDI NATURALS™">HDI NATURALS™</option>
                                <option value="HDI KIDS">HDI KIDS</option>
                                <option value="HDI">HDI</option>
                                <option value="HDI PLUS">HDI PLUS</option>
                            </select>
                        </td>
                        <td colSpan="2">
                            <Button className="btn btn-success" onClick={this.saveBtnHandler}>Save</Button>
                        </td>
                        <td colSpan="2">
                            <Button className="btn btn-secondary" onClick={this.cancelButton}>Cancel</Button>
                        </td>
                    </tr>
                )
            }
            return (
                <tr>
                    <td>{val.id}</td>
                    <td>{val.name}</td>
                    <td>{val.price}</td>
                    <td><img width="30%" src={val.image} alt="" /></td>
                    <td>{val.volume}</td>
                    <td>{val.category}</td>
                    <td>
                        <Button onClick={() => this.editoggle(val)} className="btn btn-primary">Edit</Button>
                    </td>
                    <td>
                        <Button onClick={() => this.deleteBtnHandler(val.id)}className="btn btn-danger">Delete</Button>
                    </td>
                </tr>
            )
        })
    }

    componentDidMount() {
        this.fetchProducts()
    }

    render(){
        if(this.props.user.role !== 'admin'){
            return <Navigate to="/"></Navigate>
        }
        return (
            <div className="p-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>Manage Products</h1>
                        <table className="table mt-4">
                            <thead className="thead-light">
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Image</th>
                                    <th>Description</th>
                                    <th>Category</th>
                                    <th colSpan="2">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderProducts()}
                            </tbody>
                            <tfoot className="bg-light">
                                <tr>
                                    <td></td>
                                    <td>
                                        <input value={this.state.addProductName} name="addProductName" onChange={this.inputHandler} type="text" className="form-control" />
                                    </td>
                                    <td>
                                        <input value={this.state.addProductPrice} name="addProductPrice" onChange={this.inputHandler} type="number" className="form-control" />
                                    </td>
                                    <td>
                                        <input value={this.state.addProductImage} name="addProductImage" onChange={this.inputHandler} type="text" className="form-control" />
                                    </td>
                                    <td>
                                        <input value={this.state.addProductVolume} name="addProductVolume" onChange={this.inputHandler} type="text" className="form-control" />
                                    </td>
                                    <td>
                                        <select name="addProductCategory" onChange={this.inputHandler} id="" className="form-control">
                                            <option value="">All Items</option>
                                            <option value="PROPOELIX™">PROPOELIX™</option>
                                            <option value="BEE BOTANICS™">BEE BOTANICS™</option>
                                            <option value="HDI ORIGINS™">HDI ORIGINS™</option>
                                            <option value="HDI NATURALS™">HDI NATURALS™</option>
                                            <option value="HDI KIDS">HDI KIDS</option>
                                            <option value="HDI">HDI</option>
                                            <option value="HDI PLUS">HDI PLUS</option>
                                        </select>
                                    </td>
                                    <td colSpan="2">
                                        <Button className="btn btn-danger" onClick={this.addNewProduct}>Add Product</Button>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps,null)(Admin);
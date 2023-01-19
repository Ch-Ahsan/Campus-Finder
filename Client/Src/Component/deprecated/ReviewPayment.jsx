import React from 'react'
import NavbarCustomer from './NavbarCustomer'
import { Form,Button } from "react-bootstrap";
import Footer from './GlobalComponent/Footer';
const ReviewPayment = () => {
    return (
        <div >
            <div>
                <NavbarCustomer />
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div>
                    <h1>Pay Through Jazzcash/ easyPaisa</h1>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Account No</Form.Label>
                            <Form.Control type="text" placeholder="Enter Account Number" />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>PIN</Form.Label>
                            <Form.Control type="text" placeholder="Enter PIN" />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Total Amount</Form.Label>
                            <Form.Control type="text" value={1200} />

                        </Form.Group>
                        <Button style={{width:"500px",backgroundColor:"green",borderColor:"green"}} variant="primary" type="submit">
                            Pay Amount
                        </Button>

                    </Form>
                </div>

                <div>
                    <h1>Pay Through Bank/Select Bank</h1>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Enter Bank Name</Form.Label>
                            <Form.Control type="dropdown" placeholder="Enter Bank Number" />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Account No</Form.Label>
                            <Form.Control type="text" placeholder="Enter Account Number" />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>CVC</Form.Label>
                            <Form.Control type="text" placeholder="Enter PIN" />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Total Amount</Form.Label>
                            <Form.Control type="text" value={1200} />

                        </Form.Group>
                        <Button style={{width:"500px",backgroundColor:"green",borderColor:"green"}} variant="primary" type="submit">
                            Pay Amount
                        </Button>



                    </Form>

                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default ReviewPayment
import React from "react";
import Card from 'react-bootstrap/Card';

function Cards() {
    return (
        <Card style={{ width: '18rem', margin: '50px'}}>
            <Card.Body>
                <img src="https://img.freepik.com/premium-photo/great-quick-burger-french-fries-snack-with-drink-glass_124507-25631.jpg?size=626&ext=jpg&ga=GA1.1.927844030.1713634395&semt=ais" width={255} height={150} alt="" srcset="" />
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className=" mb-2 text-muted" style={{ "width": "18rem" }}>Card Subtitle</Card.Subtitle>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <div className="conatiner w-100">
                    <img src="" alt="" srcset="" />
                    <select className="m-2 h-100 bg-success rounded ">
                        {Array.from(Array(6), (e, i) => {
                            return (
                                <option key={i + 1} value={i + 1}>{i + 1}</option>
                            )
                        })}
                    </select>
                    <select className="m-2 h-100 bg-success rounded">
                        <option value="half">Half</option>
                        <option value="full">Full</option>
                    </select>
                    <div className="d-inline h-100 fs-5">
                        Total Price
                    </div>
                </div>
                {/* <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link> */}
            </Card.Body>
        </Card>
    );
}
export default Cards;
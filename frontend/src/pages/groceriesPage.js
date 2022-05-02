import React from 'react';
import { useState } from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

function GroceriesPage() {
    const titles = ["Pantry", "Produce", "Dairy", "Meat", "Frozen", "Miscellaneous"];

    // Groceries
    const [member, setMember] = useState("");
    const [members, setMembers] = useState([]);

    const removeMember = (index) => {
        setMembers((members) => members.filter((_, i) => i !== index));
      };

    const addMember = (e) => {
      e.preventDefault();
      setMembers((members) => [
        ...members,
        {member}
      ]);
    };


    // Dairy List
    const [dairy, setDairy] = useState("");
    const [dairys, setDairys] = useState([]);

    const removeDairy = (index) => {
        setDairys((dairys) => dairys.filter((_, i) => i !== index));
      };

    const addDairy = (e) => {
      e.preventDefault();
      setDairys((dairys) => [
        ...dairys,
        {
          dairy
        }
      ]);
    };

    // produce

    const [produce, setProduce] = useState("");
    const [produces, setProduces] = useState([]);

    const removeProduce = (index) => {
        setProduces((produces) => produces.filter((_, i) => i !== index));
      };

    const addProduce = (e) => {
      e.preventDefault();
      setProduces((produces) => [
        ...produces,
        {
          produce
        }
      ]);
    };


    // meat
    const [meat, setMeat] = useState("");
    const [meats, setMeats] = useState([]);

    const removeMeat = (index) => {
        setMeats((meats) => meats.filter((_, i) => i !== index));
      };

    const addMeat = (e) => {
      e.preventDefault();
      setMeats((meats) => [
        ...meats,
        {
          meat
        }
      ]);
    };

    // frozen
    const [frozen, setFrozen] = useState("");
    const [frozens, setFrozens] = useState([]);

    const removeFrozen = (index) => {
        setFrozens((frozens) => frozens.filter((_, i) => i !== index));
      };

    const addFrozen = (e) => {
      e.preventDefault();
      setFrozens((frozens) => [
        ...frozens,
        {
          frozen
        }
      ]);
    };

    // misc
    const [misc, setMisc] = useState("");
    const [miscs, setMiscs] = useState([]);

    const removeMisc = (index) => {
        setMiscs((miscs) => miscs.filter((_, i) => i !== index));
      };

    const addMisc = (e) => {
      e.preventDefault();
      setMiscs((miscs) => [
        ...miscs,
        {
          misc
        }
      ]);
    };



    return (
        <div>
            <h1>Grocery List </h1>
            <Row xs={1} md={2} className="g-4">
                    <Col>
                    <Card style={{marginLeft: '4vw', border: '0.25vw solid black', marginTop: '5vh', width: '45vw'}}>
                        <Card.Body>
                        <Card.Title>{titles[0]}</Card.Title>
                        <Card.Text>
                            <form onSubmit={addMember}>
                                <fieldset>
                                    {/* <label style={{marginRight: '2vw'}}>item: </label> */}
                                    <input style={{marginRight: '4vw', marginBottom: '3vh', width: '30vw'}} value={member} onChange={(e) => setMember(e.target.value)} />
                                    <button class="btn btn-warning">add item</button>

                                </fieldset>
                            </form>

                            {members.map((member, index) => {
                                return (
                                    <p>
                                        <label style={{marginRight: '4vw'}}>{member.member}</label>
                                        <button class="btn btn-warning" onClick={() => removeMember(index)}>remove</button>

                                    </p>
                                );
                            })}
                            
                        </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{marginLeft: '4vw', border: '0.25vw solid black', marginTop: '5vh', width: '45vw'}}>
                        <Card.Body>
                        <Card.Title>{titles[2]}</Card.Title>
                        <Card.Text>
                            <form onSubmit={addDairy}>
                                <fieldset>
                                    {/* <label style={{marginRight: '2vw'}}>item: </label> */}
                                    <input style={{marginRight: '4vw', marginBottom: '3vh', width: '30vw'}} value={dairy} onChange={(e) => setDairy(e.target.value)} />
                                    <button class="btn btn-warning">add item</button>

                                </fieldset>
                            </form>

                            {dairys.map((dairy, index) => {
                                return (
                                    <p>
                                        <label style={{marginRight: '4vw'}}>{dairy.dairy}</label>
                                        <button class="btn btn-warning" onClick={() => removeDairy(index)}>remove</button>

                                    </p>
                                );
                            })}
                            
                        </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{marginLeft: '4vw', border: '0.25vw solid black', marginTop: '5vh', width: '45vw'}}>
                        <Card.Body>
                        <Card.Title>{titles[1]}</Card.Title>
                        <Card.Text>
                            <form onSubmit={addProduce}>
                                <fieldset>
                                    {/* <label style={{marginRight: '2vw'}}>item: </label> */}
                                    <input style={{marginRight: '4vw', marginBottom: '3vh', width: '30vw'}} value={produce} onChange={(e) => setProduce(e.target.value)} />
                                    <button class="btn btn-warning">add item</button>
                                </fieldset>
                            </form>

                            {produces.map((produce, index) => {
                                return (
                                    <p>
                                        <label style={{marginRight: '4vw'}}>{produce.produce}</label>
                                        <button class="btn btn-warning" onClick={() => removeProduce(index)}>remove</button>
                                    </p>
                                );
                            })}
                            
                        </Card.Text>
                        </Card.Body>
                    </Card>

                    
                    </Col>

                    <Col>
                    <Card style={{border: '0.25vw solid black', marginTop: '5vh', width: '45vw'}}>
                        <Card.Body>
                        <Card.Title>{titles[3]}</Card.Title>
                        <Card.Text>
                            <form onSubmit={addMeat}>
                                <fieldset>
                                    {/* <label style={{marginRight: '2vw'}}>item: </label> */}
                                    <input style={{marginRight: '4vw', marginBottom: '3vh', width: '30vw'}} value={meat} onChange={(e) => setMeat(e.target.value)} />
                                    <button class="btn btn-warning">add item</button>
                                </fieldset>
                            </form>

                            {meats.map((meat, index) => {
                                return (
                                    <p>
                                        <label style={{marginRight: '4vw'}}>{meat.meat}</label>
                                        <button class="btn btn-warning" onClick={() => removeMeat(index)}>remove</button>

                                    </p>
                                );
                            })}
                            
                        </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{border: '0.25vw solid black', marginTop: '5vh', width: '45vw'}}>
                        <Card.Body>
                        <Card.Title>{titles[4]}</Card.Title>
                        <Card.Text>
                            <form onSubmit={addFrozen}>
                                <fieldset>
                                    {/* <label style={{marginRight: '2vw'}}>item: </label> */}
                                    <input style={{marginRight: '4vw', marginBottom: '3vh', width: '30vw'}} value={frozen} onChange={(e) => setFrozen(e.target.value)} />
                                    <button class="btn btn-warning">add item</button>
                                </fieldset>
                            </form>

                            {frozens.map((frozen, index) => {
                                return (
                                    <p>
                                        <label style={{marginRight: '4vw'}}>{frozen.frozen}</label>
                                        <button class="btn btn-warning" onClick={() => removeFrozen(index)}>remove</button>

                                    </p>
                                );
                            })}
                            
                        </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{border: '0.25vw solid black', marginTop: '5vh', width: '45vw'}}>
                        <Card.Body>
                        <Card.Title>{titles[5]}</Card.Title>
                        <Card.Text>
                            <form onSubmit={addMisc}>
                                <fieldset>
                                    {/* <label style={{marginRight: '3vw'}}>item: </label> */}
                                    <input style={{marginRight: '4vw', marginBottom: '3vh', width: '30vw'}} value={misc} onChange={(e) => setMisc(e.target.value)} />
                                    <button class="btn btn-warning">add item</button>
                                </fieldset>
                            </form>

                            {miscs.map((misc, index) => {
                                return (
                                    <p>
                                        <label style={{marginRight: '4vw'}}>{misc.misc}</label>
                                        <button  class="btn btn-warning" onClick={() => removeMisc(index)}>remove</button>

                                    </p>
                                );
                            })}
                            
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
            </Row>
        </div>
    )
}

export default GroceriesPage;
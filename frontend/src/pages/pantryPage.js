import React from 'react';
import { useState } from "react";
import '../App.css';


function PantryPage() {
    const titles = ["Pantry", "Produce", "Dairy", "Meat", "Frozen", "Miscellaneous"];

    // Pantry
    const [members, setMembers] = useState([]);
    const [produceMembers, setProduceMembers] = useState([]);
    const [meatMembers, setMeatMembers] = useState([]);
    const [dairyMembers, setDairyMembers] = useState([]);
    const [pantryMembers, setPantryMembers] = useState([]);
    const [frozenMembers, setFrozenMembers] = useState([]);






    const [category, setCategory] = useState("");
    const [item, setItem] = useState("");
    const [quantity, setQuantity] = useState("");

    // const [producecategory, setProduceCategory] = useState("");
    const [produceitem, setProduceItem] = useState("");
    const [producequantity, setProduceQuantity] = useState("");

    const [meatitem, setMeatItem] = useState("");
    const [meatquantity, setMeatQuantity] = useState("");

    const [dairyitem, setDairyItem] = useState("");
    const [dairyquantity, setDairyQuantity] = useState("");

    const [pantryitem, setPantryItem] = useState("");
    const [pantryquantity, setPantryQuantity] = useState("");

    const [frozenitem, setFrozenItem] = useState("");
    const [frozenquantity, setFrozenQuantity] = useState("");


    // const[data, setData] = useState([
    //     {category: "Produce", item: "Broccoli", quantity: "3 bags"},
    //     {category: "Produce", item: "Tomato", quantity: "4"},
    //     {category: "Produce", item: "Onion", quantity: "3"},
    //     {category: "Meat", item: "Sirloin", quantity: "2 lbs"},
    //     {category: "Meat", item: "Salmon", quantity: "1 lb"},
    //     {category: "Meat", item: "Chicken thigh", quantity: "2 lbs"},
    //     {category: "Dairy", item: "Cheese", quantity: "1 bag"},
    //     {category: "Pantry", item: "Pasta", quantity: "2 lbs"},
    //     {category: "Pantry", item: "Rice", quantity: "3 lbs"},
    // ]);

    const[data, setData] = useState([
        {item: "Paper Towels", quantity: "4"},
    ]);

    const[produceData, setProduceData] = useState([
        {item: "Broccoli", quantity: "3 bags"},
        {item: "Tomato", quantity: "4"},
        {item: "Onion", quantity: "3"},
    ]);

    const[meatData, setMeatData] = useState([
        {item: "Sirloin", quantity: "2 lbs"},
        {item: "Salmon", quantity: "1 lb"},
        {item: "Chicken thigh", quantity: "2 lbs"},

    ]);

    const[dairyData, setDairyData] = useState([
        {item: "Cheese", quantity: "1 bag"},
    ]);

    const[pantryData, setPantryData] = useState([
        {item: "Pasta", quantity: "2 lbs"},
        {item: "Rice", quantity: "3 lbs"},
    ]);

    const[frozenData, setFrozenData] = useState([
        {item: "Frozen peas", quantity: "1 bag"},
        {item: "Frozen onion", quantity: "1/2 bag"},
    ]);



    const removeMember = (index) => {
        setMembers((category) => members.filter((_, i) => i !== index));
      };

    const addMember = (e) => {
      e.preventDefault();
      setMembers((members) => [
        ...members,
        {category, item, quantity}
      ]);

    };

    const removeFromList = (item) => {
        setData(data.filter((_, i) => i !== item));
    };


    const removeProduceMember = (index) => {
        setProduceMembers((category) => produceMembers.filter((_, i) => i !== index));
      };

    const addProduceMember = (e) => {
      e.preventDefault();
      setProduceMembers((produceMembers) => [
        ...produceMembers,
        {produceitem, producequantity}
      ]);

    };
    
    const removeProduceFromList = (item) => {
        setProduceData(produceData.filter((_, i) => i !== item));
    };

    const removeMeatMember = (index) => {
        setMeatMembers((category) => meatMembers.filter((_, i) => i !== index));
      };

    const addMeatMember = (e) => {
      e.preventDefault();
      setMeatMembers((meatMembers) => [
        ...meatMembers,
        {meatitem, meatquantity}
      ]);

    };
    
    const removeMeatFromList = (item) => {
        setMeatData(meatData.filter((_, i) => i !== item));
    };


    const removeDairyMember = (index) => {
        setDairyMembers((category) => dairyMembers.filter((_, i) => i !== index));
      };

    const addDairyMember = (e) => {
      e.preventDefault();
      setDairyMembers((dairyMembers) => [
        ...dairyMembers,
        {dairyitem, dairyquantity}
      ]);

    };
    
    const removeDairyFromList = (item) => {
        setDairyData(dairyData.filter((_, i) => i !== item));
    };


    const removePantryMember = (index) => {
        setPantryMembers((category) => pantryMembers.filter((_, i) => i !== index));
      };

    const addPantryMember = (e) => {
      e.preventDefault();
      setPantryMembers((pantryMembers) => [
        ...pantryMembers,
        {pantryitem, pantryquantity}
      ]);

    };
    
    const removePantryFromList = (item) => {
        setPantryData(pantryData.filter((_, i) => i !== item));
    };

    const removeFrozenMember = (index) => {
        setFrozenMembers((category) => frozenMembers.filter((_, i) => i !== index));
      };

    const addFrozenMember = (e) => {
      e.preventDefault();
      setFrozenMembers((frozenMembers) => [
        ...frozenMembers,
        {frozenitem, frozenquantity}
      ]);

    };
    
    const removeFrozenFromList = (item) => {
        setFrozenData(frozenData.filter((_, i) => i !== item));
    };
    

    return (

        <div>
            <h1 style={{marginBottom: '4vw'}}>Pantry</h1>
            <table id="pantryTable">
                <tr>
                    <th><h3>Items</h3></th>
                    <th><h3>Quantity</h3></th>

                </tr>

                <td colSpan={3}>
                <h5>Produce</h5>
                {/* <form onSubmit={addProduceMember}>
                    <label>Item:</label>
                    <input class="pantryItem" value={produceitem} onChange={(e) => setProduceItem(e.target.value)} />
                    <label>Quantity:</label>
                    <input class="pantryQuantity" value={producequantity} onChange={(e) => setProduceQuantity(e.target.value)} /> 

                    <button class="btn btn-warning pantryButton">add produce item</button>
                </form> */}
                </td>

                {produceData.map((val,key) => {
                    return(
                        <tr key={key}>
                            <td>
                                <label style={{marginRight: '4vw'}}>{val.item}</label>
                            </td>
                            <td>
                                <label style={{marginRight: '4vw'}}>{val.quantity}</label>
                            </td>
                            <td>
                                <button class="btn btn-warning" onClick={() => removeProduceFromList(key)}>remove</button>
                            </td>
                        </tr>
                    )
                    
                })}

                {produceMembers.map((key, index) => {
                    return (
                        <tr key={index}>
                            <td>
                                <label style={{marginRight: '4vw'}}>{key.produceitem}</label>
                            </td>
                            <td>
                                <label style={{marginRight: '4vw'}}>{key.producequantity}</label>
                            </td>
                            <td>
                                <button class="btn btn-warning" onClick={() => removeProduceMember(index)}>remove</button>
                            </td>
                        </tr>
                    )
                })}

                <td colSpan={3}><h5>Meat</h5></td>

                {meatData.map((val,key) => {
                    return(
                        <tr key={key}>
                            <td>
                                <label style={{marginRight: '4vw'}}>{val.item}</label>
                            </td>
                            <td>
                                <label style={{marginRight: '4vw'}}>{val.quantity}</label>
                            </td>
                            <td>
                                <button class="btn btn-warning" onClick={() => removeMeatFromList(key)}>remove</button>
                            </td>

                        </tr>
                    )
                    
                })}
                {meatMembers.map((key, index) => {
                    return (
                        <tr key={index}>
                            <td>
                                <label style={{marginRight: '4vw'}}>{key.meatitem}</label>
                            </td>
                            <td>
                                <label style={{marginRight: '4vw'}}>{key.meatquantity}</label>
                            </td>
                            <td>
                                <button class="btn btn-warning" onClick={() => removeMeatMember(index)}>remove</button>
                            </td>
                        </tr>
                    )
                })}

                <td colSpan={3}><h5>Dairy</h5></td>

                {dairyData.map((val,key) => {
                    return(
                        <tr key={key}>
                            <td>
                                <label style={{marginRight: '4vw'}}>{val.item}</label>
                            </td>
                            <td>
                                <label style={{marginRight: '4vw'}}>{val.quantity}</label>
                            </td>
                            <td>
                                <button class="btn btn-warning" onClick={() => removeDairyFromList(key)}>remove</button>
                            </td>

                        </tr>
                    )
                    
                })}
                {dairyMembers.map((key, index) => {
                    return (
                        <tr key={index}>
                            <td>
                                <label style={{marginRight: '4vw'}}>{key.dairyitem}</label>
                            </td>
                            <td>
                                <label style={{marginRight: '4vw'}}>{key.dairyquantity}</label>
                            </td>
                            <td>
                                <button class="btn btn-warning" onClick={() => removeDairyMember(index)}>remove</button>
                            </td>
                        </tr>
                    )
                })}

                <td colSpan={3}><h5>Pantry</h5></td>

                {pantryData.map((val,key) => {
                    return(
                        <tr key={key}>
                            <td>
                                <label style={{marginRight: '4vw'}}>{val.item}</label>
                            </td>
                            <td>
                                <label style={{marginRight: '4vw'}}>{val.quantity}</label>
                            </td>
                            <td>
                                <button class="btn btn-warning" onClick={() => removePantryFromList(key)}>remove</button>
                            </td>

                        </tr>
                    )
                    
                })}
                {pantryMembers.map((key, index) => {
                    return (
                        <tr key={index}>
                            <td>
                                <label style={{marginRight: '4vw'}}>{key.pantryitem}</label>
                            </td>
                            <td>
                                <label style={{marginRight: '4vw'}}>{key.pantryquantity}</label>
                            </td>
                            <td>
                                <button class="btn btn-warning" onClick={() => removePantryMember(index)}>remove</button>
                            </td>
                        </tr>
                    )
                })}

                <td colSpan={3}><h5>Frozen</h5></td>

                {frozenData.map((val,key) => {
                    return(
                        <tr key={key}>
                            <td>
                                <label style={{marginRight: '4vw'}}>{val.item}</label>
                            </td>
                            <td>
                                <label style={{marginRight: '4vw'}}>{val.quantity}</label>
                            </td>
                            <td>
                                <button class="btn btn-warning" onClick={() => removeFrozenFromList(key)}>remove</button>
                            </td>

                        </tr>
                    )
                    
                })}
                {frozenMembers.map((key, index) => {
                    return (
                        <tr key={index}>
                            <td>
                                <label style={{marginRight: '4vw'}}>{key.frozenitem}</label>
                            </td>
                            <td>
                                <label style={{marginRight: '4vw'}}>{key.frozenquantity}</label>
                            </td>
                            <td>
                                <button class="btn btn-warning" onClick={() => removeFrozenMember(index)}>remove</button>
                            </td>
                        </tr>
                    )
                })}


                <td colSpan={3}><h5>Miscellaneous</h5></td>

                {data.map((val,key) => {
                    return(
                        <tr key={key}>
                            <td>
                                <label style={{marginRight: '4vw'}}>{val.item}</label>
                            </td>
                            <td>
                                <label style={{marginRight: '4vw'}}>{val.quantity}</label>
                            </td>
                            <td>
                                <button class="btn btn-warning" onClick={() => removeFromList(key)}>remove</button>
                            </td>

                        </tr>
                    )
                    
                })}
                {members.map((key, index) => {
                    return (
                        <tr key={index}>
                            <td>
                                <label style={{marginRight: '4vw'}}>{key.item}</label>
                            </td>
                            <td>
                                <label style={{marginRight: '4vw'}}>{key.quantity}</label>
                            </td>
                            <td>
                                <button class="btn btn-warning" onClick={() => removeMember(index)}>remove</button>
                            </td>
                        </tr>
                    )
                })}

            </table>

            <div className='pantryInput'>
                <form onSubmit={addProduceMember}>
                    <label>Item:</label>
                    <input class="pantryItem" value={produceitem} onChange={(e) => setProduceItem(e.target.value)} />
                    <label>Quantity:</label>
                    <input class="pantryQuantity" value={producequantity} onChange={(e) => setProduceQuantity(e.target.value)} /> 

                    <button class="btn btn-warning pantryButton">add produce item</button>
                </form>


                <form onSubmit={addMeatMember}>
                    <label>Item:</label>
                    <input class="pantryItem" value={meatitem} onChange={(e) => setMeatItem(e.target.value)} />
                    <label>Quantity:</label>
                    <input class="pantryQuantity" value={meatquantity} onChange={(e) => setMeatQuantity(e.target.value)} /> 

                    <button class="btn btn-warning pantryButton">add meat item</button>
                </form>

                <form onSubmit={addDairyMember}>
                    <label>Item:</label>
                    <input class="pantryItem" value={dairyitem} onChange={(e) => setDairyItem(e.target.value)} />
                    <label>Quantity:</label>
                    <input class="pantryQuantity" value={dairyquantity} onChange={(e) => setDairyQuantity(e.target.value)} /> 

                    <button class="btn btn-warning pantryButton">add dairy item</button>
                </form>

                <form onSubmit={addPantryMember}>
                    <label>Item:</label>
                    <input class="pantryItem" value={pantryitem} onChange={(e) => setPantryItem(e.target.value)} />
                    <label>Quantity:</label>
                    <input class="pantryQuantity" value={pantryquantity} onChange={(e) => setPantryQuantity(e.target.value)} /> 

                    <button class="btn btn-warning pantryButton">add pantry item</button>
                </form>

                <form onSubmit={addFrozenMember}>
                    <label>Item:</label>
                    <input class="pantryItem" value={frozenitem} onChange={(e) => setFrozenItem(e.target.value)} />
                    <label>Quantity:</label>
                    <input class="pantryQuantity" value={frozenquantity} onChange={(e) => setFrozenQuantity(e.target.value)} /> 

                    <button class="btn btn-warning pantryButton">add frozen item</button>
                </form>

                <form onSubmit={addMember}>
                    <label>Item:</label>
                    <input class="pantryItem" value={item} onChange={(e) => setItem(e.target.value)} />
                    <label>Quantity:</label>
                    <input class="pantryQuantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} /> 

                    <button class="btn btn-warning pantryButton">add miscellaneous item</button>
                </form>
            </div>

        </div>

    );
}

export default PantryPage;
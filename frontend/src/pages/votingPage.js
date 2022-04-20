import React,{Component} from 'react';
import '../App.css';
import axios from "axios";

class votingPage extends Component{
	constructor(props){
		super(props);
		this.state = {
			recipes : [
				{name: "Butter Chicken", votes: 0, pic:"https://www.aheadofthyme.com/wp-content/uploads/2016/01/indian-butter-chicken-3.jpg"},
				{name: "Spaghetti & Meatballs", votes: 0, pic: "https://hips.hearstapps.com/delish/assets/17/39/1506456062-delish-spaghetti-meatballs.jpg"},
				{name: "Pizza", votes: 0, pic: "https://austinspizza.com/wp-content/uploads/2019/03/ap-about-us-food-02.jpg"},
				{name: "Tacos", votes: 0, pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQli0rEwuMjUfZQ_iTxGgxAUbFM0pZMGN0PrQ&usqp=CAU"}
			],
            modal: false
		}
	}

    componentDidMount(){
        this.refreshList();
    }

    refreshList = () => {
        axios   
            .get("/api/recipes/")
            .then((res) => this.setState({recipes : res.data}))
            .catch((err) => console.log(err));

    };

    toggle = () => {
        this.setState({modal: !this.state.modal});
    };

    handleVote = (item) => {
        this.toggle();

        if (item.id){
            axios
                .put('/api/recipes/${item.id}/', item)
                .then((res) => this.refreshList());
            return;
        }
        axios
            .post("api/recipes", item)
            .then((res) => this.refreshList());
    };

	vote (i) {
		let newRecipes = [...this.state.recipes];
		newRecipes[i].votes++;
		function swap(array, i, j) {
			var temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
		this.setState({recipes: newRecipes});
		
	}

	render(){
		return(
			<>
				<h1>Vote For Which Recipes You'd Like to Eat!</h1>
				<div className="recipes">
					{
						this.state.recipes.map((recip, i) => 
							<div key={i} className="recipesVote">
                                <div classname="voteButton">
							    	<button class="voteButton" onClick={this.vote.bind(this, i)}>Vote</button>
                                    {/* <button onClick={() => this.handleVote(item)}>Vote</button> */}
                                </div>
								<div className="voteCount">
									{recip.votes}
								</div>
                                <div className="recipePic">
									<img src={recip.pic} width="300" height="200"></img>
								</div>

								<div className="recipesNameVote">
									{recip.name}
								</div>

							</div>
						)
					}
				</div>
			</>
		);
	}

    // votingPage() {
    //     return (
    //         <div>
    //             <h1>This is the Voting Page</h1>
    //         </div>
    //     )
    // }


}



export default votingPage;
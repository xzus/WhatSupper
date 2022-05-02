import React,{Component} from 'react';
import '../App.css';
import axios from "axios";

class votingPage extends Component{
	constructor(props){
		super(props);
		this.state = {
			recipes : null,
			// recipes : [],
			// recipes : {recipe: "Pasta", votes: 0},
            modal: false
		}
	}

    componentDidMount(){
        this.refreshList();
    }

    refreshList = () => {
        axios   
            .get("api/votes/")
            .then((res) => this.setState({recipes : res.data}).bind(this))
            .catch((err) => console.log(err));

    };

    toggle = () => {
        this.setState({modal: !this.state.modal});
    };

    handleVote = (item) => {
        //this.toggle();
		item.votes++;
		console.log(item);
		// console.log(item.id);
        if (item.id){
            axios
                .put('api/votes/' + item.id + '/', item)
                .then((res) => this.refreshList());
            return;
        }
        axios
            .post("api/votes/", item)
            .then((res) => this.refreshList().bind(this));
    };

	// Reset the votes to 0
	resetVotes = () => {
		let rList = this.state.recipes;
		rList.forEach((item) => {
			item.votes = 0;
			axios
			.put('/api/votes/' + item.id + '/', item)
			.then((res) => this.refreshList());
		return;
		});
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
		if(this.state.recipes === null){
			return null}
		return(
			<>
				<h1>Vote For Which Recipes You'd Like to Eat!</h1>
				<button class = "reset" onClick={() => this.resetVotes()}>Reset</button>
				<div className="recipes">
					{
						this.state.recipes.map((recip, i) => 
							<div key={i} className="recipesVote">
                                
								
								<div className="recipesNameVote">
									{recip.recipe.recipeName}
								</div>
								<div className="voteButton">
							    	<button class="voteButton" onClick={() => this.handleVote(recip)}>Vote</button>
                                    {/* <button onClick={() => this.handleVote(item)}>Vote</button> */}
                                </div>
								<div className="voteCount">
									{recip.votes}
								</div>
                                <div className="recipePic">
									<img src={recip.recipe.image} width="300" height="200"></img>
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
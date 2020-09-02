import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CheckIcon from '@material-ui/icons/Check';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export const Button1 = (props) => {
	const classes = useStyles();
	const [click, setClick] = React.useState(false);
	let Clicked = localStorage.getItem('click') || null;

	const clicked = () => {
		console.log(props);
		
	    setClick(true); //sets click to true

	    props.web3.eth.getCoinbase((err, accounts) => {

	    	if(err){
	    		console.log(err);
	    	}

	    	props.electionContract.deployed().then(async (instance) => {
	    		const app = instance;
	    		const res = await app.incrementVote(props.id + 1, {from: accounts}); //increments candidate vote based on the candidate id
	    		let votes = []; //holds candidate vote data
	    		let candidates = []; //holds candidate name data

	    		if (res) {
	    			console.log('vote counted...');

	    			for(let i = 1; i <= props.Count; i += 1){

			           const new_res = await app.voter(i);
			           //  
			           votes.push(new_res.vote.words[0]);
			           candidates.push(new_res.name);

			        }

			        props.onVote(votes); //changes candidate vote state to new state from the smart contract
			        props.onVotername(candidates); //changes candidate state to new state from the smart contract
			        localStorage.setItem('click', 'true'); //saves a user click state
			        toast.success('😎 Voted');

	    		}

	    	})

	    });

	    setTimeout(() => {
	      setClick(false);
	    }, 3000); //sets click to false after 3000 seconds

  	};

  	const votingtwice = () => {
		toast.error("🧐 sorry you can't vote twice",{
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			progress: undefined,
		});
  	};

  	return(

  			<div>
  				<>
		           
		          {!click ?
		          	  <div>
			          	  {!Clicked ? 
			          	  		
					              <Button
					                onClick={clicked}
					                className={classes.button}
					              >
					                Vote
					              </Button>

					              :

					              <Button
					                onClick={votingtwice}
					                className={classes.button}
					              >
					                Vote
					              </Button>
					            
				          }
			          </div>
		          :
		          	  <Button
		                size="small"
		                className={classes.button}
		                endIcon={<CheckIcon />}
		              >
		                Voted
		              </Button>
			      }
		        </>

		        <ToastContainer limit={1} />

		    </div>
			
  	);

} 
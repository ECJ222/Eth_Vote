import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`
    body{
	  background-color: ${({ theme }) => theme.secondaryColor};
	}

	h1{
	  color: ${({ theme }) => theme.mainText};
	}

	.container{
	 
	  height: auto; 
	  text-align: center;
	  padding-bottom: 10px; 
	}

	.card1{
	  margin-top: 8px;

	  width: 85%;
	  height: 500px;
	  display: inline-block;
	  margin-bottom: 30px;
	  box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.75);
	   background-color: ${({ theme }) => theme.secondaryColor};
	}

	.card2{
	  padding-top: 30px;

	  width: 85%;
	  height: auto;
	  display: inline-block;
	  box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.75);
	  background-color: ${({ theme }) => theme.secondaryColor};
	}

	button{
		width: 50%;
		background: #2EB62C !important;
		color: ${({ theme }) => theme.mainText} !important;
	}

	button:hover{
		background: green !important;
	}

	div.loader{
			display: flex;
			justify-content: center;
			width: 100%;
			position: absolute;
			top: 50%;
	}

	/* theme dots */

	#theme-options-wrapper{
	  display: flex;
	  justify-content: center;
	  width: 12%;
	}

	.theme-dot{
	  height: 30px;
	  width: 30px;
	  background-color: black;
	  border-radius: 50%;
	  margin: 5px;
	  border: 2px solid ${({ theme }) => theme.themeDotBorder};

	  -webkit-box-shadow: -1px 1px 3px -1px rgba(0,0,0,0.75);
	  -moz-box-shadow: -1px 1px 3px -1px rgba(0,0,0,0.75);
	  box-shadow: -1px 1px 3px -1px rgba(0,0,0,0.75);
	 
	  cursor: pointer;
	}

	.theme-dot:hover{
	  border-width: 4px;
	}

	#light-mode{
	  background-color: #fff;
	}

	#dark-mode{
	  background-color: #192734;
	}

	#candidateContainer{
	
		display: flex;
		justify-content: center;
		margin-top: 2%;
	}

	#candidate{
		
		margin-left: 30px;
		margin-right: 30px;
	}

	span{
		color: ${({ theme }) => theme.mainText};
		
		text-align: center;
		font-size: 20px;
	}

	img{
		width: 300px;
		height: 300px;
		display: inline-block;
	}

	/*Chart js*/
	.chartjs-render-monitor{
		margin-bottom: 20px;
	}

	/* Toastify */
	button.Toastify__close-button--error{
		background: #e74c3c !important;
		width: 10%;
	}

	button.Toastify__close-button--success{
		background: #07bc0c !important;
		width: 10%;
	}

	.Toastify__toast-body {
	    margin: auto 0;
	    flex: 0 1 auto;
	}

	/* mobile */

	@media all and (max-width: 700px){

	    h1{
	      color: ${({ theme }) => theme.mainText};
	    }

	    .container{
	    
	      height: auto; 
	      text-align: center; 
	      padding-bottom: 10px;
	    }

	    .card1{
	      margin-top: 8px;

	      width: 90%;
	      height: 400px;
	      display: inline-block;
	      margin-bottom: 30px;
	      box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.75);
	      background-color: ${({ theme }) => theme.secondaryColor};
	    }

	    .card2{
	      padding-top: 30px;

	      width: 90%;
	      height: auto;
	      display: inline-block;
	      box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.75);
	      background-color: ${({ theme }) => theme.secondaryColor};
	    }

	    button{
	    	width: 50%;
			background: #2EB62C !important;
			color: ${({ theme }) => theme.mainText};
		}

		button:hover{
			background: green !important;
		}

		div.loader{
			display: flex;
			justify-content: center;
			width: 100%;
			position: absolute;
			top: 50%;
		}

	    /* theme dots */

	    #theme-options-wrapper{
	      display: flex;
	      justify-content: center;
	      width: 30%;
	    }

	    .theme-dot{
	      height: 30px;
	      width: 30px;
	      background-color: black;
	      border-radius: 50%;
	      margin: 5px;
	      border: 2px solid ${({ theme }) => theme.themeDotBorder};

	      -webkit-box-shadow: -1px 1px 3px -1px rgba(0,0,0,0.75);
	      -moz-box-shadow: -1px 1px 3px -1px rgba(0,0,0,0.75);
	      box-shadow: -1px 1px 3px -1px rgba(0,0,0,0.75);
	     
	      cursor: pointer;
	    }

	    .theme-dot:hover{
	      border-width: 5px;
	    }

	    #light-mode{
	      background-color: #fff;
	    }

	    #dark-mode{
	      background-color: #192734;
	    }

	    #candidateContainer{
		
			display: flex;
			justify-content: center;
			margin-top: 20%;
			
		}

		#candidate{

			margin-left: 10px;
			margin-right: 10px;
		}

		span{
			color: ${({ theme }) => theme.mainText};
	
			text-align: center;
			font-size: 15px;
		}

		img{
			width: 125px;
			height: 125px;
			display: inline-block;
		}

		/*Chart js*/
		.chartjs-render-monitor{
			margin-bottom: 20px;
		}

		/* Toastify */
		button.Toastify__close-button--error{
			background: #e74c3c !important;
			width: 10%;
		}

		button.Toastify__close-button--success{
			background: #07bc0c !important;
			width: 10%;
		}

		.Toastify__toast-body {
		    margin: auto 0;
		    flex: 0 1 auto;
		}
	}
  `
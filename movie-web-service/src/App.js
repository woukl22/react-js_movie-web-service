import react from "react";
import PropTypes from "prop-types";

const foodILike = [
	{
		id: 1,
		name: "Kimchi",
		image: "https://www.google.com/search?q=%EA%B9%80%EC%B9%98&client=ubuntu&hs=ee2&tbm=isch&source=iu&ictx=1&fir=UzeYVA0gAGPHIM%252CgNfgPD56KzF0oM%252C_%253BZ4u2cFmtMTy4aM%252CZjMQxtyXjkglKM%252C_%253B-7Oc7-FedYfyhM%252C6bd7q8VrdIEi9M%252C_%253BuDdIaJQ0fdYYvM%252CqjF76-128-DOTM%252C_%253BkO9UBs5BTR9GtM%252CIQnqhqpISMooDM%252C_%253BRnBfod6PBFjCBM%252CwysFCe_0AfkpLM%252C_&vet=1&usg=AI4_-kRsrOEl7oZ-62eP2iRqbbw4uSJzuQ&sa=X&ved=2ahUKEwij4vvNtqnzAhUOAt4KHUVPDwYQ_h16BAhTEAE#imgrc=-7Oc7-FedYfyhM",
		rating: 5
	},
	{
		id: 2,
		name: "Samgyeopsal",
		image: "https://www.google.com/search?q=%EC%82%BC%EA%B2%B9%EC%82%B4&client=ubuntu&hs=bzh&tbm=isch&source=iu&ictx=1&fir=jYX7D_6cPGa1cM%252CSb8T8cTnuI0nJM%252C_%253BlEFF108NNPmrYM%252CRIXL4Ao0v287PM%252C_%253BGOx493JjlfaGjM%252CT2EPSa8mDZfjmM%252C_%253BRV1H6d8vuC1ktM%252CCoqHtEnlcNG1CM%252C_%253BCqk9pAnJveGCJM%252CzSrsa4NI-i5ZJM%252C_&vet=1&usg=AI4_-kRGI77NfiqZ-6uD9JzkwCZbRVjnLw&sa=X&ved=2ahUKEwiO8s_VtqnzAhWNDd4KHT8xCOYQ_B16BAg4EAE#imgrc=jYX7D_6cPGa1cM",
		rating: 4.9
	},
	{
		id: 3,
		name: "bibimbap",
		image: "https://www.google.com/search?q=%EB%B9%84%EB%B9%94%EB%B0%A5&client=ubuntu&hs=5e2&tbm=isch&source=iu&ictx=1&fir=Fz_8GHM6ze9U8M%252CLLx6Fq5KFqTvRM%252C_%253BFePmV2cwh38S-M%252CzI8ggBW8dC2MnM%252C_%253BHFo85WW5hDvAPM%252CCoB0CNutuN4c-M%252C_%253BstQEEKQTjNifDM%252Cv3lYy5UD0ISjNM%252C_%253BTOhWujY3e0lWLM%252CNd1HOuro7Gh1ZM%252C_%253BIgLkLCQCVwu0JM%252COFXVWVq0BEiy8M%252C_&vet=1&usg=AI4_-kSBohU6XmGULCAhtlqx0Uknep74TQ&sa=X&ved=2ahUKEwianM_atqnzAhUGHXAKHQeuBXwQ_h16BAg0EAE#imgrc=HFo85WW5hDvAPM",
		rating: 4.8
	}
]

function Food( {name, picture, rating} ) {
	return <div>
		<h2>I like {name}</h2>
		<h4>{rating}/5.0</h4>
		<img src={picture} alt={name}/>
	</div>
}

Food.propTypes = {
	name: PropTypes.string.isRequired,
	picture: PropTypes.string.isRequired,
	rating: PropTypes.number.isRequired
};

function App() {
  return (
	<div>
		{foodILike.map(dish => (
		  <Food 
			  key={dish.id}
			  name={dish.name}
			  picture={dish.image}
			  rating={dish.rating}
		  />
		))}
	</div>
  );
}

export default App;
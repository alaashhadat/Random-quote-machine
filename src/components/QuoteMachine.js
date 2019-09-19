import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IconButton from '@material-ui/core/IconButton';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
const QuoteMachine = ({ selectedQuote, assignNewQuoteIndex }) => {
	return (
		<Card>
			<CardContent>
				<Typography>
					{selectedQuote.quote}"-${selectedQuote.author}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small" onClick={assignNewQuoteIndex}>
					Next quote
				</Button>
				<IconButton
					target="_blank"
					href={encodeURI(`https://twitter.com/intent/tweet?text=${selectedQuote.quote}`)}>
					<FontAwesomeIcon icon={faTwitter} size="md"></FontAwesomeIcon>
				</IconButton>
			</CardActions>
		</Card>
	);
};

export default QuoteMachine;

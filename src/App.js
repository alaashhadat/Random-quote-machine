import React, { Component } from 'react';
import QuoteMachine from './components/QuoteMachine';
import { random } from 'lodash';
import 'typeface-roboto';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = {
	container: {
		display: 'flex',
		height: '100vh',
		alignItems: 'center',
	},
};
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			quotes: [],
			generateNewQuoteIndex: null,
		};
		this.assignNewQuoteIndex = this.assignNewQuoteIndex.bind(this);
		this.generateNewQuoteIndex = this.generateNewQuoteIndex.bind(this);
	}
	componentDidMount() {
		const url =
			'https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json';
		fetch(url).then(data =>
			data.json().then(quotes => this.setState({ quotes }, this.assignNewQuoteIndex)),
		);
	}

	get selectedQuote() {
		if (!this.state.quotes.length || !Number.isInteger(this.state.generateNewQuoteIndex)) {
			return undefined;
		}
		return this.state.quotes[this.state.generateNewQuoteIndex];
	}

	generateNewQuoteIndex() {
		if (!this.state.quotes.length) {
			return undefined;
		}
		return random(0, this.state.quotes.length - 1);
	}
	assignNewQuoteIndex() {
		this.setState({ generateNewQuoteIndex: this.generateNewQuoteIndex() });
	}
	render() {
		return (
			<Grid className={this.props.classes.container} id="quote-box" justify="center" container>
				<Grid xs={11} lg={8} item>
					{this.selectedQuote ? (
						<QuoteMachine
							selectedQuote={this.selectedQuote}
							assignNewQuoteIndex={this.assignNewQuoteIndex}
						/>
					) : null}
				</Grid>
			</Grid>
		);
	}
}
export default withStyles(styles)(App);

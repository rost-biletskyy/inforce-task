import { connect } from 'react-redux';
import { Decrement, Increment, Count } from './components';

const mapDispatchToProps = dispatch => {
	return {
		handleIncrementClick: () => dispatch({ type: 'INCREMENT' }),
		handleDecrementClick: () => dispatch({ type: 'DECREMENT' }),
	}
};

const mapStateToProps = state => {
	return {
		count: state
	};
};

export const Counter = connect(mapStateToProps, mapDispatchToProps)(Count);

export const AddItem = connect(mapStateToProps, mapDispatchToProps)(Increment);

export const RemoveItem = connect(mapStateToProps, mapDispatchToProps)(Decrement);

import { TYPES } from '../actions/practice.actions';

const practiceReact = (state, action) => {
	switch (action.type) {
		case TYPES.READ_ITEMS:
			return action.payload;
		case TYPES.READ_COLORS_TYPE:
			const { data, type } = action.payload;
			const getColors = data.reduce(
				(acc, currentItem) => {
					return {
						...acc,
						[currentItem.type]: acc[currentItem.type].concat(currentItem),
					};
				},
				{ cold: [], warm: [] }
			);
			return type === 'Warm'
				? getColors.warm
				: type === 'Cold'
				? getColors.cold
				: data;

		default:
			return state;
	}
};
export { practiceReact };

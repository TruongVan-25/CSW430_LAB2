import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import styles from './Style';

export const CalButton = props => (
	<TouchableOpacity style={[styles.keyDigit, props.isOperator && styles.operatorBox]} onPress={props.onPress}>
		<Text style={[props.isOperator && styles.operator, styles.digitText]}>{props.number}</Text>
	</TouchableOpacity>
);

export default App = () => {
	const [displayValue, setDisplayValue] = useState('0');
	const [tempDisplay, setTempDisplay] = useState('0');
	const [operator, setOperator] = useState(null);
	const [firstValue, setFirstValue] = useState('');
	const [isNewEntry, setIsNewEntry] = useState(false);

	const isOperator = value => ['÷', 'x', '-', '+'].includes(value);

	const handleNumberInput = num => {
		if (isNewEntry){
			setTempDisplay(tempDisplay === '0' ? num.toString() : tempDisplay + num);
			setDisplayValue(num.toString());
			setIsNewEntry(false); 
		}else {
			setDisplayValue(displayValue + num);
			setTempDisplay(tempDisplay === '0' ? num.toString() : tempDisplay + num)
		}
	};

	const handleOperatorInput = operator => {
		setOperator(operator);
		setTempDisplay(tempDisplay + operator)
		setFirstValue(displayValue);
		setDisplayValue('0');
		setIsNewEntry(true);
	};

	const handleEqual = () => {
		const num1 = parseFloat(firstValue);
		const num2 = parseFloat(displayValue);
		if (operator === '+') {
			setTempDisplay(tempDisplay + ' \n= ' + (num1 + num2).toString());
		} else if (operator === '-') {
			setTempDisplay(tempDisplay + ' \n= ' + (num1 - num2).toString());
		} else if (operator === 'x') {
			setTempDisplay(tempDisplay + ' \n= ' + (num1 * num2).toString());
		} else if (operator === '÷') {
			setTempDisplay(tempDisplay + ' \n= ' + (num1 / num2).toString());
		}
		setOperator(null);
		setFirstValue('');
	};

	const handleClear = () => {
		setDisplayValue('0');
		setOperator(null);
		setFirstValue('');
		setTempDisplay('0');
	};

	const handlePress = (value) => {
		if (value === '=') {
		handleEqual();
		} else if (isOperator(value)) {
		handleOperatorInput(value);
		} else {
		handleNumberInput(value);
		}
	};
	const rowButton = [
		['7', '8', '9', '÷'],
		['4', '5', '6', 'x'],
		['1', '2', '3', '-']
	];

	return (
		<ScrollView
			style={{ flex: 1, backgroundColor: 'rgb(202, 202, 197)' }}
			contentContainerStyle={styles.container}
		>
			<View >
				<Text style={styles.mainDisplay}>{tempDisplay}</Text>
				{rowButton.map((row, i) => (
					<View style= {styles.row} key={i}>
					{row.map(number => (
						<CalButton
						key={number}
						number={number}
						isOperator={isOperator(number) || number === '='}
						onPress={() => handlePress(number)}
						/>
					))}
					</View>
				))}
				<View style= {styles.row} >
					<TouchableOpacity style={[styles.keyDigit, isOperator('0') && styles.operatorBox, styles.digit0]} onPress={()=>handlePress('0')}>
					<Text style={[isOperator('0') && styles.operator, styles.digitText]}>{'0'}</Text>
					</TouchableOpacity>
					<TouchableOpacity style={[styles.keyDigit,  isOperator('+') && styles.operatorBox]} onPress={()=>handlePress('+')}>
						<Text style={[ isOperator('+') && styles.operator, styles.digitText]}>{'+'}</Text>
					</TouchableOpacity>
					<TouchableOpacity style={[styles.keyDigit,  isOperator('=') && styles.operatorBox, styles.digitEqual]} onPress={()=>handlePress('=')}>
						<Text style={[ isOperator('=') && styles.operator, styles.digitText, styles.digitEqualCol]}>{'='}</Text>
					</TouchableOpacity>
				</View>
				<TouchableOpacity style={styles.clearButton} onPress={handleClear}>
					<Text style={styles.digitText}>C</Text>
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
};

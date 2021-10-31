import React from 'react';
import { Button, Typography } from "@material-ui/core";

export const Decrement = ({ handleDecrementClick }) => (
	<Button type="button" size="small" onClick={handleDecrementClick}>-</Button>
);

export const Increment = ({ handleIncrementClick }) => (
	<Button type="button" size="small" onClick={handleIncrementClick}>+</Button>
);

export const Count = ({ count }) => (
	<Typography>&nbsp;{count}&nbsp;</Typography>
);

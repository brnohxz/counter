import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
    root: {
        width: 300,
    },
});

function valuetext(value: number) {
    return `${value}°C`;
}
export type SettingsPickerPropsType = {
    value:number[]
    handleChange:(event: any, newValue: number | number[])=>void
}
export default function SettingsPicker(props:SettingsPickerPropsType) {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <Typography id="range-slider" gutterBottom>
                Counter range from {props.value[0]} to {props.value[1]}
            </Typography>
            <Slider
                value={props.value}
                onChange={props.handleChange}
                valueLabelDisplay="off"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
            />
        </div>
    );
}
import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SettingsPicker from './SettingPicker';
import {Button} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            minWidth:345,
            maxWidth: 345,
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
    }),
);

export default function Counter() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [counter, setCounter] = React.useState(0)
    const [value, setValue] = React.useState<number[]>([0, 100]);
    const [error,setError] = React.useState(false)
    const handleChange = (event: any, newValue: number | number[]) => {
        setValue(newValue as number[]);
        console.log(value)
        setError(true)
    };
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const applyNewRange=()=>{
        setError(true)
    }
    const incrementFunction = ()=>{
        if(value[1] < counter + 1){
            setError(true)
        }else{
            setCounter(counter + 1)
        }
    }
    const resetCounter = () => {
        setCounter(value[0])
        setError(false)
    }
    return (
        <Card className={classes.root}>
            <CardContent>
                {error ? <Typography variant="h6" color="textSecondary" component="h1" align="center">
                    <h1>Aplly settings !</h1>
                </Typography> :<Typography variant="h6" color={counter === value[1] ? 'secondary' : 'primary'} component="h1" align="center">
                    <h1>{counter}</h1>
                </Typography>}
                <Typography variant="body2" color="textSecondary" component="p">
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Button variant="outlined" onClick={incrementFunction} disabled={counter === value[1] || error}>INC</Button>
                <Button variant="outlined" onClick={resetCounter} disabled={counter === value[0] || error}>RESET</Button>
                {/*!(counter > value[0]) && error*/}
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <SettingsPicker value={value} handleChange={handleChange}/>
                    <Button variant="outlined" onClick={resetCounter} color={!error ? 'primary' : 'secondary'}>Apply range</Button>
                </CardContent>
            </Collapse>
        </Card>
    );
}
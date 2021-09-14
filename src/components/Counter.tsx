import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SettingsPicker from './SettingPicker';
import {Button, ButtonGroup } from '@material-ui/core';

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
                </Typography> :<Typography variant="h6" color="textSecondary" component="h1" align="center">
                    <h1>{counter}</h1>
                </Typography>}
                <Typography variant="body2" color="textSecondary" component="p">
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Button variant="outlined" onClick={incrementFunction} disabled={error}>INC</Button>
                <Button variant="outlined" onClick={resetCounter} disabled={!(counter > value[0]) && error}>RESET</Button>
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
                    <Button variant="outlined" onClick={resetCounter}>Apply range</Button>
                </CardContent>
            </Collapse>
        </Card>
    );
}
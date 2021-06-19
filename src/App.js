import React, {useEffect, useState} from "react";
import {
    FormControl,
    InputLabel, makeStyles,
    MenuItem,
    Select,
    Table, TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow, Typography
} from "@material-ui/core";
import inverse from './lib/inverse'
import twophase from './lib/twophase'
import scrambleLib from './lib/scramble'

function App() {
    const useStyles = makeStyles((theme) => ({
        container: {
            margin: '0 auto',
            padding: '20px',
            maxWidth: '700px'
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
    }));
    const classes = useStyles();

    const [scrambleList, setScrambleList] = useState([])
    const [moveCount, setMoveCount] = useState('')
    const [itemCount, setItemCount] = useState('')

    useEffect(() => {
        if (moveCount !== '' && itemCount !== '') {
            const scrambleListTmp = []
            for (let i = 0; i < itemCount; i++) {
                const scramble = makeScramble(moveCount)
                scrambleListTmp.push(scramble)
            }
            setScrambleList(scrambleListTmp)
        }
    }, [moveCount, itemCount])

    const handleMovesChange = (event) => {
        setMoveCount(event.target.value)
    }

    const handleCountChange = (event) => {
        setItemCount(event.target.value)
    }

    const makeScramble = (moveCount) => {
        twophase.initialize()
        let shortScramble = ''
        let redundantScramble = ''
        while (redundantScramble.split(' ').length < 19) {
            shortScramble = scrambleLib.makeShortScramble(moveCount);
            redundantScramble = inverse.inverse(twophase.solve(shortScramble))
        }
        return redundantScramble
    }

    return (
        <div className={classes.container}>
            <Typography variant="h4">詰めキューブスクランブル生成器</Typography>
            <FormControl className={classes.formControl}>
                <InputLabel id="moves-label">手数</InputLabel>
                <Select labelId="moves-label" id="moves" value={moveCount} onChange={handleMovesChange}>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel id="count-label">個数</InputLabel>
                <Select labelId="count-label" id="count" value={itemCount} onChange={handleCountChange}>
                    <MenuItem value={3}>mo3</MenuItem>
                    <MenuItem value={5}>ao5</MenuItem>
                    <MenuItem value={12}>ao12</MenuItem>
                </Select>
            </FormControl>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>スクランブル</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {scrambleList.map((scramble) => (
                            <TableRow key={scramble}>
                                <TableCell>{scramble}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default App;

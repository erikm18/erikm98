import React, {useEffect, useMemo, useState} from 'react'
import useSolidValue from '@bast1oncz/state/dist/useSolidValue'
import './App.css'
import useRenderTime from './renderTime'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import theme from './Theme'
import {ThemeProvider} from '@material-ui/core/styles'
import {NotificationProvider, showSuccess, showWarning} from '@bast1oncz/notifications/dist'
import users from './Users'

function App() {
    const [searchFirstName, setSearchFirstName] = useState('')
    const [searchLastName, setSearchLastName] = useState('')
    const lazySearchFirstName = useSolidValue(searchFirstName, 1000)
    const lazySearchLastName = useSolidValue(searchLastName, 1000)
    const filteredUsers = useMemo(() => {
        console.log({searchFirstName, searchLastName: searchLastName})
        return users
            .filter(user => ((new RegExp('^' + lazySearchFirstName).test(user.firstName)) && (new RegExp('^' + lazySearchLastName).test(user.lastName))))
            .slice(0, 10)
    }, [lazySearchFirstName, lazySearchLastName])
    useRenderTime()
    useEffect(() => showWarning('Změna!'), [lazySearchFirstName, lazySearchLastName])
    filteredUsers.sort(function (a, b) {
        if (a.firstName < b.firstName) {
            return -1
        }
        if (a.firstName > b.firstName) {
            return 1
        }
        return 0
        if (a.firstName == b.firstName) {
            if (a.lastName < b.lastName) {
                return -1
            }
            if (a.lastName > b.lastName) {
                return 1
            }
            return 0
        }
    })
    return (
        <ThemeProvider theme={theme}>
            <NotificationProvider>
                <div>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell sortDirection="asc">First Name</TableCell>
                                    <TableCell>Last Name</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell><input name="FirstName" value={searchFirstName}
                                                      onChange={(e) => setSearchFirstName(e.target.value)}/></TableCell>
                                    <TableCell><input name="LastName" value={searchLastName}
                                                      onChange={(e) => setSearchLastName(e.target.value)}/></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {filteredUsers.map(user => {
                                    const {firstName, lastName, id} = user
                                    return (
                                        <TableRow key={id}>
                                            <TableCell>{id}</TableCell>
                                            <TableCell>{firstName}</TableCell>
                                            <TableCell>{lastName}</TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <button onClick={() => showSuccess('Jedu')}>showSuccess</button>
                </div>
            </NotificationProvider>
        </ThemeProvider>
    )
}

export default App


//const renderedUsers = []
//     console.log(users)
//     for (let i = 0; i < (users.length < 15 ? users.length : 15); i++){
//         const user = users[i]
//         const {firstName, lastName, id} = user
//         renderedUsers.push(<div key={id}>{firstName} {lastName}</div>)

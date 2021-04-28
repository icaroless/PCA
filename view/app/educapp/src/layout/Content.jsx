import {Switch, Route} from 'react-router-dom';
import Course from '../views/Course';
import Hours from '../views/Hours';
import Account from '../views/Account';
import Lessons from '../views/Lessons';
import LogOut from '../views/LogOut';
import Settings from '../views/Settings';

export default function  Content(props) {

    return (
        <main className="main-content">
            <Switch>
                <Route path='/course'>
                    <Course />
                </ Route>
                <Route path='/hours'>
                    <Hours />
                </ Route>
                <Route path='/account'>
                    <Account />
                </ Route>
                <Route path='/lessons'>
                    <Lessons />
                </ Route>
                <Route path='/logout'>
                    <LogOut />
                </ Route>
                <Route path='/settings'>
                    <Settings />
                </ Route>
            </ Switch>
        </main>
    );
}
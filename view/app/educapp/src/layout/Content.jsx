import {Switch, Route} from 'react-router-dom';
import Course from '../views/Home';
import Hours from '../views/Course';
import Account from '../views/Account';
import Lessons from '../views/Lessons';
import LogOut from '../views/LogOut';
import Settings from '../views/Settings';

export default function  Content(props) {

    return (
            <Switch>
                <Route path='/home'>
                    <Course />
                </ Route>
                <Route path='/course'>
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
    );
}
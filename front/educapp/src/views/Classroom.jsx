import '../assets/css/Classroom.css';

// import {useState, useEffect} from 'react'
import Main from '../components/layout/Main';
import Button from '../components/Controls';

import {useIndex} from '../hooks/Controls'
import {content} from '../data/articles'

import {useParams} from 'react-router-dom'

export default function Classroom(props) {
    const { id } = useParams()
    const [article, next, back, index] = useIndex(content[id])
    // const status = article.status

    // useEffect(() => {
    //     status = article.status.current
    // }, [article])


    return (
         <Main section={id} sectionColor="#B23551" 
               path="https://img.icons8.com/dusk/64/000000/bookmark.png">

            <div className="wrapper">
                <Button callback={back} path="https://img.icons8.com/flat-round/64/fa314a/left--v1.png"
                    alt="Back"/>

                <Button callback={next} path="https://img.icons8.com/flat-round/64/fa314a/right--v1.png"
                    alt="Next"/>
            </div>
            
            <div className="classroom-box">
                <div className="article">
                    <h1>{article.title}</h1>
                    {article.content}
                </div>
            </div>

            <div className="wrapper">
                <p>{index + 1} / {content[id].length}</p>
            </div>

            {/* <label>
                <input type="radio" value="Status" checked={status} 
                    onChange={(e) => setStatus(!status)}/>
                    {status? 'Completed' : 'Mark as Completed'}
            </label> */}


            
         </Main>
    );
}
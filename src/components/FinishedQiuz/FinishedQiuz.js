import React from 'react'
import classes from './FinishedQiuz.module.css'
import Button from '../UI/Button/Button'
import {Link} from 'react-router-dom'

const FinishedQiuz = props => {
    console.log(props)
    const successCount = Object.keys(props.results).reduce((total,key) => {
        if (props.results[key] === 'success') {
            total++
        }
        return total
    }, 0)
    return (
        <div>
            <h1>Test results:</h1>
            <div className={classes.FinishedQiuz}>
            
            <ul>
                { props.quiz.map((quizItem, index) => {
                    const cls = [
                        'fa',
                        props.results[index] === 'error' ? 'fa-times' : 'fa-check',
                        classes[props.results[index]]
                    ]

                    return (
                        <li
                            key={index}
                        >
                            <strong>{index + 1}</strong>.&nbsp;
                            {quizItem.question}
                            <i className={cls.join(' ')} />
                        </li>
                    )
                })}

            </ul>

            <p>Correct answers {successCount} from {props.quiz.length}</p>

            <div>
                <Button
                    onClick={props.onRetry}
                    type="primary"
                >Repeat</Button>
                <Link to='/'>
                    <Button 
                        type="success"
                    >Go to test list</Button>
                </Link>

            </div>
        </div>
        </div>
        
    )
}

export default FinishedQiuz
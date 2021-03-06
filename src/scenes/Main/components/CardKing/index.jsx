import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import styles from './styles.scss';
import {Link} from 'react-router-dom';

//Material ui components require obj styling, thus imported styles do not work.

export default class CardKing extends React.Component {
    constructor() {
        super();
    }

    render() {
        const data = this.props.data;
        return (
            <Paper zDepth={3} className={styles.card}>
                <Avatar
                    src={data && data.image}
                    size={140}
                    style={{ border: 0, objectFit: 'cover' }}
                />
                <div className={styles.content}>
                    <div className={styles.title}>
                        {data && data.name}
                    </div>
                    <div className={styles.titles}>
                        {data && data.titles.join(', ')}
                    </div>
                </div>
                <Link className={styles.readMore} to={'/view/' + (data && data.id)}>
                    read more
                </Link>
            </Paper>
        );
    }
}
import { Paper, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

import Link from '@material-ui/core/Link';

export default function Footer({ className }) {
    return (
        <Paper className={className} elevation={0}>
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://www.lightmatter.com/">
                    Lightmatter
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </Paper>
    );
}

Footer.propTypes = {
    className: PropTypes.string,
};

Footer.defaultProps = {
    className: '',
};
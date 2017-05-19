/**
 * Created by Bien on 2017-05-15.
 */
// Agog - Keen or eager to know
import React from 'react';
import PropTypes from 'prop-types';

export default class TitleBar extends React.Component {

    renderSubtitle() {
        if (this.props.subtitle) {
            return <h4>{this.props.subtitle}</h4>;
        }
    }

    render() {
        return (
            <div>
                <span><h2>{this.props.title}</h2><h5>Upload original videos to respond to questions from friends and family. Share your knowledge and experiences through original content.</h5></span>
                {this.renderSubtitle()}
            </div>
        );
    }
}

TitleBar.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
};

TitleBar.defaultProps = {
  title: 'Default title'
};
import React, { Component } from 'react';

export default class ReactJsTyping extends Component {
    constructor(props) {
        super(props)
        this.state = { writeText: '', loopNumber: 0, isDeleting: false }
    }

    cursorColors = () => {
        var elem = document.querySelector('span');
        elem.style.borderRightColor = (elem.style.borderRightColor == 'white') ? this.props.cursorColor : 'white';
    }

    writeLine = async () => {
        const { writeText, isDeleting } = this.state;
        const { speed } = this.props;
        let i = this.state.loopNumber % this.props.StringList.length;
        let fullTxt = this.props.StringList[i];

        if (isDeleting) {
            await this.setState({ writeText: fullTxt.substring(0, writeText.length - 1) })
        } else {
            await this.setState({ writeText: fullTxt.substring(0, writeText.length + 1) })
        }

        let delTime = 90;
        if (isDeleting) { delTime /= 2; }
        if (!isDeleting && writeText === fullTxt) {
            delTime = speed || 700;
            await this.setState({ isDeleting: true })
        } else if (isDeleting && writeText === '') {
            let loopNumber = this.state.loopNumber + 1;
            await this.setState({ isDeleting: false, loopNumber })
            delTime = speed || 700;
        }
        setTimeout(async () => await this.writeLine(), delTime);
    }




    componentDidMount() {
        setTimeout(() => this.writeLine(), 500);
        setInterval(()=>this.cursorColors(),1000)
    }

    render() {
        return (<span
            style={{
                borderRight: `1px solid ${this.props.cursorColor || '#666'}`,
                paddingRight:'3px'
                }}>
                {this.state.writeText}
        </span>);
    }

}
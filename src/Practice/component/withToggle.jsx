import React, { useState } from "react"

export const withToggle = (Component)=>{

    return class EnhancedComponent extends React.Component {

        constructor(props) {
            super(props)
            this.state = {
                active:false
            }
            this.handleToggle = this.handleToggle.bind(this)
        }

        handleToggle() {
            this.setState(prev=>{return {active:!prev.active }})
        }

        render() {
        return (
            <Component active={this.state.active} toggle={this.handleToggle} {...this.props}></Component>
        )
        }
    }
}
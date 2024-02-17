import React from 'react'

class Cascade extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            count:0,
            active:{
                prev:'jujustu kaisen',
                active:'',
                length:0
            }
        }
        this.handleActive = this.handleActive.bind(this)
    }

    handleActive(id) {
        console.log(this.state)
        this.setState((prev)=>{return {active:{
            ...prev.active,
            active:id
        }}})
    }

    static getDerivedStateFromProps(props, state) {
        return {active:{...state.active, length:props.items.length}}
    }

    componentDidMount() {
        console.log('component did mount')
    }

    componentDidUpdate() {
        console.log('component updated')
    }

    componentWillUnmount() {
        console.log("Unmounting")
    }

    render() {
       return( <div>
            {this.props.items.map((item)=>{
                return (
                    <div key={item.name}>
                        <h3 onClick={this.handleActive.bind(this,item.name, item.name)}>{item.name}</h3>
                        {item.name === this.state.active.active && <p>{item.paragraph}</p>}
                    </div>
                )
            })}
        </div> )
    }

}

export default Cascade
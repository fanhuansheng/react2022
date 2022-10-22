import React,{Component} from "react"

class EventMeth extends  Component {
    handel2(){
        console.log('handel2')
    }
    render() {
        return(
            <div>
                <input />
                <button onClick={
                    (e)=>{
                        console.log(e,'btn')
                    }
                }>添加</button>
                <button onClick={this.handel2}>添加2</button>
            </div>
        )
    }
}
export default EventMeth
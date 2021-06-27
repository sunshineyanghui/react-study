/*
 * @Description: app
 * @Author: yanghui
 * @Date: 2021-06-23 11:08:53
 * @LastEditTime: 2021-06-23 17:19:33
 * @LastEditors: yanghui
 */
import React, {Component} from 'react'
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: [ '头部按摩', '精油推背']
        }
    }
    render() {
        
        return(
            <div>
                <div>
                    <input value={this.state.inputValue} placeholder="请输入" onChange={this.inputChange.bind(this)}></input>
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return <li>{item}</li>
                        })
                    }
                    
                </ul>
                
            </div>
        )
    }
    inputChange(e) {
        // this.state.inputValue = e.target.value
        this.setState({
            inputValue: e.target.value
        })
    }
    addList() {
        this.setState({
            inputValue: '',
            list: [...this.state.list, this.state.inputValue]
        })
    }
}
export default App
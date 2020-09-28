import React, { Component } from 'react';

class List extends Component{
    constructor(){
        super();
       // this.onItemClick = this.onItemClick.bind(this);
        this.state = {
            textValue: "",
            filterTodo: "all",
            Lists: [
                {'title': 'ăn sáng' , 'flag': true},
                {'title': 'ăn trưa' , 'flag': false},
                {'title': 'ăn tối' , 'flag': false}
            ]
        }
        this.onDone = this.onDone.bind(this);
        this.textValue = this.textValue.bind(this);
        this.filterTodo = this.filterTodo.bind(this);
    }
    onItemClick(item){
        let {Lists} = this.state;
        return (event) => {
            this.setState({
                Lists: Lists.map((itemMap) => {
                    return itemMap === item ? {...itemMap,flag:!itemMap.flag} : {...itemMap};
                })
            })
        }
    }

    onItemDelete(item){
        let {Lists} = this.state;
        return (event) => {
            let position = Lists.indexOf(item);
            Lists.splice(position,1)
            this.setState({
                Lists: this.state.Lists
            })
        }
    }

    onDone(event){
        let text = event.target.value;
        if(event.keyCode === 13){
            if(text === ""){
                return true;
            }
            text = text.trim();
            if(!text){
                return true;
            }
            this.setState({
                textValue: "",
                Lists: [
                    {'title': text , 'flag': false},
                    ...this.state.Lists
                ]
            })
        }
    }

    textValue(event){
        this.setState({
            textValue: event.target.value
        })
    }

    filterTodo(event){
        this.setState({
            filterTodo: event.target.className
        })
    }

    render(){
        let {Lists, textValue,filterTodo} = this.state;
        let className = "list";
        let lengthList = 0;
        return(
            <div className="List">
                <input type="text" value={textValue} onChange={this.textValue} onKeyUp={this.onDone} placeholder="what needs to be done?"></input>
                {
                    Lists.length > 0 && Lists.map((item,index) => {
                        if(item.flag){
                            className = ' list-done';
                        }else{
                            className = '';
                        }
                        if(item.flag && filterTodo === 'nodone'){
                            return true
                        }
                        if(!item.flag && filterTodo === 'done'){
                            return true
                        }
                        lengthList = lengthList +1;
                        return <div key={index}>
                            <span className={'list' + className}>
                                <input type="checkbox" checked={item.flag} onChange={this.onItemClick(item)} id={`itemCheckbox${index}`} disabled={item.flag ? 'disabled' : ""}></input> <label htmlFor={`itemCheckbox${index}`}>{item.title}</label>
                            </span>
                            {item.flag ? <span style={{color:'red',cursor: 'pointer'}} onClick={this.onItemClick(item)}> X</span> : ""}
                            <button onClick={this.onItemDelete(item)}>Xóa</button>
                        </div>
                    })
                    //
                }
                <p>{lengthList}  items</p>
                <ul className="filter-todo" onClick={this.filterTodo}>
                    <li className="all">all</li>
                    <li className="nodone">chưa xong</li>
                    <li className="done">đã xong</li>
                </ul>
                { Lists.length === 0 && <p>Không có</p> }
            </div>
        );
    }
}

export default List;
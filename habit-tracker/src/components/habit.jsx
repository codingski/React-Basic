import React, { Component } from 'react';

class Habit extends Component { // 클래스는 항상 대문자로 시작!
    state = {
        count: 0,
    };

    handleIncrement = () => {
        // state 오브젝트 안에 있는 count를 증가 한 뒤 state를 업데이트 해야 함.
        this.setState({count: this.state.count + 1});
    }

    handleDecrement = () => {
        const count = this.state.count - 1;
        this.setState({count: count < 0 ? 0 : count});
    }

    render() {
        // const habitName = this.props.habit.name; 이렇게 하는 방법도 있지만 아래 더욱 쉬운방법이 있음!
        const { name, count } = this.props.habit; // 대신 오브젝트의 key값 이름 그대로 사용해야됨
        return <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button className="habit-button habit-increase" onClick={this.handleIncrement}>
            <i className="fas fa-plus-square"></i>
        </button>
        <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
            <i className="fas fa-minus-square"></i>
        </button>
        <button className="habit-button habit-delete">
            <i className="fas fa-trash"></i>
        </button>
        </li>
    }
}

export default Habit;
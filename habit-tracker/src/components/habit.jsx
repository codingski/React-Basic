import React, { Component } from 'react';

// Habit은 부모컴포넌트로부터 전달받은 Props로 습관의 데이터를 보여주기만 하는 컴포넌트 이기 때문에
// 이 컴포넌트 안에 자체적으로 State를 가지고 있을 필요는 전혀 없다.

class Habit extends Component { // 클래스는 항상 대문자로 시작!
    handleIncrement = () => {
        this.props.onIncrement(this.props.habit);
    };

    handleDecrement = () => {
        this.props.onDecrement(this.props.habit);
    };

    handleDelete = () => {
        this.props.onDelete(this.props.habit);
    };

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
        <button className="habit-button habit-delete" onClick={this.handleDelete}>
            <i className="fas fa-trash"></i>
        </button>
        </li>
    }
}

export default Habit;
import React, { Component } from 'react'

export default class Home extends Component {
    state = {
        userss: []
    }
    render() {
        console.log(1)
        return (
            <div>
                <table border="1" cellSpacing="0" cellPadding="30">
                    <tbody>
                        {this.state.userss.map((item, index) =>
                            <tr key={index}>
                                <th>{item.name}</th>
                                <th>{item.age}</th>
                                <th>{item.sex}</th>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div >
        )
    }
    componentDidMount() {
        console.log(2)
        fetch('./Home.json', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },

        })
            .then(response => response.json())//解析为Promise
            .then(data => {
                this.setState({ userss: data.data })  ////赋值到本地数据
                console.log(this.state.userss)
            })
    }

}

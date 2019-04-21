import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
    constructor(props) {
        super(props);
        this.onChangeWord = this.onChangeWord.bind(this);
        this.onChangeDefinition = this.onChangeDefinition.bind(this);
        this.onChangeOption1 = this.onChangeOption1.bind(this);
        this.onChangeOption2 = this.onChangeOption2.bind(this);
        this.onChangeOption3 = this.onChangeOption3.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            word: '',
            definition: '',
            option1: '',
            option2: '',
            option3: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/word/edit/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    word: response.data.word,
                    definition: response.data.definition,
                    option1: response.data.option1,
                    option2: response.data.option2,
                    option3: response.data.option3});
                })
                .catch(function (error) {
                    console.log(error);
                })
    }

    onChangeWord(e) {
        this.setState({
            word: e.target.value
        });
    }
    onChangeDefinition(e) {
        this.setState({
            definition: e.target.value
        });
    }
    onChangeOption1(e) {
        this.setState({
            option1: e.target.value
        });
    }
    onChangeOption2(e) {
        this.setState({
            option2: e.target.value
        });
    }
    onChangeOption3(e) {
        this.setState({
            option3: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
        const obj = {
            word: this.state.word,
            definition: this.state.definition,
            option1: this.state.option1,
            option2: this.state.option2,
            option3: this.state.option3
        };
        axios.post('http://localhost:4000/word/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/index');
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3 align="center">Update Dictionary</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Word: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.word}
                            onChange={this.onChangeWord}
                            />
                    </div>
                    <div className="form-group">
                        <label>Definition: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.definition}
                            onChange={this.onChangeDefinition}
                            />
                    </div>
                    <div className="form-group">
                        <label>Option1: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.option1}
                            onChange={this.onChangeOption1}
                            />
                    </div>
                    <div className="form-group">
                        <label>Option2: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.option2}
                            onChange={this.onChangeOption2}
                            />
                    </div>
                    <div className="form-group">
                        <label>Option3: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.option3}
                            onChange={this.onChangeOption3}
                            />
                    </div>
                    <div className="form-group">
                        <input type="submit"
                            value="Update Word"
                            className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
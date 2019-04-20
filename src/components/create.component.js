import React, { Component } from  'react';

export default class Create extends Component {
    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Add New Word</h3>
                <form>
                    <div className="form-group">
                        <label>Add Word: </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Add Definition</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Option1</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Option2</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Option3</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Enter Words" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}
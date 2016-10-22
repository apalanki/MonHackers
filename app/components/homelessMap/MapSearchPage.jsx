import React from 'react';
let HomelessMap = require('./HomelessMap.jsx');
import {Form, FormGroup, FormControl, ControlLabel, DropdownButton, MenuItem, Button} from 'react-bootstrap';
const request = require('superagent');

function searchForShelters(self, searchParams) {
    request.get('/gh6/services/search')
        .query(searchParams)
        .end((err, res)=> {
            if (err) {
                console.log('error getting data', err);
            } else {
                self.setState({
                    shelters: res.body
                });
            }
        });
}

var MapSearchPage = React.createClass({
    getInitialState(){
        return {
            searchGroup: 'Gender',
            searchText: '',
            shelters: []
        };
    },
    handleChange(e){
        console.log(e.target.value);
        this.setState({searchText: e.target.value});
    },
    handleDropDownSelection(e){
        this.setState({searchGroup: e});
    },
    componentDidMount(){
        searchForShelters(this, {});
    },
    updateShelters(){
        var reqBody = {};
        reqBody[this.state.searchGroup] = this.state.searchText;
        searchForShelters(this, reqBody);
    },
    render(){
        return (
            <div>
                <Form inline>
                    <FormGroup controlId="formBasicText">
                        <ControlLabel>Filter Map Results</ControlLabel>
                    </FormGroup>
                    &nbsp;&nbsp;
                    <FormGroup controlId="searchBox">
                        <DropdownButton bsStyle='default' title={this.state.searchGroup}
                                        onSelect={this.handleDropDownSelection} id="searchBoxDropDown">
                            <MenuItem eventKey="Gender">Gender</MenuItem>
                            <MenuItem eventKey="Veteran Status">Veteran Status</MenuItem>
                        </DropdownButton>
                        &nbsp;&nbsp;
                        <FormControl type="text" value={this.state.searchText}
                                     placeholder={`Enter ${this.state.searchGroup}`} onChange={this.handleChange}/>
                        &nbsp;&nbsp;
                        <Button bsStyle="primary" disabled={this.state.searchText === ''} onClick={this.updateShelters}>Filter</Button>
                    </FormGroup>
                </Form>
                <br/>
                <HomelessMap shelters={this.state.shelters}/>
            </div>
        );
    }
});

module.exports = MapSearchPage;
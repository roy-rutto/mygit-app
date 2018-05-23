import React, { Component } from 'react';
import ReactTable from 'react-table'
import 'react-table/react-table.css'

class ReposView extends Component {

  render() {
    //name, description, url, forks_count, watchers_count
    const columns = [{
      Header: 'Name',
      accessor: 'name' // String-based value accessors!
    },{
      Header: 'Description',
      accessor: 'description' // String-based value accessors!
    },{
      Header: 'URL',
      accessor: 'url' // String-based value accessors!
    },{
      Header: 'Forks',
      accessor: 'forks_count' // String-based value accessors!
    },{
      Header: 'Watchers',
      accessor: 'watchers_count' // String-based value accessors!
    },]
  
   
    return (
      <div className="repos">
        <ReactTable data={this.props.repos} columns={columns}/>
      </div>
    );
  }
}

export default ReposView;

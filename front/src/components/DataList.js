import React from 'react';

const DataList = ({authornames}) => {
  return (
  	<datalist id="authorList">
		{authornames.map((authorname, key) => (
			<div key={key}>
	    		<option value={authorname.label}>{authorname.label}</option>
			</div>
			)
		)}
		</datalist>
	)
}

export default DataList;
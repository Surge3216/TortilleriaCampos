import React from "react";
import M from "materialize-css"
import "./style.css"

export default function Table(){

    function drop(){
        M.AutoInit()
    }

 return ( <div>
      <section className="md-ui component-data-table">
	<header className="main-table-header">
		<h1 className="table-header--title">Nutrition</h1>  <button className='dropdown-trigger btn' onClick={drop}>Drop Me!</button>
		
        <ul id='dropdown1' className='dropdown-content'>
    <li><a href="#!">one</a></li>
    <li><a href="#!">two</a></li>
    <li className="divider" tabindex="-1"></li>
    <li><a href="#!">three</a></li>
    <li><a href="#!"><i className="material-icons">view_module</i>four</a></li>
    <li><a href="#!"><i className="material-icons">cloud</i>five</a></li>
  </ul>
        
        <span className="table-header--icons"><i className="material-icons">filter_list</i><i className="material-icons">more_vert</i>
		</span>
	</header>
	<div className="main-table-wrapper">
		<table className="main-table-content">
			<thead className="data-table-header">
				<tr className="data-table-row">
					<td className="table-datacell datatype-string">Dessert (100g serving)</td>
					<td className="table-datacell datatype-numeric">Calories</td>
					<td className="table-datacell datatype-numeric">Fat (g)</td>
					<td className="table-datacell datatype-numeric">Carbs (g)</td>
					<td className="table-datacell datatype-numeric">Protein (g)</td>
					<td className="table-datacell datatype-numeric">Sodium (mg)</td>
					<td className="table-datacell datatype-numeric">Calcium (%)</td>
					<td className="table-datacell datatype-numeric">Iron (%)</td>
					<td className="table-datacell datatype-string"><i className="material-icons">insert_comment</i>Comments</td>
				</tr>
			</thead>
			<tbody className="data-table-content">
				<tr className="data-table-row">
					<td className="table-datacell datatype-string">Frozen yogurt</td>
					<td className="table-datacell datatype-numeric">159</td>
					<td className="table-datacell datatype-numeric">6.0</td>
					<td className="table-datacell datatype-numeric">24</td>
					<td className="table-datacell datatype-numeric">4.0</td>
					<td className="table-datacell datatype-numeric">87</td>
					<td className="table-datacell datatype-numeric">14%</td>
					<td className="table-datacell datatype-numeric">1%</td>
					<td className="table-datacell datatype-string"><input type="text" className="md-ui component-input data-table-input" placeholder="add a comment"/></td>
				</tr>
			</tbody>
		</table>
	</div>
	<footer className="main-table-footer">
	
	</footer>
</section>
  </div>)
}
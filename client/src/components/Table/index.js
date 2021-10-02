import React from "react";
import M from "materialize-css"
import "./style.css"

export default function Table(){

    function drop(){
        M.AutoInit()
    }

 return ( <div>
      <section class="md-ui component-data-table">
	<header class="main-table-header">
		<h1 class="table-header--title">Nutrition</h1>  <button class='dropdown-trigger btn' onClick={drop}>Drop Me!</button>
		
        <ul id='dropdown1' class='dropdown-content'>
    <li><a href="#!">one</a></li>
    <li><a href="#!">two</a></li>
    <li class="divider" tabindex="-1"></li>
    <li><a href="#!">three</a></li>
    <li><a href="#!"><i class="material-icons">view_module</i>four</a></li>
    <li><a href="#!"><i class="material-icons">cloud</i>five</a></li>
  </ul>
        
        <span class="table-header--icons"><i class="material-icons">filter_list</i><i class="material-icons">more_vert</i>
		</span>
	</header>
	<div class="main-table-wrapper">
		<table class="main-table-content">
			<thead class="data-table-header">
				<tr class="data-table-row">
					<td class="table-datacell datatype-string">Dessert (100g serving)</td>
					<td class="table-datacell datatype-numeric">Calories</td>
					<td class="table-datacell datatype-numeric">Fat (g)</td>
					<td class="table-datacell datatype-numeric">Carbs (g)</td>
					<td class="table-datacell datatype-numeric">Protein (g)</td>
					<td class="table-datacell datatype-numeric">Sodium (mg)</td>
					<td class="table-datacell datatype-numeric">Calcium (%)</td>
					<td class="table-datacell datatype-numeric">Iron (%)</td>
					<td class="table-datacell datatype-string"><i class="material-icons">insert_comment</i>Comments</td>
				</tr>
			</thead>
			<tbody class="data-table-content">
				<tr class="data-table-row">
					<td class="table-datacell datatype-string">Frozen yogurt</td>
					<td class="table-datacell datatype-numeric">159</td>
					<td class="table-datacell datatype-numeric">6.0</td>
					<td class="table-datacell datatype-numeric">24</td>
					<td class="table-datacell datatype-numeric">4.0</td>
					<td class="table-datacell datatype-numeric">87</td>
					<td class="table-datacell datatype-numeric">14%</td>
					<td class="table-datacell datatype-numeric">1%</td>
					<td class="table-datacell datatype-string"><input type="text" class="md-ui component-input data-table-input" placeholder="add a comment"/></td>
				</tr>
			</tbody>
		</table>
	</div>
	<footer class="main-table-footer">
	
	</footer>
</section>
  </div>)
}
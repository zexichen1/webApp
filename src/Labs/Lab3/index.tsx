import VariablesAndConstants from "./VariablesAndConstants";
import VariableTypes from "./VariableTypes";
import BooleanVariables from "./BooleanVariables";
import TernaryOperator from "./TernaryOperator";
import ConditionalOutputInline from "./ConditionalOutputIfElse";
import LegacyFunctions from "./LegacyFunctions";
import ArrowFunctions from "./ArrowFunctions";
import TemplateLiterals from "./TemplateLiterals";
import ImpliedReturn from "./ImpliedReturn";
import ArrayIndexAndLength from "./ArrayIndexAndLength";
import SimpleArrays from "./SimpleArrays";
import ForLoops from "./ForLoops";
import MapFunction from "./MapFunction";
import FindFunction from "./FindFunction";
import Classes from "./Classes";
import ArrayFindIndex from "./FindIndex";
import FilterFunction from "./FilterFunction";
import House from "./House";
import JsonStringify from "./JsonStringify";
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";
import Spreading from "./Spreading";
import Add from "./Add";
import PathParameters from "./PathParameters";
import Styles from "./Styles";
import FunctionDestructing from "./FunctionDestructing";
import AddingAndRemovingToFromArrays from "./AddingAndRemovingToFromArrays";
import Destructing from "./Destructing";
import DestructingImports from "./DestructingImports";
import Square from "./Square";
import Highlight from "./Highlight";
import AddPathParameters from "./AddPathParameters";
import IfElse from "./IfElse";
import { useSelector } from "react-redux";
export default function Lab3() {
  const { todos } = useSelector((state: any) => state.todosReducer);
  return(
    <div id="wd-lab3">
      <h3>Lab 3</h3>
      <ul className="list-group">
        {todos.map((todo: any) => (
          <li className="list-group-item" key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
      <hr />
      <VariablesAndConstants/>
      <VariableTypes/>
      <BooleanVariables/>
      <IfElse/>
      <TernaryOperator/>
      <ConditionalOutputInline/>
      <LegacyFunctions/>
      <ArrowFunctions/>
      <ImpliedReturn/>
      <TemplateLiterals/>
      <SimpleArrays/>
      <ArrayIndexAndLength/>
      <AddingAndRemovingToFromArrays/>
      <ForLoops/>
      <MapFunction/>
      <FindFunction/>
      <ArrayFindIndex/>
      <FilterFunction/>
      <JsonStringify/>
      <House/>
      <TodoItem/>
      <TodoList/>
      <Spreading/>
      <Destructing/>
      <FunctionDestructing/>
      <DestructingImports/>
      <Classes/>
      <Styles/>
      <Add a={3} b={4} />
      <h4>Square of 4</h4>
      <Square>4</Square>
      <hr />
      <Highlight>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
        vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
     </Highlight>
     <PathParameters/>
     
    </div>
  );
}

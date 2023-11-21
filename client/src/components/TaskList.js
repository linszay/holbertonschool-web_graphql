import {
  useState,
  //useEffect
} from "react";
import {gql} from 'apollo-boost'
// components
import TaskDetails from './TaskDetails';
import { graphql } from 'react-apollo'

const getTasksQuery = gql`
{
  tasks{
    title
    id
   }
}
`;

function TaskList(props) {
  const [state, setState] = useState({
    selected: null
  });

  return ( <
    div >
    <
    ul id = "task-list" > {

    } <
    /ul>  <
    TaskDetails /
    > < /
    div >
  );
}

function displayTasks() {
    console.log(props.data);
    var data = props.data;

    if (data.loading) {
      return ( < div > Loading tasks... < /div>);
      }
      else {
        return data.tasks.map(task => {
            return ( < li key = {
                task.id
              }
              onClick = {
                (e) => {
                  setState({
                    selected: task.id
                  });
                }
              } > {
                task.title
              } < /li>);
            })
        }
     }

export default graphql(getTasksQuery)(TaskList);

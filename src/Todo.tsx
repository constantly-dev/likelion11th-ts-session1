interface TodoType {
  props: string[];
}
const Todo = ({ props }: TodoType) => {
  return (
    <>
      {props.map((todo, index) => (
        <div key={index}>{todo}</div>
      ))}
    </>
  );
};

export default Todo;

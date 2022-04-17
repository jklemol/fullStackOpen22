const App = () => {
  const osa1 = "Fundamentals of react";
  const osa2 = "Using props to pass data";
  const osa3 = "State of a component";
  const amount1 = 10;
  const amount2 = 7;
  const amount3 = 14;

  return (
    <div>
      <Header kurssi="Half Stack application development" />
      <Content
        osa1={osa1}
        amount={amount1}
        osa2={osa2}
        amount2={amount2}
        osa3={osa3}
        amount3={amount3}
      />
      <Total amount1={amount1} amount2={amount2} amount3={amount3} />
    </div>
  );
};

const Header = (props) => {
  return (
    <div>
      <h1>{props.kurssi}</h1>
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      <p>
        {props.osa2} {props.amount1}
      </p>
      <p>
        {props.osa2} {props.amount2}
      </p>
      <p>
        {props.osa3} {props.amount3}
      </p>
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.amount1 + props.amount2 + props.amount3}</p>
    </div>
  );
};

export default App;

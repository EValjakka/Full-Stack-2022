const Header = (props) => {
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return(
    <p>
      {props.part} {props.exercise}
    </p>
  )
}


const Content = (props) => {
  return(
    <div>
      <Part part={props.lanttu} exercise={props.perna}/>
      <Part part={props.kurkku} exercise={props.stna} />
      <Part part={props.andy} exercise={props.emmi} />
    </div>
  )
}

const Total = (props) => {
  return(
    <div>
      <p>
        Number of exercises {props.total}
      </p>
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application developmet'
  const part1 = 'Fundamentals of React'
  const exercise1 = 10
  const part2 = 'Using props to pass data'
  const exercise2 = 7
  const part3 = 'State of component'
  const exercise3 = 14

return(
  <div>
    <Header course={course}/>
    <Content lanttu={part1} perna={exercise1} kurkku={part2} stna={exercise2} andy={part3} emmi={exercise3}/>
    <Total total={exercise1 + exercise2 + exercise3} />
  </div>
  )
}

export default App;

//Refaktoroi vielä komponentti Content siten, 
//että se ei itse renderöi yhdenkään osan nimeä eikä 
//sen tehtävälukumäärää vaan ainoastaan kolme 
//Part-nimistä komponenttia, joista kukin siis 
//renderöi yhden osan nimen ja tehtävämäärän.
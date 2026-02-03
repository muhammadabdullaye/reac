// Welcome Component --> props: lang
// Car Component     --> props: title, description
function Car({ name, description }) {
    //   const { name, description } = props;
    
      return (
        <div>
          <h1> {name} </h1>
          <p> {description} </p>
        </div>
      );
    }
    
    export default Car;
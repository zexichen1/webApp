const IfElse = () => {
    let true1 = true;
    let false1 = false;
    let age = 20;
    let isLoggedIn = true;
    let role = 'admin';
  
    return (
      <div id="wd-if-else">
        <h4>If Else Examples</h4>
  
        {true1 && <p>Example 1: true1 is true</p>}
  
        {false1 ? <p>Example 2: false1 is true</p> : <p>Example 2: false1 is false</p>}
  
        {age >= 18 ? <p>Example 3: You are an adult.</p> : <p>Example 3: You are a minor.</p>}
  
        {isLoggedIn ? <p>Example 4: Welcome back!</p> : <p>Example 4: Please log in.</p>}
  
        {role === 'admin' ? (
          <p>Example 5: You have admin privileges.</p>
        ) : (
          <p>Example 5: You are a regular user.</p>
        )}
  
        <hr />
      </div>
    );
  };
  
  export default IfElse;
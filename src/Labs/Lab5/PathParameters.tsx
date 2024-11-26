import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function PathParameters() {
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");
  return (
    <div>
      <h3>Path Parameters</h3>
      <input className="form-control mb-2" id="wd-path-parameter-a" type="number" defaultValue={a}
             onChange={(e) => setA(e.target.value)}/>
      <input className="form-control mb-2" id="wd-path-parameter-b" type="number" defaultValue={b}
             onChange={(e) => setB(e.target.value)}/>
      <a className="btn btn-primary me-2" id="wd-path-parameter-add"
         href={`${REMOTE_SERVER}/lab5/add/${a}/${b}`}>
         Add {a} + {b}
      </a>
      <a className="btn btn-danger me-2" id="wd-path-parameter-subtract" 
         href={`${REMOTE_SERVER}/lab5/subtract/${a}/${b}`}>
         Substract {a} - {b}
      </a>
      <a className="btn btn-success me-2" id="wd-path-parameter-add"
         href={`${REMOTE_SERVER}/lab5/multiply/${a}/${b}`}>
         Multiply {a} * {b}
      </a>
      <a className="btn btn-secondary" id="wd-path-parameter-subtract" 
         href={`${REMOTE_SERVER}/lab5/divide/${a}/${b}`}>
         Divide {a} / {b}
      </a>
      <hr />
      <div id="wd-query-parameters">
        <h3>Query Parameters</h3>
        <input id="wd-query-parameter-a"
                className="form-control mb-2"
                defaultValue={a} type="number"
                onChange={(e) => setA(e.target.value)} />
        <input id="wd-query-parameter-b"
                className="form-control mb-2"
                defaultValue={b} type="number"
                onChange={(e) => setB(e.target.value)} />
        <a id="wd-query-parameter-add"
            href={`${REMOTE_SERVER}/lab5/calculator?operation=add&a=${a}&b=${b}`}>
            Add {a} + {b} 
        </a>
        <a id="wd-query-parameter-subtract"
            href={`${REMOTE_SERVER}/lab5/calculator?operation=subtract&a=${a}&b=${b}`}>
            Substract {a} - {b} 
        </a>
        <a id="wd-query-parameter-multiply"
            href={`${REMOTE_SERVER}/lab5/calculator?operation=multiply&a=${a}&b=${b}`}>
            multiply {a} * {b} 
        </a>
        <a id="wd-query-parameter-divide"
            href={`${REMOTE_SERVER}/lab5/calculator?operation=divide&a=${a}&b=${b}`}>
            divide {a} / {b} 
        </a>
        {/* create additional links to test multiply and divide. use IDs starting with wd-query-parameter- */}
        <hr />
    </div>
    </div>
  );
}

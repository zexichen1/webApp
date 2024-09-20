export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label><br />
        <input id="wd-name" value="A1 - ENV + HTML" style={{ width: '300px', margin: '10px 0' }} /><br /><br />
        
        <textarea 
          id="wd-description"
          style={{ width: '400px', height: '100px' }}
        >
          The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section, Links to each of the lab assignments, Link to the Kanbas application, Links to all relevant source code repositories. The Kanbas application should include a link to navigate back to the landing page.
        </textarea><br /><br />
        
        <table>
          <tbody>
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-points">Points</label>
              </td>
              <td>
                <input id="wd-points" type="number" value={100} style={{ width: '60px', marginLeft: '10px' }} />
              </td>
            </tr>
            
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-assignment-group">Assignment Group</label>
              </td>
              <td>
                <select id="wd-assignment-group" style={{ marginLeft: '10px' }}>
                  <option>ASSIGNMENTS</option>
                </select>
              </td>
            </tr>
  
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-display-grade">Display Grade as</label>
              </td>
              <td>
                <select id="wd-display-grade" style={{ marginLeft: '10px' }}>
                  <option>Percentage</option>
                  <option>Points</option>
                </select>
              </td>
            </tr>
            
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-submission-type">Submission Type</label>
              </td>
              <td>
                <select id="wd-submission-type" style={{ marginLeft: '10px' }}>
                  <option>Online</option>
                </select><br />
                
                <label>
                  <input type="checkbox" style={{ marginLeft: '20px' }} /> Text Entry
                </label><br />
                
                <label>
                  <input type="checkbox" style={{ marginLeft: '20px' }} /> Website URL
                </label><br />
                
                <label>
                  <input type="checkbox" style={{ marginLeft: '20px' }} /> Media Recordings
                </label><br />
                
                <label>
                  <input type="checkbox" style={{ marginLeft: '20px' }} /> Student Annotation
                </label><br />
                
                <label>
                  <input type="checkbox" style={{ marginLeft: '20px' }} /> File Uploads
                </label>
              </td>
            </tr>
            
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-assign-to">Assign To</label>
              </td>
              <td>
                <input id="wd-assign-to" value="Everyone" style={{ marginLeft: '10px' }} />
              </td>
            </tr>
            
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-due-date">Due</label>
              </td>
              <td>
                <input id="wd-due-date" type="date" value="2024-05-13" style={{ marginLeft: '10px' }} />
              </td>
            </tr>
  
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-available-from">Available from</label>
              </td>
              <td>
                <input id="wd-available-from" type="date" value="2024-05-06" style={{ marginLeft: '10px' }} />
              </td>
            </tr>
  
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-until">Until</label>
              </td>
              <td>
                <input id="wd-until" type="date" value="2024-05-20" style={{ marginLeft: '10px' }} />
              </td>
            </tr>
          </tbody>
        </table>
  
        <div style={{ marginTop: '20px' }}>
          <button style={{ marginRight: '10px' }}>Cancel</button>
          <button>Save</button>
        </div>
      </div>
    );
  }
  
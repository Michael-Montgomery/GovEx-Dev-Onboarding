// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="app">
      <h2>GovEx Developer Onboarding Checklist</h2>
      {/* <details>
        <summary>Administrative Tools</summary>
        <ol>
          <li>
            <p>We use Slack for instant messaging. Download and install it <a href="https://slack.com/downloads/mac">here</a>.</p>
          </li>
          <li>
            <p>We use Slack for instant messaging. Download and install it <a href="https://slack.com/downloads/mac">here</a>.</p>
          </li>
        </ol>
      </details> */}
      <details>
        <summary>Development Tools</summary>
        <ol>
          <li>
            <p>Install <a href="https://git-scm.com/book/en/v2/Getting-Started-Installing-Git" target="_blank" rel="noreferrer">Git</a></p>
          </li>
          <li>
            <p><a href="https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account" target="_blank" rel="noreferrer">Setup an SSH key</a> so your computer can interact with GovEx Github repositories</p>
          </li>
          <li>
            <p>Install an IDE (<a href="https://code.visualstudio.com/download" target="_blank" rel="noreferrer"> Visual Studio Code</a> is commonly used here.)</p>
          </li>
          <li>
            <p>Install <a href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm" target="_blank" rel="noreferrer">NPM</a></p>
          </li>
          <li>
            <p>Install <a href="https://www.postgresql.org/download/" target="_blank" rel="noreferrer">Postgres</a>. For configuration of Postgress, click here.</p>
          </li>
          <li>
            <p>Setup <a href="https://cloud.google.com/sql/docs/postgres/sql-proxy?hl=en">Google Cloud Proxy</a></p>
          </li>
          <li>
            <p>Clone the following repositories, as needed</p>
            <table>
              <thead>
                <th>Repo</th>
                <th>Desc.</th>
                <th>URL</th>
              </thead>
              <tbody>
                <tr>
                  <td>BCAI</td>
                  <td>Repository for the City Data Explorer, viewable <a href="https://cde.govex.jhu.edu/">here</a>.</td>
                  <td><a href="https://github.com/govex/bcai">BCAI Repo</a></td>
                </tr>
                <tr>
                  <td>CLAIR</td>
                  <td>Repository for City AI Connect, viewable <a href="https://cityaiconnect.jhu.edu">here</a>.</td>
                  <td><a href="https://github.com/fgh-global/clair">Clair Repo</a></td>
                </tr>
              </tbody>
            </table>
          </li>
        </ol>
      </details>
      <details>
        <summary>Helpful Links</summary>
        <table>
              <thead>
                <th>Desc.</th>
                <th>URL</th>
              </thead>
              <tbody>
                <tr>
                  <td>Repository for the City Data Explorer, viewable <a href="https://cde.govex.jhu.edu/">here</a>.</td>
                  <td><a href="https://github.com/govex/bcai" className="full-link">https://github.com/govex/bcai</a></td>
                </tr>
                <tr>
                  <td>Repository for City AI Connect, viewable <a href="https://cityaiconnect.jhu.edu">here</a>.</td>
                  <td><a href="https://github.com/fgh-global/clair" className="full-link">https://github.com/fgh-global/clair</a></td>
                </tr>
                <tr>
                  <td>Azure</td>
                  <td><a href="https://dev.azure.com/JHU-Enterprise-Web-Services/GovEx-BCAI" className="full-link">https://dev.azure.com/JHU-Enterprise-Web-Services/GovEx-BCAI</a></td>
                </tr>
                <tr>
                  <td>GovEx Google Drive</td>
                  <td><a href="https://drive.google.com/drive/u/0/folders/0AARXKuhX8mKAUk9PVA" className="full-link">https://drive.google.com/drive/u/0/folders/0AARXKuhX8mKAUk9PVA</a></td>
                </tr>
                <tr>
                  <td>CGEPI Knowledge Portal</td>
                  <td><a href="https://sites.google.com/gepi.io/knowledge/home" className="full-link">https://sites.google.com/gepi.io/knowledge/home</a></td>
                </tr>
                <tr>
                  <td>JHU Brand Guidelines</td>
                  <td><a href="https://brand.jhu.edu" className="full-link">https://brand.jhu.edu</a></td>
                </tr>
              </tbody>
            </table>
        </details>
    </div>
  );
}

export default App;

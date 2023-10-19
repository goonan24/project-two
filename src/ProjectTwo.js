import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;
  
class ProjectTwo extends LitElement {
  static properties = {
    header: { type: String },
    }

static styles = css`
    :host {
        display: block;
      }

      .project-two header{
        font-size: 35px; 
        color: Blue;
        margin: 1px;
      }
    `;

  constructor() {
    super();
    this.title = 'My boilerplate';
  }

  render() {
    return html`
      <main>
        <div class="project-two">  
          <header>News</header>
          <a><img src="https://hr.psu.edu/sites/hr/files/styles/article_home_page/public/2023-10/FluVaccines_HRFeature.jpg?h=09bc788e&itok=KEMIew2T" alt=""></a>
          <a href="https://hr.psu.edu/news/university-reminds-employees-flu-covid-19-vaccines-resources-and-policies">
            <!--link id="MLBB">University reminds employees of flu, COVID-19 vaccines, resources and policies</link-->
          </a>
          <time datetime="2023-10-10"></time>
          <textarea>Updated information for University employees, as it relates to flu and COVID-19 vaccine resources, health plan coverage and absence policies.</textarea>
        </div>  
      </main>
      `;
  }
}
customElements.define('project-two', ProjectTwo);

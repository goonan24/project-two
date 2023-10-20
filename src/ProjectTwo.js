import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;
  
class ProjectTwo extends LitElement {
  static properties = {
    header: { type: String },
    link: { type: String},
    active: {Type: Boolean, reflect: true}
    }

static styles = css`
    :host {
        display: inline-block;
      }

      header{
        font-size: 35px; 
        color: #001E44;
        margin: 1px;
        font-family: 'Roboto',sans-serif;
        font-weight: 700;
        font-size: 2.2em;
        position: relative;
      }
      .outsidebutton .butone{
        position: absolute;
        top: 600px;
        left: 500px;
        background-color: white;
        outline-color: lightblue;
      }
      :host([active]) .outsidebutton .butone:hover {
        background-color: gray;
        border: 2px solid black;
        border-radius: 2px;
        color: #005fa9;
        cursor: pointer;
      }
      .seg-two{
        top: 50px;
        position: absolute;
        left: 400px;
        margin-left: 10px;
      }

      .seg-twogroup img{
        height: 100px;
        width: 250px;
        
      }

      .seg-two .datebox {
        position: relative;
        box-sizing: border-box;
        width: 0.6;
        height: 10px;
        width: 50px;
        text-align: center;
        margin-right: 10px;
        float: left;
        position: relative;
        left: 5px;
        top: 1px;
        
      }

      .datebox .month{
        display: block;
        background: #1E407C;
        border-radius: 0 0 2px 2px;
        color: #FFF;
        font-size: 0.8em;
        font-weight: bold;
        line-height: 1.8;
        padding: 1px 10px;
        text-transform: uppercase;
      }

      .datebox .day{
        background: #f7f7f7;
        border-radius: 2px 2px 0 0;
        color: #444;
        display: block;
        font-size: 18px;
        font-weight: 900;
        padding: 10px 20px;
      }
      .seg-two .headline{
        position: absolute;
        font-size: 14px;
        font-weight: 400;
        line-height: 30px;
        margin-top: 33px;
        margin-bottom: 33px;
        text-transform: uppercase;
        left: 65px;
        top: 65px;
        width: 250px;
        color: #005fa9;
        text-decoration: none;
    
      }
      .seg-two .info{
        position: absolute;
        background-color: #ededed;
        outline-color: #ededed;
        font-size: 20px;
        color: black;
        width: 157px;
        height: 47px;
        font-family: sans-serif;
        size: 100px;
        width: 250px; 
        height: 114px;
        left: 50px;
        top: 185px;   
        right: 200px;
      }
      .seg-one{
        top: 5px;
        position: relative;
        left: 5px;
        margin-left: 10px;
        right: 500px;
        margin-right: 600px;
      }
      .seg-onegroup header{
        font-size: 35px; 
        color: #001E44;
        margin: 1px;
        font-family: 'Roboto',sans-serif;
        font-weight: 700;
        font-size: 2.2em;
      }

      .seg-onegroup img{
        height: 100px;
        width: 250px;
        
      }

      .seg-one .datebox {
        position: relative;
        box-sizing: border-box;
        width: 0.6;
        height: 10px;
        width: 50px;
        text-align: center;
        margin-right: 10px;
        float: left;
        position: relative;
        left: 5px;
        top: 1px;
        
      }

      .datebox .month{
        display: block;
        background: #1E407C;
        border-radius: 0 0 2px 2px;
        color: #FFF;
        font-size: 0.8em;
        font-weight: bold;
        line-height: 1.8;
        padding: 1px 10px;
        text-transform: uppercase;
      }

      .datebox .day{
        background: #f7f7f7;
        border-radius: 2px 2px 0 0;
        color: #444;
        display: block;
        font-size: 18px;
        font-weight: 900;
        padding: 10px 20px;
      }
      
      .seg-one .headline{
        position: absolute;
        font-size: 14px;
        font-weight: 400;
        line-height: 30px;
        margin-top: 33px;
        margin-bottom: 33px;
        text-transform: uppercase;
        left: 65px;
        top: 65px;
        width: 250px;
        color: #005fa9;
        text-decoration: none;
      }
    
      .seg-one .info{
        position: absolute;
        font-size: 20px;
        color: black;
        width: 157px;
        height: 47px;
        font-family: sans-serif;
        size: 100px;
        width: 250px; 
        height: 114px;
        left: 50px;
        top: 185px;   
        right: 200px;
      }

      .seg-three{
        top: 50px;
        position: absolute;
        left: 800px;
        margin-left: 10px;
        right: 500px;
        margin-right: 600px;
      }
      .seg-threegroup header{
        font-size: 35px; 
        color: #001E44;
        margin: 1px;
        font-family: 'Roboto',sans-serif;
        font-weight: 700;
        font-size: 2.2em;
      }

      .seg-threegroup img{
        height: 100px;
        width: 250px;
        
      }

      .seg-three .datebox {
        position: relative;
        box-sizing: border-box;
        width: 0.6;
        height: 10px;
        width: 50px;
        text-align: center;
        margin-right: 10px;
        float: left;
        position: relative;
        left: 5px;
        top: 1px;
        
      }

      .datebox .month{
        display: block;
        background: #1E407C;
        border-radius: 0 0 2px 2px;
        color: #FFF;
        font-size: 0.8em;
        font-weight: bold;
        line-height: 1.8;
        padding: 1px 10px;
        text-transform: uppercase;
      }

      .datebox .day{
        background: #f7f7f7;
        border-radius: 2px 2px 0 0;
        color: #444;
        display: block;
        font-size: 18px;
        font-weight: 900;
        padding: 10px 20px;
      }
      
      .seg-three .headline{
        position: absolute;
        font-size: 14px;
        font-weight: 400;
        line-height: 30px;
        margin-top: 33px;
        margin-bottom: 33px;
        text-transform: uppercase;
        left: 65px;
        top: 65px;
        width: 250px;
        color: #005fa9;
        text-decoration: none;
      }
    
      .seg-three .info{
        position: absolute;
        font-size: 20px;
        color: black;
        width: 157px;
        height: 47px;
        font-family: sans-serif;
        size: 100px;
        width: 250px; 
        height: 114px;
        left: 50px;
        top: 185px;   
        right: 200px;
      }
  
    `;

  constructor() {
    super();
    this.title = 'My boilerplate';
  }

  render() {
    return html`
      <main>
        <header>Recent News</header>
        <div class="segments">
          <div class="seg-two">
            <div class="seg-twogroup">  
              <a href="https://hr.psu.edu/news/expanded-family-sick-leave-full-time-staff-take-effect-january">
                <img src="https://hr.psu.edu/sites/hr/files/styles/article_home_page/public/2023-10/FluVaccines_HRFeature.jpg?h=09bc788e&itok=KEMIew2T" alt=""></a>
              <a href="https://hr.psu.edu/news/university-reminds-employees-flu-covid-19-vaccines-resources-and-policies">
                <!--link id="MLBB">University reminds employees of flu, COVID-19 vaccines, resources and policies</link-->
              </a>
            </div>  
            <div class="datebox">
              <span class="month">Oct</span>
              <span class="day">10</span>
            </div>
            <a class="headline" href="https://hr.psu.edu/news/university-reminds-employees-flu-covid-19-vaccines-resources-and-policies">University Reminds Employees Of Flu, COVID-19 Vaccines, Resources And Policies</a>
            <p class="info">Updated information for University employees, as it relates to flu and COVID-19 vaccine resources, health plan coverage and absence policies.</p>
          </div>

          <div class="seg-one">
            <div class="seg-onegroup">  
              <a href="https://hr.psu.edu/news/university-reminds-employees-flu-covid-19-vaccines-resources-and-policies">
                <img src="https://hr.psu.edu/sites/hr/files/styles/article_home_page/public/2023-10/ExpandedFamilySick_0.jpg?h=5265ff56&itok=e9egM1X8" alt=""></a>
            </div>  
            <div class="datebox">
              <span class="month">Oct</span>
              <span class="day">19</span>
            </div>
            <a class="headline" href="https://hr.psu.edu/news/expanded-family-sick-leave-full-time-staff-take-effect-january">Expanded Family Sick Leave For Full-Time Staff To Take Effect In January</a>
            <p class="info">As part of a continuing commitment to help improve quality of life for Penn State employees and their families, Penn State Human Resources is expanding the University’s family sick leave policy to 80 hours per year.</p>
          </div>

          <div class="seg-three">
            <div class="seg-threegroup">  
              <a href="https://hr.psu.edu/news/2024-benefits-open-enrollment-information-now-available">
                <img src="https://hr.psu.edu/sites/hr/files/styles/article_home_page/public/2023-09/BOEInformation_HRFeature.jpg?h=09bc788e&itok=ZDBRn6_B" ></a>
            </div>  
            <div class="datebox">
              <span class="month">Sep</span>
              <span class="day">25</span>
            </div>
            <a class="headline" href="https://hr.psu.edu/news/2024-benefits-open-enrollment-information-now-available">2024 Benefits Open Enrollment Information Now Available</a>
            <p class="info">Penn State's 2024 Benefits Open Enrollment starts, Monday, Nov. 6, and runs through 5 p.m. EST on Friday, Nov. 17. Information on health-care plan designs — which remain the same for 2024 — is available on a dedicated 2024 Benefits Open Enrollment section of the Penn State Human Resources website.</p>
          </div>
          <a class="outsidebutton" href="https://hr.psu.edu/news">
            <button class="butone" active>View All News</button>
            </a>
        </div>
      </main>
      `;
  }
}
customElements.define('project-two', ProjectTwo);

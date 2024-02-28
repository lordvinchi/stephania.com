// Get references to the sidebar links and the content div
const page1Link = document.getElementById('page1');
const page2Link = document.getElementById('page2');
const page3Link = document.getElementById('page3');
const page4Link = document.getElementById('page4');
const page5Link = document.getElementById('page5');
const page6Link = document.getElementById('page6');
const page7Link = document.getElementById('page7');
const page8Link = document.getElementById('page8');
const page9Link = document.getElementById('page9');
const page10Link = document.getElementById('page10');
const page11Link = document.getElementById('page11');
const page12Link = document.getElementById('page12');
const page13Link = document.getElementById('page13');
const page14Link = document.getElementById('page14');
const page15Link = document.getElementById('page15');
const page16Link = document.getElementById('page16');
const page17Link = document.getElementById('page17');
const page18Link = document.getElementById('page18');
const page19Link = document.getElementById('page19');
const page20Link = document.getElementById('page20');
const page21Link = document.getElementById('page21');
const page22Link = document.getElementById('page22');
const page23Link = document.getElementById('page23');
const page24Link = document.getElementById('page24');
const page25Link = document.getElementById('page25');
const page26Link = document.getElementById('page26');
const page27Link = document.getElementById('page27');
const page28Link = document.getElementById('page28');
const servicesContent = document.getElementById('servicesContent');

// Define the content for each page
const page1Content = `<div class="about-text ">
<div class="about-heading-wrap">
  <h2 class="main_title about-heading mtb_20 pb_20 wow fadeInUp" data-wow-delay=".2s">Engineering Services</h2>
  <h3 class="mb_20 wow fadeInUp" data-wow-delay=".2s">Stephania Support Services Ltd in conjunction with 
                                                                Flenco Engineers are experts of proprietary codes of the main players 
                                                                in the Oil & Gas and Power Generation Business.</h3>
</div>
<div class="grid-item listing-effect illustration webdesign">
<a href="images/pf1.jpg" title="Portfolio Title -1">
<img src="images/pf1.jpg" alt="Engineering">
</a>
</div>
  <section>
        <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-12">
          <div class="story_detail">
              <p class=" wow fadeInUp" data-wow-delay=".3s">
              <h3 class="mb_20 wow fadeInUp" data-wow-delay=".2s">
                <ul class="box-category">
                <li>• Lubrication process.</li>
                <li>• Gas Turbine fuel process.</li>
                <li>• Gas and fuel treatment process.</li>
                <li>• Machinery packaging.</li>
                <li>• Compressors and turbines.</li>
                </ul></h3>
              </p>
        </div>
    </div>
  </div>
</div>
</section>      
<div class="grid-item listing-effect illustration webdesign"> <a href="images/pf1a.jpg" title="Portfolio Title -1"> <img src="images/pf1a.jpg" alt="Engineering"></a></div>
<section>
  <div class="container">
    <div class="row">
      <div class="col-md-8 col-sm-12">
          <p class=" wow fadeInUp" data-wow-delay=".3s">
          <h3 class="mb_20 wow fadeInUp" data-wow-delay=".2s">
            <ul class="box-category">
            <li>• Process Simulation.</li>
            <li>• Structural stress analysis</li>
            <li>• Piping stress analysis.</li>
            <li>• 3D modeling and detailed engineering.</li>
            <li>• Electrical, instrument and controls.</li>
            </ul></h3>
          </p>                        
        </div>
  </div>
</div>
</section>  
</div>`;

const page2Content = `<div class="about-text ">
<div class="about-heading-wrap">
  <h2 class="main_title about-heading mtb_20 pb_20 wow fadeInUp" data-wow-delay=".2s">Production &amp; Services</h2>
   <h3 class="mb_20 wow fadeInUp" data-wow-delay=".2s">Stephania Support Services Ltd in conjunction with Flenco 
                                                                Engineers Fluid System's production ranges offer different solutions for skids, 
                                                                fluid systems, packages and customized services for: </br>

                                                                <p class=" wow fadeInUp" data-wow-delay=".3s">
                                                                <ul class="box-category"></br>
                                                                <li>• Reciprocating Compressors</li>
                                                                <li>• Rotating Compressors</li>
                                                                <li>• Gas Turbines</li>
                                                                <li>• Steam Turbines</li>
                                                                <li>• Engines, Fans and Generator Sets</li>
                                                                <li>• Balance of Plants</li>
                                                                <li>• Services and Spare Parts</li>
                                                                </ul>
                                                              </p> </h3>
</div>
<h3 class="mb_20 wow fadeInUp" data-wow-delay=".2s">With thousand of systems are currently in service, 
                                                    Stephania Support Services Ltd in conjunction with Flenco 
                                                    Engineers has worked with specifications of nearly every major 
                                                    Petrochemical, Power Generation, Industry and Air Separation company worldwide.
                                                    </h3>

                                                    <!-- =====  CREATIVE WORK START  ===== -->
    <section id="work">
      <div id="portfolio" class="mb_100">
        <div class="container text-center">
          <div class="grid wow fadeInUp" data-wow-delay=".4s">
            <div class="isotope three-col-work ">
              <div class="grid-item listing-effect illustration webdesign"> <a href="images/pf1.jpg" title="Portfolio Title -1"> <img src="images/pf1.jpg" alt="Civil Engineer">
              <div class="work-detail">
                <h3 class="project-title mb_10">Projects Title - 01</h3>
                <div class="meta-title">Construction work</div>
              </div>
              </a> </div>
              <div class="grid-item listing-effect VectorDesign Construction work"> <a href="images/pf11.jpg" title="Portfolio Title -2"> <img src="images/pf11.jpg" alt="Civil Engineer">
              <div class="work-detail">
                <h3 class="project-title mb_10">Projects Title - 02</h3>
                <div class="meta-title">Construction work</div>
              </div>
              </a> </div>
              <div class="grid-item listing-effect illustration webdesign"> <a href="images/pf12.jpg" title="Portfolio Title -3"> <img src="images/pf12.jpg" alt="Civil Engineer">
              <div class="work-detail">
                <h3 class="project-title mb_10">Projects Title - 03</h3>
                <div class="meta-title">Construction work</div>
              </div>
              </a> </div>
              <div class="grid-item listing-effect VectorDesign"> <a href="images/pf4.jpg" title="Portfolio Title -4"> <img src="images/pf4.jpg" alt="Civil Engineer">
              <div class="work-detail">
                <h3 class="project-title mb_10">Projects Title - 04</h3>
                <div class="meta-title">Construction work</div>
              </div>
              </a> </div>
              <div class="grid-item listing-effect webdesign VectorDesign Construction work"> <a href="images/pf5.jpg" title="Portfolio Title -5"> <img src="images/pf5.jpg" alt="Civil Engineer">
              <div class="work-detail">
                <h3 class="project-title mb_10">Projects Title - 05</h3>
                <div class="meta-title">Construction work</div>
              </div>
              </a> </div>
              <div class="grid-item listing-effect illustration VectorDesign"> <a href="images/pf6.jpg" title="Portfolio Title -6"> <img src="images/pf6.jpg" alt="Civil Engineer">
              <div class="work-detail">
                <h3 class="project-title mb_10">Projects Title - 06</h3>
                <div class="meta-title">Construction work</div>
              </div>
              </a> </div>
              
          </div>
        </div>
      </div>
    </section>
    <!-- =====  CREATIVE WORK END  ===== -->
</div>`;
const page3Content = `<div class="about-text ">
<div class="about-heading-wrap">
        <h2 class="main_title about-heading mtb_20 pb_20 wow fadeInUp" data-wow-delay=".2s">Procurement</h2>
            <div class="grid-item listing-effect illustration webdesign"> <a href="images/pf1a.jpg" title="Portfolio Title -1"> <img src="images/pf1a.jpg" alt="Engineering"></a></div>
                <h3 class=" mb_20 wow fadeInUp" data-wow-delay=".2s">Stephania Support Services Ltd which is the 
                arm of our business that deals with the procurement for all our engineering projects, 
                adopts a strategic framework in providing procurement services to clients. </br></br>
                Our technically knowledgeable professionals carry out an identification of need 
                and requirements analysis to understand the objectives of your business in order 
                to create a strategic spend plan and define technical requirements. We perform a market 
                analysis to understand the overall competitiveness of the marketplace and trends that 
                are likely to impact your business. We also carry out cost analysis to help your business 
                make an informed decision on whether to manufacture a product internally or purchase it 
                externally from a supplier. Depending on your decision, we can help your business 
                identify reliable suppliers.
                </h3>
</div>
            <div class="grid-item listing-effect illustration webdesign"> <a href="images/pf1.jpg" title="Portfolio Title -1"> <img src="images/pf1.jpg" alt="Engineering"></a></div>
                <h3 class=" mb_20 wow fadeInUp" data-wow-delay=".2s">Stephania Support Services Ltd which is the 
                arm of our business that deals with the procurement for all our engineering projects, 
                adopts a strategic framework in providing procurement services to clients. </br></br>
                Our technically knowledgeable professionals carry out an identification of need 
                and requirements analysis to understand the objectives of your business in order 
                to create a strategic spend plan and define technical requirements. We perform a market 
                analysis to understand the overall competitiveness of the marketplace and trends that 
                are likely to impact your business. We also carry out cost analysis to help your business 
                make an informed decision on whether to manufacture a product internally or purchase it 
                externally from a supplier. Depending on your decision, we can help your business 
                identify reliable suppliers.
                </h3>    
            <div class="grid-item listing-effect illustration webdesign"> <a href="images/pf1a.jpg" title="Portfolio Title -1"> <img src="images/pf1a.jpg" alt="Engineering"></a></div>
                <h3 class="mb_20 wow fadeInUp" data-wow-delay=".2s">
                We take the confidentiality of our clients very seriously and so are prepared to 
                cooperate with our clients to protect sensitive information shared with us. 
                We have over a decade of strong practical experience in competitive bidding and quickly 
                respond to requests for quotation, requests for proposals, requests for information, 
                requests for tender, requests for solution and requests for partnership. 
                Contact us today to benefit from our world-class procurement expertise and enjoy premium customer service.
                </h3>
</div>`;
const page4Content = `<div class="about-text ">
<div class="about-heading-wrap">
  <h2 class="main_title about-heading mtb_20 pb_20 wow fadeInUp" data-wow-delay=".2s">Integrated Systems</h2>
  <h3 class="mb_20 wow fadeInUp" data-wow-delay=".2s">Integrated systems for lubrication, start up, 
                                                        gas and fuel treatment, including filtration,
                                                        pumping, injection and controls.</h3>
</div>
<!-- =====  CREATIVE WORK START  ===== -->
    <section id="work">
      <div id="portfolio" class="mb_100">
        <div class="container text-center">
          
          <div class="grid wow fadeInUp" data-wow-delay=".4s">
            <div class="isotope three-col-work ">
              <div class="grid-item listing-effect illustration webdesign"> <a href="images/pf1.jpg" title="Portfolio Title -1"> <img src="images/pf1.jpg" alt="Civil Engineer">
              <div class="work-detail">
                <h3 class="project-title mb_10">Projects Title - 01</h3>
                <div class="meta-title">Construction work</div>
              </div>
              </a> </div>
              <div class="grid-item listing-effect VectorDesign Construction work"> <a href="images/pf2.jpg" title="Portfolio Title -2"> <img src="images/pf2.jpg" alt="Civil Engineer">
              <div class="work-detail">
                <h3 class="project-title mb_10">Projects Title - 02</h3>
                <div class="meta-title">Construction work</div>
              </div>
              </a> </div>
              <div class="grid-item listing-effect illustration webdesign"> <a href="images/pf3.jpg" title="Portfolio Title -3"> <img src="images/pf3.jpg" alt="Civil Engineer">
              <div class="work-detail">
                <h3 class="project-title mb_10">Projects Title - 03</h3>
                <div class="meta-title">Construction work</div>
              </div>
              </a> </div>
              <div class="grid-item listing-effect VectorDesign"> <a href="images/pf4.jpg" title="Portfolio Title -4"> <img src="images/pf4.jpg" alt="Civil Engineer">
              <div class="work-detail">
                <h3 class="project-title mb_10">Projects Title - 04</h3>
                <div class="meta-title">Construction work</div>
              </div>
              </a> </div>
              <div class="grid-item listing-effect webdesign VectorDesign Construction work"> <a href="images/pf5.jpg" title="Portfolio Title -5"> <img src="images/pf5.jpg" alt="Civil Engineer">
              <div class="work-detail">
                <h3 class="project-title mb_10">Projects Title - 05</h3>
                <div class="meta-title">Construction work</div>
              </div>
              </a> </div>
              <div class="grid-item listing-effect illustration VectorDesign"> <a href="images/pf6.jpg" title="Portfolio Title -6"> <img src="images/pf6.jpg" alt="Civil Engineer">
              <div class="work-detail">
                <h3 class="project-title mb_10">Projects Title - 06</h3>
                <div class="meta-title">Construction work</div>
              </div>
              </a> </div>
              <div class="grid-item listing-effect VectorDesign"> <a href="images/pf7.jpg" title="Portfolio Title -7"> <img src="images/pf7.jpg" alt="Civil Engineer">
              <div class="work-detail">
                <h3 class="project-title mb_10">Projects Title - 07</h3>
                <div class="meta-title">Construction work</div>
              </div>
              </a> </div>
              <div class="grid-item listing-effect webdesign illustration Construction work"> <a href="images/pf8.jpg" title="Portfolio Title -8"> <img src="images/pf8.jpg" alt="Civil Engineer">
              <div class="work-detail">
                <h3 class="project-title mb_10">Projects Title - 08</h3>
                <div class="meta-title">Construction work</div>
              </div>
              </a> </div>
              <div class="grid-item listing-effect webdesign"> <a href="images/pf9.jpg" title="Portfolio Title -9"> <img src="images/pf9.jpg" alt="Civil Engineer">
              <div class="work-detail">
                <h3 class="project-title mb_10">Projects Title - 09</h3>
                <div class="meta-title">Construction work</div>
              </div>
              </a> </div>
            </div>
           </div>
        </div>
      </div>
    </section>
    <!-- =====  CREATIVE WORK END  ===== -->
</div>`;
const page5Content = `<div class="about-text ">
<div class="about-heading-wrap">
  <h2 class="main_title about-heading mtb_20 pb_20 wow fadeInUp" data-wow-delay=".2s">Lube Oil</h2>
                        <h3 class="mb_20 wow fadeInUp" data-wow-delay=".2s">We specialize in providing comprehensive, 
                        tailored lubrication solutions. As a trusted lube supplier and consultants, 
                        we understand the critical role that proper lubrication plays in 
                        optimizing equipment performance. To ensure that your machinery 
                        operates at its peak efficiency, extend machinery lifespan, and minimize downtime;
                        we offer our technical expertise coupled with our range of specialized lubricants, 
                        Lube Oil, seal Oil, hydraulic Oil, control Oil systems for turbines, 
                        compressors, pumps, gears, generators designed according to API 614/ ISOI 0438 
                        or any Other standard. They may include overhead tanks.</h3>
</div>
<div class="grid-item listing-effect illustration webdesign"> <a href="images/pf1.jpg" title="Portfolio Title -1"> <img src="images/pf1.jpg" alt="Engineering"></a></div>
<div class="grid-item listing-effect illustration webdesign"> <a href="images/pf1.jpg" title="Portfolio Title -1"> <img src="images/pf1.jpg" alt="Engineering"></a></div>
<div class="grid-item listing-effect illustration webdesign"> <a href="images/pf1a.jpg" title="Portfolio Title -1"> <img src="images/pf1a.jpg" alt="Engineering"></a></div>
</div>`;
const page6Content = `<div class="about-text ">
<div class="about-heading-wrap">
  <h2 class="main_title about-heading mtb_20 pb_20 wow fadeInUp" data-wow-delay=".2s">Full Packaging</h2>
  <h3 class="mb_20 wow fadeInUp" data-wow-delay=".2s">Assembly of the complete compressor train on the base frames,
   including mechanical (piping around & structures), electrical, instrumental 
   and controls components seamlessly, optimizing performance and minimizing costs. 
   With cutting-edge testing facilities and modular design, we ensure peak 
   reliability and reduced installation expenses. Stephania Support 
   Services Limited in collaboration with Flenco Engineers offers complete testing capability, 
   while modular design reduces field installation and transportation costs. 
   Our partnership-driven approach guarantees excellence from concept to realization. 
  Elevate your operations with our innovative compressor train solutions.</h3>
</div>
<div class="grid-item listing-effect illustration webdesign"> <a href="images/pf1.jpg" title="Portfolio Title -1"> <img src="images/pf1.jpg" alt="Engineering"></a></div>
<div class="grid-item listing-effect illustration webdesign"> <a href="images/pf1.jpg" title="Portfolio Title -1"> <img src="images/pf1.jpg" alt="Engineering"></a></div>
<div class="grid-item listing-effect illustration webdesign"> <a href="images/pf1a.jpg" title="Portfolio Title -1"> <img src="images/pf1a.jpg" alt="Engineering"></a></div>
</div>`;
const page7Content = `<div class="about-text ">
<div class="about-heading-wrap">
  <h2 class="main_title about-heading mtb_20 pb_20 wow fadeInUp" data-wow-delay=".2s">Gas Seal Panels</h2>
  <h3 class="mb_20 wow fadeInUp" data-wow-delay=".2s">Gas seal panels according to ISO 10438:2008 
  Part 4 and API 614 Fifth Edition Chapter 4 are designed 
  supply seal and buffer gas to the shaft seals. They include 
  filters, controls, piping or tubing, instruments and cover a 
  wide array of flows, pressures and material grades. 
  Gas seal panels are crucial components in industrial machinery, 
  such as compressors and turbines Gas Seal Panels ensure efficient 
  sealing between rotating and stationary parts, preventing gas leaks 
  and maintaining operational integrity. These panels 
  play a vital role in enhancing safety, 
  performance, and reliability across various industries.</h3>
</div>
<!-- =====  CREATIVE WORK START  ===== -->
    <section id="work">
      <div id="portfolio" class="mb_100">
        <div class="container text-center">
         <div class="grid wow fadeInUp" data-wow-delay=".4s">
            <div class="isotope three-col-work ">
              <div class="grid-item listing-effect illustration webdesign"> <a href="images/pf1.jpg" title="Portfolio Title -1"> <img src="images/pf1.jpg" alt="Civil Engineer">
              <div class="work-detail">
                <h3 class="project-title mb_10">Projects Title - 01</h3>
                <div class="meta-title">Construction work</div>
              </div>
              </a> </div>
              <div class="grid-item listing-effect VectorDesign Construction work"> <a href="images/pf2.jpg" title="Portfolio Title -2"> <img src="images/pf2.jpg" alt="Civil Engineer">
              <div class="work-detail">
                <h3 class="project-title mb_10">Projects Title - 02</h3>
                <div class="meta-title">Construction work</div>
              </div>
              </a> </div>
              <div class="grid-item listing-effect illustration webdesign"> <a href="images/pf3.jpg" title="Portfolio Title -3"> <img src="images/pf3.jpg" alt="Civil Engineer">
              <div class="work-detail">
                <h3 class="project-title mb_10">Projects Title - 03</h3>
                <div class="meta-title">Construction work</div>
              </div>
              </a> </div>
              <div class="grid-item listing-effect VectorDesign"> <a href="images/pf4.jpg" title="Portfolio Title -4"> <img src="images/pf4.jpg" alt="Civil Engineer">
              <div class="work-detail">
                <h3 class="project-title mb_10">Projects Title - 04</h3>
                <div class="meta-title">Construction work</div>
              </div>
              </a> </div>
              <div class="grid-item listing-effect webdesign VectorDesign Construction work"> <a href="images/pf5.jpg" title="Portfolio Title -5"> <img src="images/pf5.jpg" alt="Civil Engineer">
              <div class="work-detail">
                <h3 class="project-title mb_10">Projects Title - 05</h3>
                <div class="meta-title">Construction work</div>
              </div>
              </a> </div>
              <div class="grid-item listing-effect illustration VectorDesign"> <a href="images/pf6.jpg" title="Portfolio Title -6"> <img src="images/pf6.jpg" alt="Civil Engineer">
              <div class="work-detail">
                <h3 class="project-title mb_10">Projects Title - 06</h3>
                <div class="meta-title">Construction work</div>
              </div>
              </a> </div>
            </div>
           </div>
        </div>
      </div>
    </section>
    <!-- =====  CREATIVE WORK END  ===== -->
</div>`;
const page8Content = `<div class="about-text ">
<div class="about-heading-wrap">
  <h2 class="main_title about-heading mtb_20 pb_20 wow fadeInUp" data-wow-delay=".2s">Dampers</h2>
  <div class="grid-item listing-effect illustration webdesign"> <a href="images/pf1.jpg" title="Portfolio Title -1"> <img src="images/pf1.jpg" alt="Engineering"></a></div>
  <h3 class="mb_20 wow fadeInUp" data-wow-delay=".2s">Pressure vessels are containers designed to hold gases or liquids at a pressure substantially different from the ambient pressure; 
                                                      in our production range we may find pulsation dampers according to PED or ASME standards. 
                                                      Dampers enhance system control by regulating airflow, temperature, and pressure. We are focused on improving energy efficiency, occupant comfort, 
                                                      and equipment longevity in various applications, from HVAC to industrial processes.</h3>
</div>
<div class="grid wow fadeInUp" data-wow-delay=".4s">
    <div class="isotope three-col-work ">
    <div class="grid-item listing-effect VectorDesign Construction work"> <a href="images/pf2.jpg" title="Portfolio Title -2"> <img src="images/pf2.jpg" alt="Civil Engineer">
        <div class="work-detail">
        <h3 class="project-title mb_10">Projects Title - 02</h3>
        <div class="meta-title">Construction work</div>
      </div>
  </a> </div>
      <div class="grid-item listing-effect VectorDesign Construction work"> <a href="images/pf2.jpg" title="Portfolio Title -2"> <img src="images/pf2.jpg" alt="Civil Engineer">
        <div class="work-detail">
        <h3 class="project-title mb_10">Projects Title - 02</h3>
        <div class="meta-title">Construction work</div>
      </div>
  </a> </div>
      <div class="grid-item listing-effect VectorDesign Construction work"> <a href="images/pf2.jpg" title="Portfolio Title -2"> <img src="images/pf2.jpg" alt="Civil Engineer">
        <div class="work-detail">
        <h3 class="project-title mb_10">Projects Title - 02</h3>
        <div class="meta-title">Construction work</div>
      </div>
  </a> </div>
      <div class="grid-item listing-effect illustration webdesign"> <a href="images/pf1.jpg" title="Portfolio Title -1"> <img src="images/pf1.jpg" alt="Engineering"></a></div>
      <div class="grid-item listing-effect illustration webdesign"> <a href="images/pf1.jpg" title="Portfolio Title -1"> <img src="images/pf1.jpg" alt="Engineering"></a></div>
      <div class="grid-item listing-effect illustration webdesign"> <a href="images/pf1.jpg" title="Portfolio Title -1"> <img src="images/pf1.jpg" alt="Engineering"></a></div>
</div>
</div>`;
const page9Content = `<div class="about-text ">
<div class="about-heading-wrap">
  <h2 class="main_title about-heading mtb_20 pb_20 wow fadeInUp" data-wow-delay=".2s">Water Washing Systems</h2>
  <h3 class="mb_20 wow fadeInUp" data-wow-delay=".2s">Turbine water wash systems operates in both on line 
  (during turbine run) and offline (during turbine stop) mode. 
  They have the purpose to deliver specified water and detergent flow to the nozzles, 
  thus maintaining efficiency. They may be used onshore and offshore. Our standard systems 
  are designed to be compact and mobile, offering effective equipment cleaning in industries 
  like power generation and aviation. Eradicating contaminants, improving efficiency, 
  extending component life, and ensure compliance with environmental standards, 
  enhancing operational reliability. </h3>
  
</div>
<div class="grid wow fadeInUp" data-wow-delay=".4s">
    <div class="isotope three-col-work ">
          <div class="grid-item listing-effect VectorDesign Construction work"> <a href="images/pf2.jpg" title="Portfolio Title -2"> <img src="images/pf2.jpg" alt="Civil Engineer">
              <div class="work-detail">
              <h3 class="project-title mb_10">Projects Title - 02</h3>
              <div class="meta-title">Construction work</div>
            </div>
        </a> </div>
            <div class="grid-item listing-effect VectorDesign Construction work"> <a href="images/pf2.jpg" title="Portfolio Title -2"> <img src="images/pf2.jpg" alt="Civil Engineer">
              <div class="work-detail">
              <h3 class="project-title mb_10">Projects Title - 02</h3>
              <div class="meta-title">Construction work</div>
            </div>
        </a> </div>
            <div class="grid-item listing-effect VectorDesign Construction work"> <a href="images/pf2.jpg" title="Portfolio Title -2"> <img src="images/pf2.jpg" alt="Civil Engineer">
              <div class="work-detail">
              <h3 class="project-title mb_10">Projects Title - 02</h3>
              <div class="meta-title">Construction work</div>
            </div>
        </a> </div>
            <div class="grid-item listing-effect VectorDesign Construction work"> <a href="images/pf2.jpg" title="Portfolio Title -2"> <img src="images/pf2.jpg" alt="Civil Engineer">
              <div class="work-detail">
              <h3 class="project-title mb_10">Projects Title - 02</h3>
              <div class="meta-title">Construction work</div>
            </div>
        </a> </div>
            <div class="grid-item listing-effect VectorDesign Construction work"> <a href="images/pf2.jpg" title="Portfolio Title -2"> <img src="images/pf2.jpg" alt="Civil Engineer">
              <div class="work-detail">
              <h3 class="project-title mb_10">Projects Title - 02</h3>
              <div class="meta-title">Construction work</div>
            </div>
        </a> </div>
            <div class="grid-item listing-effect VectorDesign Construction work"> <a href="images/pf2.jpg" title="Portfolio Title -2"> <img src="images/pf2.jpg" alt="Civil Engineer">
              <div class="work-detail">
              <h3 class="project-title mb_10">Projects Title - 02</h3>
              <div class="meta-title">Construction work</div>
            </div>
        </a> </div>
  </div>
</div>`;
const page10Content = `<div class="about-text ">
<div class="about-heading-wrap">
  <h2 class="main_title about-heading mtb_20 pb_20 wow fadeInUp" data-wow-delay=".2s">Water Injection Systems</h2>
    <h3 class="mb_20 wow fadeInUp" data-wow-delay=".2s">For non-Dry Low Emissions (DLE) turbines without 
                                                        a NOx abatement system, a water injection system can be added to lower NOx emissions. 
                                                        This system injects demineralized water into the combustor flames temperature and low NOx emissions. 
                                                        By cooling combustion processes and preventing knocking, water injection 
                                                        systems enable higher compression ratios and advanced ignition timing, resulting 
                                                        in improved fuel economy and performance, particularly in 
                                                        high-performance and turbocharged engines.
    </h3>
</div>
<div class="grid wow fadeInUp" data-wow-delay=".4s">
    <div class="isotope three-col-work ">
          <div class="grid-item listing-effect VectorDesign Construction work"> <a href="images/pf2.jpg" title="Portfolio Title -2"> <img src="images/pf2.jpg" alt="Civil Engineer">
              <div class="work-detail">
              <h3 class="project-title mb_10">Projects Title - 02</h3>
              <div class="meta-title">Construction work</div>
            </div>
        </a> </div>
            <div class="grid-item listing-effect VectorDesign Construction work"> <a href="images/pf2.jpg" title="Portfolio Title -2"> <img src="images/pf2.jpg" alt="Civil Engineer">
              <div class="work-detail">
              <h3 class="project-title mb_10">Projects Title - 02</h3>
              <div class="meta-title">Construction work</div>
            </div>
        </a> </div>
            <div class="grid-item listing-effect VectorDesign Construction work"> <a href="images/pf2.jpg" title="Portfolio Title -2"> <img src="images/pf2.jpg" alt="Civil Engineer">
              <div class="work-detail">
              <h3 class="project-title mb_10">Projects Title - 02</h3>
              <div class="meta-title">Construction work</div>
            </div>
        </a> </div>
            <div class="grid-item listing-effect VectorDesign Construction work"> <a href="images/pf2.jpg" title="Portfolio Title -2"> <img src="images/pf2.jpg" alt="Civil Engineer">
              <div class="work-detail">
              <h3 class="project-title mb_10">Projects Title - 02</h3>
              <div class="meta-title">Construction work</div>
            </div>
        </a> </div>
            <div class="grid-item listing-effect VectorDesign Construction work"> <a href="images/pf2.jpg" title="Portfolio Title -2"> <img src="images/pf2.jpg" alt="Civil Engineer">
              <div class="work-detail">
              <h3 class="project-title mb_10">Projects Title - 02</h3>
              <div class="meta-title">Construction work</div>
            </div>
        </a> </div>
            <div class="grid-item listing-effect VectorDesign Construction work"> <a href="images/pf2.jpg" title="Portfolio Title -2"> <img src="images/pf2.jpg" alt="Civil Engineer">
              <div class="work-detail">
              <h3 class="project-title mb_10">Projects Title - 02</h3>
              <div class="meta-title">Construction work</div>
            </div>
        </a> </div>
  </div>
</div>`;
const page11Content = `<div class="about-text ">
<div class="about-heading-wrap">
  <h2 class="main_title about-heading mtb_20 pb_20 wow fadeInUp" data-wow-delay=".2s">Gland Steam Condensers</h2>
        <h3 class="mb_20 wow fadeInUp" data-wow-delay=".2s">Gland steam condensers offer 
                                                            efficient thermal management in power plants and maintains a sub atmospheric pressure 
                                                            at the outmost leak off belt of the glands by condensing steam leaks from turbine glands, 
                                                            thereby preventing leakage of steam to the atmosphere, minimize water consumption, 
                                                            enhance turbine efficiency, and conserve resources. These systems also prevent air ingress, 
                                                            reducing corrosion and improving overall plant performance and reliability.</h3>
</div>
<div class="grid-item listing-effect illustration webdesign"> <a href="images/pf1.jpg" title="Portfolio Title -1"> <img src="images/pf1.jpg" alt="Civil Engineer">
<div class="grid wow fadeInUp" data-wow-delay=".4s">
    <div class="isotope three-col-work ">
          <div class="grid-item listing-effect VectorDesign Construction work"> <a href="images/pf2.jpg" title="Portfolio Title -2"> <img src="images/pf2.jpg" alt="Civil Engineer">
              <div class="work-detail">
              <h3 class="project-title mb_10">Projects Title - 02</h3>
              <div class="meta-title">Construction work</div>
            </div>
        </a> </div>
            <div class="grid-item listing-effect VectorDesign Construction work"> <a href="images/pf2.jpg" title="Portfolio Title -2"> <img src="images/pf2.jpg" alt="Civil Engineer">
              <div class="work-detail">
              <h3 class="project-title mb_10">Projects Title - 02</h3>
              <div class="meta-title">Construction work</div>
            </div>
        </a> </div>
            <div class="grid-item listing-effect VectorDesign Construction work"> <a href="images/pf2.jpg" title="Portfolio Title -2"> <img src="images/pf2.jpg" alt="Civil Engineer">
              <div class="work-detail">
              <h3 class="project-title mb_10">Projects Title - 02</h3>
              <div class="meta-title">Construction work</div>
            </div>
        </a> </div>
            <div class="grid-item listing-effect VectorDesign Construction work"> <a href="images/pf2.jpg" title="Portfolio Title -2"> <img src="images/pf2.jpg" alt="Civil Engineer">
              <div class="work-detail">
              <h3 class="project-title mb_10">Projects Title - 02</h3>
              <div class="meta-title">Construction work</div>
            </div>
        </a> </div>
            <div class="grid-item listing-effect VectorDesign Construction work"> <a href="images/pf2.jpg" title="Portfolio Title -2"> <img src="images/pf2.jpg" alt="Civil Engineer">
              <div class="work-detail">
              <h3 class="project-title mb_10">Projects Title - 02</h3>
              <div class="meta-title">Construction work</div>
            </div>
        </a> </div>
            <div class="grid-item listing-effect VectorDesign Construction work"> <a href="images/pf2.jpg" title="Portfolio Title -2"> <img src="images/pf2.jpg" alt="Civil Engineer">
              <div class="work-detail">
              <h3 class="project-title mb_10">Projects Title - 02</h3>
              <div class="meta-title">Construction work</div>
            </div>
        </a> </div>
  </div>
</div>`;
const page12Content = `<div class="about-text ">
<div class="about-heading-wrap">
  <h2 class="main_title about-heading mtb_20 pb_20 wow fadeInUp" data-wow-delay=".2s">Stator Winding Cooling Systems</h2>
      <h3 class="mb_20 wow fadeInUp" data-wow-delay=".2s">
                Stephania Support Services Ltd. 
                in conjuction with Flenco Engineers cooling system is designed 
                to provide water free from oxygen to avoid corrosion in the system. 
                The circuit is sealed from atmosphere and under a constant hydrogen overpressure. 
                Water is circulated in a closed-circuit system through 
                hollow conductors in stator winding bars. 
      </h3>
</div>
<div class="grid wow fadeInUp" data-wow-delay=".4s">
    <div class="isotope three-col-work ">
          <div class="grid-item listing-effect VectorDesign Construction work"> <a href="images/pf2.jpg" title="Portfolio Title -2"> <img src="images/pf2.jpg" alt="Civil Engineer">
              <div class="work-detail">
              <h3 class="project-title mb_10">Projects Title - 02</h3>
              <div class="meta-title">Construction work</div>
            </div>
        </a> </div>
            <div class="grid-item listing-effect VectorDesign Construction work"> <a href="images/pf2.jpg" title="Portfolio Title -2"> <img src="images/pf2.jpg" alt="Civil Engineer">
              <div class="work-detail">
              <h3 class="project-title mb_10">Projects Title - 02</h3>
              <div class="meta-title">Construction work</div>
            </div>
        </a> </div>
            <div class="grid-item listing-effect VectorDesign Construction work"> <a href="images/pf2.jpg" title="Portfolio Title -2"> <img src="images/pf2.jpg" alt="Civil Engineer">
              <div class="work-detail">
              <h3 class="project-title mb_10">Projects Title - 02</h3>
              <div class="meta-title">Construction work</div>
            </div>
        </a> </div>
          <h3 class="mb_20 wow fadeInUp" data-wow-delay=".2s">
                We maintain optimal temperatures in generators, motors, wind turbines, 
                and hydroelectric stations, preventing overheating. Applications range 
                from power plants to steel mills, high-speed rail, nuclear plants, 
                marine propulsion, and data centers. These systems enhance equipment longevity, 
                efficiency, and safety by dissipating heat and preventing insulation breakdown, 
                guaranteeing continuous, high-performance operation in demanding environments.
        </h3>
        </div>
        <div class="grid wow fadeInUp" data-wow-delay=".4s">
    <div class="isotope three-col-work ">
          <div class="grid-item listing-effect VectorDesign Construction work"> <a href="images/pf2.jpg" title="Portfolio Title -2"> <img src="images/pf2.jpg" alt="Civil Engineer">
              <div class="work-detail">
              <h3 class="project-title mb_10">Projects Title - 02</h3>
              <div class="meta-title">Construction work</div>
            </div>
        </a> </div>
            <div class="grid-item listing-effect VectorDesign Construction work"> <a href="images/pf2.jpg" title="Portfolio Title -2"> <img src="images/pf2.jpg" alt="Civil Engineer">
              <div class="work-detail">
              <h3 class="project-title mb_10">Projects Title - 02</h3>
              <div class="meta-title">Construction work</div>
            </div>
        </a> </div>
            <div class="grid-item listing-effect VectorDesign Construction work"> <a href="images/pf2.jpg" title="Portfolio Title -2"> <img src="images/pf2.jpg" alt="Civil Engineer">
              <div class="work-detail">
              <h3 class="project-title mb_10">Projects Title - 02</h3>
              <div class="meta-title">Construction work</div>
            </div>
        </a> </div>
        </div>
</div>`;
const page13Content = `<div class="about-text ">
<div class="about-heading-wrap">
  <h2 class="main_title about-heading mtb_20 pb_20 wow fadeInUp" data-wow-delay=".2s">Gas Dryers</h2>
      <h3 class="mb_20 wow fadeInUp" data-wow-delay=".2s">
              Our Hydrogen cooling systems offer exceptional heat transfer and insulation properties, 
              ideal for cooling high-power generators and transformers. They enhance efficiency, 
              extend equipment lifespan, and reduce size and weight. Moreover, hydrogen's low density 
              minimizes windage losses, contributing to overall energy savings in power generation applications.
      </h3>
      <h3 class="mb_20 wow fadeInUp" data-wow-delay=".2s">
              Stephania Support Systems Ltd. in conjunction with Flenco Engineers 
              gas cooling system is able to cool by filling the generator with hydrogen, 
              maintain under pressure, check the gas purity and evacuate it. 
              To prevent the formation of explosive gas mixtures, the air in the generator 
              is expelled with CO2 prior to fill with hydrogen.
      </h3>
</div>
<div class="grid wow fadeInUp" data-wow-delay=".4s">
    <div class="isotope three-col-work ">
          <div class="grid-item listing-effect VectorDesign Construction work"> <a href="images/pf2.jpg" title="Portfolio Title -2"> <img src="images/pf2.jpg" alt="Civil Engineer">
              <div class="work-detail">
              <h3 class="project-title mb_10">Projects Title - 02</h3>
              <div class="meta-title">Construction work</div>
            </div>
        </a> </div>
            <div class="grid-item listing-effect VectorDesign Construction work"> <a href="images/pf2.jpg" title="Portfolio Title -2"> <img src="images/pf2.jpg" alt="Civil Engineer">
              <div class="work-detail">
              <h3 class="project-title mb_10">Projects Title - 02</h3>
              <div class="meta-title">Construction work</div>
            </div>
        </a> </div>
            <div class="grid-item listing-effect VectorDesign Construction work"> <a href="images/pf2.jpg" title="Portfolio Title -2"> <img src="images/pf2.jpg" alt="Civil Engineer">
              <div class="work-detail">
              <h3 class="project-title mb_10">Projects Title - 02</h3>
              <div class="meta-title">Construction work</div>
            </div>
        </a> </div>
</div>`;
const page14Content = `<div class="about-text ">
<div class="about-heading-wrap">
  <h2 class="main_title about-heading mtb_20 pb_20 wow fadeInUp" data-wow-delay=".2s">Containerized Turn-Key Solutions</h2>
    <h3 class="mb_20 wow fadeInUp" data-wow-delay=".2s">
            Our plug and play pre-packaged solutions, fitted into the ISO framework; 
            the modular design allows smart time saving solutions, reduces transportation costs, 
            enhances use in remote areas. This design significantly decreases field assembly time 
            and process since only minimal piping and electrical connections are required once the 
            containers are available at the work site. 
    </h3>
</div>
<div class="grid-item listing-effect webdesign illustration Construction work"> <a href="images/pf8.jpg" title="Portfolio Title -8"> <img src="images/pf8.jpg" alt="Civil Engineer">
              <div class="work-detail">
                <h3 class="project-title mb_10">Projects Title - 08</h3>
                <div class="meta-title">Construction work</div>
              </div>
              </a> </div>
              <h3 class="mb_20 wow fadeInUp" data-wow-delay=".2s">
              Our Containerized Turn-key solutions allows for rapid setup of remote base stations, 
              control centers, on-site offices, restrooms, and storage solutions. These solutions 
              expedite deployment, reduce costs, and provide flexibility across industries, meeting 
              required standards with minimal setup time.
      </h3>
              
</div>`;
const page15Content = `<div class="about-text ">
<div class="about-heading-wrap">
  <h2 class="main_title about-heading mtb_20 pb_20 wow fadeInUp" data-wow-delay=".2s">Pressure Vessels</h2>
  <div class="grid-item listing-effect illustration webdesign"> <a href="images/pf1a.jpg" title="Portfolio Title -1"> <img src="images/pf1a.jpg" alt="Engineering"></a></div>
    <h3 class="mb_20 wow fadeInUp" data-wow-delay=".2s">
          Pressure vessels are containers designed to hold gases and liquids at a pressure 
          substancially different from ambient pressure; in our production rage we offer accumulators, 
          separators, filters, pressurized tanks, coolers, pulsation dampers according to PED or ASME standards. 
          Applicable for storage, reactions, sterilization and transportation of compressed gases, 
          liquefied petroleum gas (LPG), boilers, steam generators, coolants and compressed air.
    </h3>
</div>
</div>`;
const page16Content = `<div class="about-text ">
<div class="about-heading-wrap">
  <h2 class="main_title about-heading mtb_20 pb_20 wow fadeInUp" data-wow-delay=".2s">Dosing, Metering and Chemical Systems</h2>
  <h3 class="mb_20 wow fadeInUp" data-wow-delay=".2s">
  Stephania Support Services packages and takes full functional responsibility of complete dosing pump systems used to precisely control the flow of liquids, chemicals, for large and small volumes for inhibition, polyelectrolyte, coagulant, flocculation, disinfection, pH adjustment and other applications. As partners of leading pump manufactures, we do not compromise on the quality of the main equipment. Applicable in well treatment, corrosion inhibition and flow assurance.
</h3>
</div>
<div class="grid-item listing-effect illustration webdesign"> <a href="images/pf1a.jpg" title="Portfolio Title -1"> <img src="images/pf1a.jpg" alt="Engineering"></a></div>
<div class="grid-item listing-effect illustration webdesign"> <a href="images/pf1a.jpg" title="Portfolio Title -1"> <img src="images/pf1a.jpg" alt="Engineering"></a></div>
</div>`;
const page17Content = `<div class="about-text ">
<div class="about-heading-wrap">
  <h2 class="main_title about-heading mtb_20 pb_20 wow fadeInUp" data-wow-delay=".2s">Balance of Plants (BOP) </h2>
    <h3 class="mb_20 wow fadeInUp" data-wow-delay=".2s">
          Stephania Support Services Ltd. in collaboration with Flenco Engineers 
          designs and produces different types of modules and tailor-made skid solutions. 
          A module may be integrated modular skid. It is self-contained system designed to 
          meet functional requirements in a cost-effective manner incorporating the required mechanical equipment, 
          valves, controls, piping, wiring and other components onto a single structural base.
    </h3>
</div>
                <div class="grid-item listing-effect webdesign illustration Construction work"> <a href="images/pf8.jpg" title="Portfolio Title -8"> <img src="images/pf8.jpg" alt="Civil Engineer"></a></div>
                  <p class=" wow fadeInUp" data-wow-delay=".3s">
                      <ul class="box-category"></br>
                      <li>• Air Separation/Air Cooler/Air Generator/Control Air Package</li>
                      <li>• Chemical Injection and Dosing Packages</li>
                      <li>• Cooling Water Skid/Cooling Water Pump Skid</li>
                      <li>• Containerized Gas Fuel System</li>
                      <li>• Diesel Oil Forwarding Pump Skid</li>
                      <li>• Diesel/Distillate Oil Filtering & Metering Skid</li>
                      <li>• Fuel Gas Package</li>
                      <li>• Fuel Treatment Skid</li>
                      <li>• Gas Fuel Electric Heater Skid</li>
                      <li>• Gland Steam Double Filter</li>
                      <li>• Heating Skid</li>
                      <li>• Hot Water/Waste Water Package</li>
                      <li>• Inhibitor Injection Skid</li>
                      <li>• Light/Heavy Oil/LF Oil Filtering & Forwarding Skid</li>
                      <li>• Seal Oil Recovery Package</li>
                      <li>• Super Heater Tube Assembly</li>
                      <li>• Water Injection Package</li>
                      </ul>
                </p>
</div>`;
const page18Content = `<div class="about-text ">
<div class="about-heading-wrap">
  <h2 class="main_title about-heading mtb_20 pb_20 wow fadeInUp" data-wow-delay=".2s">Spare Parts</h2>
      <h3 class="mb_20 wow fadeInUp" data-wow-delay=".2s">
              Stephania Support Services Ltd. in conjunction with Flenco Engineers provides 
              technical definition and sourcing of capital & commissioning spare parts supplied 
              with main system, repairable and consumable parts to face temporary failures or 
              maintenance overhauls for any kind of auxiliary systems.
      </h3>
</div>
<div class="grid-item listing-effect VectorDesign Construction work"> <a href="images/pf2.jpg" title="Portfolio Title -2"> <img src="images/pf2.jpg" alt="Civil Engineer">
<div class="work-detail">
<h3 class="project-title mb_10">Projects Title - 02</h3>
<div class="meta-title">Construction work</div>
</div>
</a> </div>
<div class="grid-item listing-effect VectorDesign Construction work"> <a href="images/pf2.jpg" title="Portfolio Title -2"> <img src="images/pf2.jpg" alt="Civil Engineer">
<div class="work-detail">
<h3 class="project-title mb_10">Projects Title - 02</h3>
<div class="meta-title">Construction work</div>
</div>
</a> </div>
<div class="grid-item listing-effect VectorDesign Construction work"> <a href="images/pf2.jpg" title="Portfolio Title -2"> <img src="images/pf2.jpg" alt="Civil Engineer">
<div class="work-detail">
<h3 class="project-title mb_10">Projects Title - 02</h3>
<div class="meta-title">Construction work</div>
</div>
</a> </div>  
</div>`;
const page19Content = `<div class="about-text ">
<div class="about-heading-wrap">
  <h2 class="main_title about-heading mtb_20 pb_20 wow fadeInUp" data-wow-delay=".2s">Revamping and Retrofit</h2>
      <h3 class="mb_20 wow fadeInUp" data-wow-delay=".2s">
            Upgrade of existing systems with up to date technology to improve performances, 
            efficiency and functionalily, to extend lifespan of the equipment, save maintenance 
            costs and resources, comply with new regulations and to keep low or even reduce environmental 
            impacts. It improves the sustainability without the need for complete replacement.
      </h3>
</div>
<div class="grid wow fadeInUp" data-wow-delay=".4s">
    <div class="isotope three-col-work ">
          <div class="grid-item listing-effect VectorDesign Construction work"> <a href="images/pf2.jpg" title="Portfolio Title -2"> <img src="images/pf2.jpg" alt="Civil Engineer">
              <div class="work-detail">
              <h3 class="project-title mb_10">Projects Title - 02</h3>
              <div class="meta-title">Construction work</div>
            </div>
        </a> </div>
            <div class="grid-item listing-effect VectorDesign Construction work"> <a href="images/pf2.jpg" title="Portfolio Title -2"> <img src="images/pf2.jpg" alt="Civil Engineer">
              <div class="work-detail">
              <h3 class="project-title mb_10">Projects Title - 02</h3>
              <div class="meta-title">Construction work</div>
            </div>
        </a> </div>
            <div class="grid-item listing-effect VectorDesign Construction work"> <a href="images/pf2.jpg" title="Portfolio Title -2"> <img src="images/pf2.jpg" alt="Civil Engineer">
              <div class="work-detail">
              <h3 class="project-title mb_10">Projects Title - 02</h3>
              <div class="meta-title">Construction work</div>
            </div>
        </a> </div>
            <div class="grid-item listing-effect VectorDesign Construction work"> <a href="images/pf2.jpg" title="Portfolio Title -2"> <img src="images/pf2.jpg" alt="Civil Engineer">
              <div class="work-detail">
              <h3 class="project-title mb_10">Projects Title - 02</h3>
              <div class="meta-title">Construction work</div>
            </div>
        </a> </div>
            <div class="grid-item listing-effect VectorDesign Construction work"> <a href="images/pf2.jpg" title="Portfolio Title -2"> <img src="images/pf2.jpg" alt="Civil Engineer">
              <div class="work-detail">
              <h3 class="project-title mb_10">Projects Title - 02</h3>
              <div class="meta-title">Construction work</div>
            </div>
        </a> </div>
            <div class="grid-item listing-effect VectorDesign Construction work"> <a href="images/pf2.jpg" title="Portfolio Title -2"> <img src="images/pf2.jpg" alt="Civil Engineer">
              <div class="work-detail">
              <h3 class="project-title mb_10">Projects Title - 02</h3>
              <div class="meta-title">Construction work</div>
            </div>
        </a> </div>
  </div>
</div>`;
const page20Content = `<div class="about-text ">
<div class="about-heading-wrap">
  <h2 class="main_title about-heading mtb_20 pb_20 wow fadeInUp" data-wow-delay=".2s">Onshore Construction</h2>
      <h3 class="mb_20 wow fadeInUp" data-wow-delay=".2s">
          At Stephania Support Services Ltd , we provide onshore construction services, 
          including pipeline laying projects, structural replacement, equipment replacement, 
          and cables replacement principally to the oil and gas industries. In conjunction with 
          select competent company investments, we also provide innovative solutions, including 
          upgrading obsolete structures relating to Liquefied Natural Gas (LNG), oil pipelines, 
          gas pipelines, and drilling for onshore projects.
    </h3>
</div>
<div class="grid-item listing-effect webdesign illustration Construction work"> <a href="images/pf8.jpg" title="Portfolio Title -8"> <img src="images/pf8.jpg" alt="Civil Engineer">
              <div class="work-detail">
                <h3 class="project-title mb_10">Projects Title - 08</h3>
                <div class="meta-title">Construction work</div>
              </div>
              </a> </div>
      <h3 class="mb_20 wow fadeInUp" data-wow-delay=".2s">
            Our specialist engineers leverage their expertise and experience in delivering 
            minor and complex projects in challenging and diverse environments. Our engineers 
            are trained to handle different types of tools, machinery and equipment for projects 
            whether these developments are greenfield, brownfield, onshore, and downstream. 
            As a company, we prioritize the safety of our workers, clients and visitors. 
            And so, we take  complete care in ensuring that all our projects are 
            delivered to meet the highest standards of safety. 
      </h3>
      <h3 class="mb_20 wow fadeInUp" data-wow-delay=".2s">
            Quality, a watchword at Stephania Support Services Ltd encompasses every activity we undertake, 
            from initial receipt of client enquiry through to contract completion. All our services are rendered 
            to the highest possible standards in compliance with the relevant regulations and legislation. 
            Depending on the scale of the projects, we provide experienced and competent workers ready 
            to provide onshore support. 
      </h3>
      <div class="grid wow fadeInUp" data-wow-delay=".4s">
      <div class="isotope three-col-work ">
            <div class="grid-item listing-effect VectorDesign Construction work"> <a href="images/pf2.jpg" title="Portfolio Title -2"> <img src="images/pf2.jpg" alt="Civil Engineer">
                <div class="work-detail">
                <h3 class="project-title mb_10">Projects Title - 02</h3>
                <div class="meta-title">Construction work</div>
              </div>
          </a> </div>
              <div class="grid-item listing-effect VectorDesign Construction work"> <a href="images/pf2.jpg" title="Portfolio Title -2"> <img src="images/pf2.jpg" alt="Civil Engineer">
                <div class="work-detail">
                <h3 class="project-title mb_10">Projects Title - 02</h3>
                <div class="meta-title">Construction work</div>
              </div>
          </a> </div>
              <div class="grid-item listing-effect VectorDesign Construction work"> <a href="images/pf2.jpg" title="Portfolio Title -2"> <img src="images/pf2.jpg" alt="Civil Engineer">
                <div class="work-detail">
                <h3 class="project-title mb_10">Projects Title - 02</h3>
                <div class="meta-title">Construction work</div>
              </div>
          </a> </div>
    <h3 class="mb_20 wow fadeInUp" data-wow-delay=".2s">
              As part of our quality assurance, we make sure that each project undergoes an 
              extensive inspection and documentation process to minimize post-installation 
              problems and satisfy your exact project specifications and tolerances. To find out 
              how we can help you deliver your onshore construction projects, click the button 
              below to contact our experts or contact us via any of the channels on the contact 
              page of this document.
    </h3>
</div>`;
const page21Content = `<div class="about-text ">
<div class="about-heading-wrap">
  <h2 class="main_title about-heading mtb_20 pb_20 wow fadeInUp" data-wow-delay=".2s">Offshore Construction</h2>
    <h3 class="mb_20 wow fadeInUp" data-wow-delay=".2s">
        At Stephania Support Services Ltd we are equipped to work on construction projects offshore. 
        Whether stand-alone or a full package projects, our team of experts bring their wealth of 
        technical experience and expertise to supply a full engineering service including fabrication, 
        installation and insulation of all types of pipework systems, vessels and structures.
    </h3>
    <h3 class="mb_20 wow fadeInUp" data-wow-delay=".2s">
        We have extensive experience in the fabrication and installation of pipework for Gas, 
        Compressed Air, Water, Pneumatic, Hydraulic, Steam, Utilities, Process, Ventilation Ducting, 
        Pipeline. Our extensive knowledge of the piping equips us to fabricate and supply pipe 
        fabrications in carbon steel, stainless-steel pipe, copper, Poly Vinyl Chloride (PVC), 
        Unplasticised Polyvinyl Chloride (UPVC) and Acrylonitrile Butadiene Styrene (ABS).
    </h3>
    <h3 class="mb_20 wow fadeInUp" data-wow-delay=".2s">
        Quality at Stephania Support Services Ltd encompasses every activity we undertake, 
        from initial receipt of client enquiry through to contract completion. All our welding 
        and fabrication are completed to the highest possible standards in compliance with all 
        relevant regulations and legislation. Our pipe fitters, fabricators and welders collaborate 
        with your team to accomplish the finest possible outcome that satisfies your project needs.
    </h3>
    <h3 class="mb_20 wow fadeInUp" data-wow-delay=".2s">
        As part of our quality assurance, we make sure that each work undergoes an extensive inspection 
        and documentation process to minimize post-installation problems and satisfy your exact project 
        specifications and tolerances. To find out how we can help you deliver your off-shore construction 
        projects, click the button below to contact our experts or contact us via any of the channels on 
        the contact page of this document.
    </h3>
</div>

<div class="grid-item listing-effect illustration webdesign"> <a href="images/pf1a.jpg" title="Portfolio Title -1"> <img src="images/pf1a.jpg" alt="Engineering"></a></div>

</div>`;
const page22Content = `<div class="about-text ">
<div class="about-heading-wrap">
  <h2 class="main_title about-heading mtb_20 pb_20 wow fadeInUp" data-wow-delay=".2s">Oil & Gas Engineering</h2>
      <h3 class="mb_20 wow fadeInUp" data-wow-delay=".2s">
            At Stephania Support Services Ltd in conjunction with Flenco Engineers, testing, 
            inspection and commissioning of gas turbines are at the forefront of the innovative 
            engineering services that we offer to the global Oil and Gas sector. We carry out a 
            complete unit inspection and testing for the integrated functionality and sequences 
            of all the auxiliary systems for gas turbines, steam turbines, compressors, 
            motors and compressor packages.
      </h3>
      <h3 class="mb_20 wow fadeInUp" data-wow-delay=".2s">
            Each testing is performed meticulously to validate that the mechanical integrity 
            and performance load levels of every component are operating as expected within 
            the acceptable parameters and in compliance with the applicable international 
            codes and standards.
      </h3>
      <h3 class="mb_20 wow fadeInUp" data-wow-delay=".2s">
            In conjunction with FLENCO FLUID SYSTEMS, we carry out Balance of Plants (BOP) 
            for all the systems that are not strictly linked to the turbine and compressors 
            and that are skid mounted like Fuel Treatment Skid, Super Heater Tube Assembly, 
            Gas Fuel Electric Heater Skid, Gland Steam Double Filter, Air Separation, Air Cooler,
             Air Generator, Control Air Package, Chemical Injection and Dosing Packages, Fuel Gas 
             Package, Water Injection Package, Hot Water, Waste Water Package, Cooling Water Skid, 
             Cooling Water pump Skid, Seal Oil Recovery Package, Diesel Oil Forwarding pump Skid, 
             Containerized Gas Fuel System, Diesel, Distillate Oil Filtering and Metering Skid, 
             Light, Heavy Oil, LF Oil Filtering and Forwarding Skid, Heating Skid, Inhibitor 
             Injection Skid and much more.
      </h3>
      <h3 class="mb_20 wow fadeInUp" data-wow-delay=".2s">
              From commissioning with site fuel gas to using liquid fuel for dual fuel gas turbines, 
              we've got the engineering competence to execute and deliver this type of projects professionally. 
              We also supply fluid dependant machinery and implement systems that transport fluids. 
              Whatever fluid engineering your project entails, we are trusted by many of our clients 
              to deliver quality with success. In addition, we supply flexible bellows and expansion joints.
      </h3>
</div>
<div class="grid-item listing-effect illustration webdesign"> <a href="images/pf1.jpg" title="Portfolio Title -1"> <img src="images/pf1.jpg" alt="Engineering"></a></div>
  
</div>`;
const page23Content = `<div class="about-text ">
<div class="about-heading-wrap">
  <h2 class="main_title about-heading mtb_20 pb_20 wow fadeInUp" data-wow-delay=".2s">Mechanical Engineering</h2>
  <h3 class="mb_20 wow fadeInUp" data-wow-delay=".2s">
          Stephania Support Services Ltd offers an extensive range of advanced bespoke 
          engineering services to solve problems associated with mechanical engineering 
          within the Petroleum, Construction, and Oil and Gas sector worldwide. 
          We have a team of expert engineers specialised in mechanical inspection 
          and installation of both fabricated and pre-manufactured systems including Pipes, 
          Cranes and Lifting Equipment. We also carry out routine maintenance and repairs 
          for Hydraulic Systems, Pneumatic Systems and Electric Motors.
    </h3>
    <div class="grid wow fadeInUp" data-wow-delay=".4s">
    <div class="isotope three-col-work ">
          <div class="grid-item listing-effect VectorDesign Construction work"> <a href="images/pf2.jpg" title="Portfolio Title -2"> <img src="images/pf2.jpg" alt="Civil Engineer">
              <div class="work-detail">
              <h3 class="project-title mb_10">Projects Title - 02</h3>
              <div class="meta-title">Construction work</div>
            </div>
        </a> </div>
            <div class="grid-item listing-effect VectorDesign Construction work"> <a href="images/pf2.jpg" title="Portfolio Title -2"> <img src="images/pf2.jpg" alt="Civil Engineer">
              <div class="work-detail">
              <h3 class="project-title mb_10">Projects Title - 02</h3>
              <div class="meta-title">Construction work</div>
            </div>
        </a> </div>
            <div class="grid-item listing-effect VectorDesign Construction work"> <a href="images/pf2.jpg" title="Portfolio Title -2"> <img src="images/pf2.jpg" alt="Civil Engineer">
              <div class="work-detail">
              <h3 class="project-title mb_10">Projects Title - 02</h3>
              <div class="meta-title">Construction work</div>
            </div>
        </a> </div>
  <h3 class="mb_20 wow fadeInUp" data-wow-delay=".2s">
  <div class="grid-item listing-effect webdesign illustration Construction work"> <a href="images/pf8.jpg" title="Portfolio Title -8"> <img src="images/pf8.jpg" alt="Civil Engineer">
              <div class="work-detail">
                <h3 class="project-title mb_10">Projects Title - 08</h3>
                <div class="meta-title">Construction work</div>
              </div>
              </a> </div>
          As part of our services, we perform initial assessments to identify your needs 
          and facilities required. Additionally, as part of our quality assurance procedure, 
          for all our services, we carry out verification testing to ensure that the system is 
          well-engineered, free of errors, and of high quality.
    </h3>
    
  <h3 class="mb_20 wow fadeInUp" data-wow-delay=".2s">
          We provide training to ensure that your workers and machinists operate the systems efficiently. 
          We also procure and supply spare parts for different types of machinery and systems. 
          For up-to-date information on the availability of equipment, tools and materials that we supply, 
          please click the button below to ask our experts or contact us via any of the channels on the 
          contact page of this document.
    </h3>
</div>
</div>`;
const page24Content = `<div class="about-text ">
<div class="about-heading-wrap">
  <h2 class="main_title about-heading mtb_20 pb_20 wow fadeInUp" data-wow-delay=".2s">Civil Engineering</h2>
  <h3 class="mb_20 wow fadeInUp" data-wow-delay=".2s">
    <div class="grid-item listing-effect webdesign illustration Construction work"> <a href="images/pf8.jpg" title="Portfolio Title -8"> <img src="images/pf8.jpg" alt="Civil Engineer">
              <div class="work-detail">
                <h3 class="project-title mb_10">Projects Title - 08</h3>
                <div class="meta-title">Construction work</div>
              </div>
              </a> </div>
              Stephania Support Services Ltd has earned its reputation as a trusted supplier of civil engineering 
              services nationwide. From minor renovations to major infrastructure projects, we are recognized for 
              using our extensive range of experience and expertise in delivering cost-efficient civil engineering 
              service packages to our clients in the Oil, Gas, Construction, Water Utilities and Transportation sectors.
    </h3>
  
  <h3 class="mb_20 wow fadeInUp" data-wow-delay=".2s">
              Working in close partnership with selected reputable suppliers, Stephania Support Services Ltd provides an 
              extensive range of services including, but not limited to, building works for pumping stations, Helipad, Jetty, 
              tank farms, block valve stations, hydraulic protection, retaining wall, masonry structure, gabion stone cage, 
              pipe racks, pipe-borne water construction, sewer and irrigation systems design, water treatment, and wastewater 
              removal.
  </h3>
  <h3 class="mb_20 wow fadeInUp" data-wow-delay=".2s">
    <div class="grid-item listing-effect webdesign illustration Construction work"> <a href="images/pf8.jpg" title="Portfolio Title -8"> <img src="images/pf8.jpg" alt="Civil Engineer">
              <div class="work-detail">
                <h3 class="project-title mb_10">Projects Title - 08</h3>
                <div class="meta-title">Construction work</div>
              </div>
              </a> </div>
              We also specialize in land surveying, structural planning, structural design, structural drafting, structural building, 
              infrastructure management, land development including site grading, drainage, site utility, site paving, 
              highway and roadways.
    </h3>
  <h3 class="mb_20 wow fadeInUp" data-wow-delay=".2s">
              Our engineers are highly trained to handle different types of tools, machinery and equipment for projects whether 
              these developments are greenfield or brownfield. As a company, we value the safety of our workers, clients and visitors. 
              And so, we take complete care in ensuring that all our projects are delivered to meet the highest standards of safety.
  </h3>
  <h3 class="mb_20 wow fadeInUp" data-wow-delay=".2s">
              Quality at Stephania Support Services Ltd encompasses every activity we undertake, from initial receipt of client 
              enquiry through to contract completion. All our services are rendered to the highest possible standards in compliance 
              with the relevant regulations and legislation.
  </h3>
</div>

</div>`;
const page25Content = `<div class="about-text ">
<div class="about-heading-wrap">
  <h2 class="main_title about-heading mtb_20 pb_20 wow fadeInUp" data-wow-delay=".2s">Electrical Engineering</h2>
  <h3 class="mb_20 wow fadeInUp" data-wow-delay=".2s">
          Stephania Support Services Ltd provides electrical services to the Petroleum, Construction, Oil and Gas, 
          Automotive, Heavy Engineering, Electrical & Electronics, and Power Energy industries across the globe. 
          Our expert team of specialist engineers carry out a range of electrical installations on and off-site 
          for both short-term and long-term contracts. Exceeding the individual requirements of each client is at 
          the forefront of what we do. And so, we have a team of electrical expert engineers who are available to 
          support all our clients regardless of location.
</h3>
</div>
<div class="grid-item listing-effect illustration webdesign"> <a href="images/pf1.jpg" title="Portfolio Title -1"> <img src="images/pf1.jpg" alt="Engineering"></a></div>
  <h3 class="mb_20 wow fadeInUp" data-wow-delay=".2s">
  We can offer a complete bespoke Electrical and Instrumentation service in installation, testing, maintenance 
  for both minor and major proiects. The breadth of our capability covers Mains Installations, Power Control, 
  Instrumentation Cabling, Lighting and Power Distribution Systems, Process Electrical Engineering Control Systems, 
  and Data and Voice Cabling Systems.
  </h3>
  <h3 class="mb_20 wow fadeInUp" data-wow-delay=".2s">
  As part of our quality management procedure, we inspect, test and verify all works before project completion to 
  assure our clients that quality requirements are fulfilled. Also, we ensure that all statutory regulations and 
  industry code of practice are followed as part of our compliance policy.
  </h3>
  <div class="grid wow fadeInUp" data-wow-delay=".4s">
    <div class="isotope three-col-work ">
          <div class="grid-item listing-effect VectorDesign Construction work"> <a href="images/pf2.jpg" title="Portfolio Title -2"> <img src="images/pf2.jpg" alt="Civil Engineer">
              <div class="work-detail">
              <h3 class="project-title mb_10">Projects Title - 02</h3>
              <div class="meta-title">Construction work</div>
            </div>
        </a> </div>
            <div class="grid-item listing-effect VectorDesign Construction work"> <a href="images/pf2.jpg" title="Portfolio Title -2"> <img src="images/pf2.jpg" alt="Civil Engineer">
              <div class="work-detail">
              <h3 class="project-title mb_10">Projects Title - 02</h3>
              <div class="meta-title">Construction work</div>
            </div>
        </a> </div>
            <div class="grid-item listing-effect VectorDesign Construction work"> <a href="images/pf2.jpg" title="Portfolio Title -2"> <img src="images/pf2.jpg" alt="Civil Engineer">
              <div class="work-detail">
              <h3 class="project-title mb_10">Projects Title - 02</h3>
              <div class="meta-title">Construction work</div>
            </div>
        </a> </div>
  <h3 class="mb_20 wow fadeInUp" data-wow-delay=".2s">
  We procure and supply spare parts for different types Of electrical systems. For up-to-date information on the 
  availability of equipment, tools and materials that we supply, please click the button below to ask our experts or 
  contact us via any of the channels on the contact page of this document.
  </h3>

</div>`;
const page26Content = `<div class="about-text ">
<div class="about-heading-wrap">
  <h2 class="main_title about-heading mtb_20 pb_20 wow fadeInUp" data-wow-delay=".2s">Ground Engineering</h2>
      <h3 class="mb_20 wow fadeInUp" data-wow-delay=".2s">
            Stephania Support Services Ltd specialises in the delivery of complex ground engineering solutions 
            to industries across the globe including Construction, Oil and Gas and, Petroleum.
      </h3>
      <h3 class="mb_20 wow fadeInUp" data-wow-delay=".2s">
            Our services range from site investigation, construction and infrastructure proiects, renovating and 
            improving road structures, borehole drilling and maintenance and trenching. We have a team of specialist 
            engineers who are available to support all our clients in geo-technical engineering for both minor and 
            technically demanding projects.
            </h3>
      <h3 class="mb_20 wow fadeInUp" data-wow-delay=".2s">
            As part of our quality management process, we inspect, test and verify all works before project 
            completion to assure our clients that quality requirements are fulfilled. Also, we ensure that all statutory 
            regulations and industry code of practice are followed as part of our compliance policy.
      </h3>
      <h3 class="mb_20 wow fadeInUp" data-wow-delay=".2s">
            We procure and supply spare parts and machinery for different types of ground engineering projects. 
            For up-to-date information on the availability of equipment, tools and materials that we supply, 
            please click the button below to ask our experts.
      </h3>
</div>

</div>`;
const page27Content = `<div class="about-text ">
<div class="about-heading-wrap">
  <h2 class="main_title about-heading mtb_20 pb_20 wow fadeInUp" data-wow-delay=".2s">Structural Repairs</h2>
    <h3 class="mb_20 wow fadeInUp" data-wow-delay=".2s">
            Generally, due to age, deterioration, water damage, environmental effects, company error, 
            or inferior building work, buildings often require structural repairs and renovation. 
            At Stephania Support Ltd, we take pride in providing aesthetically pleasing and functional 
            building repair, and rectification works including alterations, retrofitting, refurbishing, 
            redecoration, maintenance, decommissioning, demolition and dismantling. Our experienced and 
            skilled structural repair engineers leverage their expertise to carry out repair works on both 
            commercial and residential buildings project, ensuring that the finished job is aesthetically 
            and functionally acceptable.
    </h3>
</div>
<div class="grid-item listing-effect illustration webdesign"> <a href="images/pf1.jpg" title="Portfolio Title -1"> <img src="images/pf1.jpg" alt="Engineering"></a></div>
    <h3 class="mb_20 wow fadeInUp" data-wow-delay=".2s">
            Our objective is to maintain high standards consistently. Therefore, during the course of 
            our operations, we carry out routine structural analysis to determine the best approach 
            to repairing defective work on the building.
    </h3>
    <h3 class="mb_20 wow fadeInUp" data-wow-delay=".2s">
            As a company, we value the safety of our workers, clients and visitors. And so, we take 
            absolute care in ensuring that all our structural repair works are completed to meet the 
            highest standards of safety. Quality, at Stephania Support Services Ltd encompasses every 
            activity we undertake, from initial receipt of client enquiry through to project completion. 
            All our services are rendered to the highest possible standards in compliance with the 
            relevant regulations and legislation.
    </h3>
    <h3 class="mb_20 wow fadeInUp" data-wow-delay=".2s">
            As part of our quality assurance, we make sure that each work undergoes an extensive inspection 
            and documentation process to minimise post-installation problems and satisfy your exact project 
            specifications and tolerances. 
    </h3>
</div>`;
const page28Content = `<div class="about-text ">
<div class="about-heading-wrap">
  <h2 class="main_title about-heading mtb_20 pb_20 wow fadeInUp" data-wow-delay=".2s">Facilities Maintenance</h2>
    <h3 class="mb_20 wow fadeInUp" data-wow-delay=".2s">
           Stephania Support Services Ltd provides comprehensive facilities' maintenance service to the Retail,
            Industrial and Commercial sectors. This aspect of our service offering differs from structural 
            repairs in that we perform routine activities to prevent damage and prolong the life of appliances, 
            fixtures, furniture, fittings, and the property to slow down deterioration.
    </h3>
    <h3 class="mb_20 wow fadeInUp" data-wow-delay=".2s">
            Using state of the art technology, our facility maintenance service is aimed at keeping facilities in 
            their best condition and helping our clients prevent costly repairs and refurbishments. From industrial 
            cleaning to waste management, we have specialist engineers that are highly trained to carry out their 
            works to strict customer care guidelines, and with minimum disturbance for the property occupants and 
            other services operations.

    </h3>
    <h3 class="mb_20 wow fadeInUp" data-wow-delay=".2s">
    To offer the best suitable service, we carry out an initial assessment of your requirements and create a facilities 
    maintenance solution to meet your needs cost-effectively without compromising on safety and quality. We also ensure 
    that all works are completed to the highest possible standards in compliance with the relevant regulations and legislation.

    </h3>
    <h3 class="mb_20 wow fadeInUp" data-wow-delay=".2s">
    As part of our quality assurance, we make sure that each work undergoes an extensive inspection and documentation 
    process to minimise post-installation problems and satisfy your exact project specifications and tolerances.
    </h3>
</div>

</div>`;

// Event listeners for sidebar links
page1Link.addEventListener('click', () => {
    servicesContent.innerHTML = page1Content;
});

page2Link.addEventListener('click', () => {
    servicesContent.innerHTML = page2Content;
});

page3Link.addEventListener('click', () => {
    servicesContent.innerHTML = page3Content;
});
page4Link.addEventListener('click', () => {
    servicesContent.innerHTML = page4Content;
});

page5Link.addEventListener('click', () => {
    servicesContent.innerHTML = page5Content;
});
page6Link.addEventListener('click', () => {
    servicesContent.innerHTML = page6Content;
});

page7Link.addEventListener('click', () => {
    servicesContent.innerHTML = page7Content;
});
page8Link.addEventListener('click', () => {
    servicesContent.innerHTML = page8Content;
});

page9Link.addEventListener('click', () => {
    servicesContent.innerHTML = page9Content;
});
page10Link.addEventListener('click', () => {
    servicesContent.innerHTML = page10Content;
});

page11Link.addEventListener('click', () => {
    servicesContent.innerHTML = page11Content;
});

page12Link.addEventListener('click', () => {
    servicesContent.innerHTML = page12Content;
});
page13Link.addEventListener('click', () => {
    servicesContent.innerHTML = page13Content;
});

page14Link.addEventListener('click', () => {
    servicesContent.innerHTML = page14Content;
});
page15Link.addEventListener('click', () => {
    servicesContent.innerHTML = page15Content;
});

page16Link.addEventListener('click', () => {
    servicesContent.innerHTML = page16Content;
});
page17Link.addEventListener('click', () => {
    servicesContent.innerHTML = page17Content;
});

page18Link.addEventListener('click', () => {
    servicesContent.innerHTML = page18Content;
});
page19Link.addEventListener('click', () => {
    servicesContent.innerHTML = page19Content;
});

page20Link.addEventListener('click', () => {
    servicesContent.innerHTML = page20Content;
});
page21Link.addEventListener('click', () => {
    servicesContent.innerHTML = page21Content;
});

page22Link.addEventListener('click', () => {
    servicesContent.innerHTML = page22Content;
});
page23Link.addEventListener('click', () => {
    servicesContent.innerHTML = page23Content;
});

page24Link.addEventListener('click', () => {
    servicesContent.innerHTML = page24Content;
});
page25Link.addEventListener('click', () => {
    servicesContent.innerHTML = page25Content;
});

page26Link.addEventListener('click', () => {
    servicesContent.innerHTML = page26Content;
});
page27Link.addEventListener('click', () => {
    servicesContent.innerHTML = page27Content;
});

page28Link.addEventListener('click', () => {
    servicesContent.innerHTML = page28Content;
});

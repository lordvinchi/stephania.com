    <!-- =====  FOOTER START  ===== -->
    <div id="contact" class="footer ptb_100">
      <div class="container">
        <div class="row">
          <div class="col-md-3 mtb_40 text-left wow fadeInUp" data-wow-delay=".2s">
            <h4 class="footer-title ptb_20 light uppr ">Contact Us</h4>
            <ul>
              <li>7 Edmouno Close, Royal Avenue, Peter Odili Road, Port Harcourt, Rivers State, Nigeria.</li>
              <li>(+234) 813 464 6487 | (+234) 909 933 3349</li>
              <li>info@stephanialtd.com</li>
            </ul>
          </div>
          <div class="col-md-6 wow fadeInUp" data-wow-delay=".4s">
            <div class="footer-logo mt_20 mb_20"> <a href="index.html"> <img src="<?php echo base_url('assets/images/brand/logo-white.png')?>" alt="Civil Engineer"> </a> </div>
            <div class="footer-link">
              <ul>
                <li><a href="index.html">Home </a></li>
                <li><a href="about.html">About us</a></li>
                <li><a href="portfolio_2col_grid.html">Projects</a></li>
                <li><a href="blog_2col_grid.html">Blog</a></li>
                <li> <a href="team.html">Team</a></li>
                <li><a href="pricing.html">Pricing</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </div>
            <div class="copyright-part mtb_10">@ 2023 All Rights Reserved <a href="http://www.stephanialtd.com/">Stephania Support Services Limited</a></div>
            <div class="social_icon">
              <ul>
                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
                <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
              </ul>
            </div>
          </div>
          <div class="col-md-3 mtb_40 text-right wow fadeInUp" data-wow-delay=".6s">
            <h4 class="footer-title ptb_20 light uppr">SIGN UP OUR NEWSLETTER</h4>
            <div class="form-group light">
              <input placeholder="Enter Your Email Address" type="text">
              <br>
              <button class="custom-btn btn-12 light mt_10">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- =====  FOOTER END  ===== -->
  </div>
  <!-- =====  WRAPPER END  ===== -->
  <!-- =====  SCRIPT START  ===== -->




  <script src="<?php echo base_url('assets/js/jQuery_v3.1.1.min.js"')?>></script>
  <script src="<?php echo base_url('assets/js/owl.carousel.min.js')?>"></script>
  <script src="<?php echo base_url('assets/js/jquery.magnific-popup.js')?>"></script>
  <script src="<?php echo base_url('assets/js/isotope.pkgd.min.js')?>"></script>
  <script src="<?php echo base_url('assets/js/menu.js')?>"></script>
  <script src="<?php echo base_url('assets/js/custom.js')?>"></script>
  <script src="<?php echo base_url('assets/js/wow.js')?>"></script>
  <script src="<?php echo base_url('assets/js/parallax.js')?>"></script>
  <script src="<?php echo base_url('assets/js/circle-progress.js')?>"></script>
  <script src="<?php echo base_url('assets/js/circle-examples.js')?>"></script>
  <script src="<?php echo base_url('assets/js/jquery.easeScroll.js')?>"></script>
  <script src="<?php echo base_url('assets/js/bootstrap.min.js')?>"></script>
  <script src="<?php echo base_url('assets/js/bootsnav.js')?>"></script>
  <script src="<?php echo base_url('assets/js/content.js')?>"></script>



  <script>
  $("html").easeScroll();
  // Add scrollspy to <body>
  $('body').scrollspy({ target: '#menu' })
  $("#menu ul li a[href^='#']").on('click', function(e) {
    // prevent default anchor click behavior
    e.preventDefault();
    // store hash
    var hash = this.hash;
    // animate
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 1500, function() {
      // when done, add hash to url
      // (default click behaviour)
      window.location.hash = hash;
    });
  });
  </script>
  <!-- =====  SCRIPT END  ===== -->
</body>


<!-- Mirrored from html.lionode.com/civil-engineer/index.html by HTTrack Website Copier/3.x [XR&CO'2014], Sat, 02 Sep 2023 11:14:27 GMT -->
</html>
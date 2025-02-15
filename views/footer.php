</div>
</div>
</div>
<!-- end:: Body -->
<!-- begin::Footer -->
<footer class="m-grid__item		m-footer ">
    <div class="m-container m-container--fluid m-container--full-height m-page__container">
        <div class="m-stack m-stack--flex-tablet-and-mobile m-stack--ver m-stack--desktop">
            <div class="m-stack__item m-stack__item--left m-stack__item--middle m-stack__item--last">
							<span class="m-footer__copyright">
								2019 &copy;
								<a href="https://ovis-software.com" class="m-link">
									Ovis software
								</a>
							</span>
            </div>
            <div class="m-stack__item m-stack__item--right m-stack__item--middle m-stack__item--first">
                <ul class="m-footer__nav m-nav m-nav--inline m--pull-right">
                    <li class="m-nav__item">
                        <a href="#" class="m-nav__link">
										<span class="m-nav__link-text">
											About
										</span>
                        </a>
                    </li>
                    <li class="m-nav__item">
                        <a href="#" class="m-nav__link">
										<span class="m-nav__link-text">
											Privacy
										</span>
                        </a>
                    </li>
                    <li class="m-nav__item">
                        <a href="#" class="m-nav__link">
										<span class="m-nav__link-text">
											T&C
										</span>
                        </a>
                    </li>
                    <li class="m-nav__item m-nav__item">
                        <a href="#" class="m-nav__link" data-toggle="m-tooltip" title="Support Center"
                           data-placement="left">
                            <i class="m-nav__link-icon flaticon-info m--icon-font-size-lg3"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</footer>
<!-- end::Footer -->
</div>
<!-- end:: Page -->
<!-- begin::Scroll Top -->
<div id="m_scroll_top" class="m-scroll-top">
    <i class="la la-arrow-up"></i>
</div>
<!-- end::Scroll Top -->
<!--begin::Base Scripts -->
<script src="<?php echo URL; ?>public/assets/vendors/base/vendors.bundle.js" type="text/javascript"></script>
<script src="<?php echo URL; ?>public/assets/demo/default/base/scripts.bundle.js" type="text/javascript"></script>
<script src="<?php echo URL; ?>public/assets/demo/default/base/menu.js" type="text/javascript"></script>
<!--end::Base Scripts -->
<!--begin::Page Vendors -->
<script src="<?php echo URL; ?>public/assets/vendors/custom/jquery-ui/jquery-ui.bundle.js"
        type="text/javascript"></script>
<script src="<?php echo URL; ?>public/assets/vendors/custom/highcharts/code/highcharts.js"></script>
<script src="<?php echo URL; ?>public/assets/vendors/custom/datatables/datatables.bundle.js"></script>
<script src="<?php echo URL; ?>public/assets/vendors/custom/fullcalendar/fullcalendar.bundle.js"></script>
<script src="<?php echo URL; ?>public/assets/vendors/custom/fullcalendar/scheduler.js"
        type="text/javascript"></script>
<!--end::Page Vendors -->
<?php
if (isset($this->css)) {
    foreach ($this->css as $css) {
        echo '<script src="' . URL . 'views/' . $css . '" type="text/javascript"></script>';
    }
}
?>
</body>
<!-- end::Body -->
</html>

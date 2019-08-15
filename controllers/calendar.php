<?php

class Calendar extends Controller {

	function __construct() {
		parent::__construct();
	}
	
	function index() {
		//echo Hash::create('sha256', 'jonathan', HASH_PASSWORD_KEY);
        $this->view->css = ['calendar/js/index.js'];
        $this->view->title = 'Calendar';


        $this->view->render('calendar/index');
	}
}
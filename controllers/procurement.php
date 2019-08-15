<?php

class Procurement extends Controller {

	function __construct() {
		parent::__construct();
	}
	
	function index() {
		//echo Hash::create('sha256', 'jonathan', HASH_PASSWORD_KEY);
        $this->view->css = ['procurement/js/index.js'];
        $this->view->title = 'Procurement';


        $this->view->render('procurement/index');
	}
}
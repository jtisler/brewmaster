<?php

class Customers extends Controller {

	function __construct() {
		parent::__construct();
	}
	
	function index() {
		//echo Hash::create('sha256', 'jonathan', HASH_PASSWORD_KEY);
        $this->view->css = ['customers/js/index.js'];
        $this->view->title = 'Customers';


        $this->view->render('customers/index');
	}
}
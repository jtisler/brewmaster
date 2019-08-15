<?php

class Orders extends Controller {

	function __construct() {
		parent::__construct();
	}
	
	function index() {
		//echo Hash::create('sha256', 'jonathan', HASH_PASSWORD_KEY);
        $this->view->css = ['orders/js/index.js'];
        $this->view->title = 'Sales';


        $this->view->render('orders/index');
	}
}
<?php

class Dashboard extends Controller {

	function __construct() {
		parent::__construct();
	}
	
	function index() 
	{
	    $this->view->css = ['dashboard/js/default.js'];

	    $this->view->title = "Dashboard";
		$this->view->render('dashboard/index');
	}
}
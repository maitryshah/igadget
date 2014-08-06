$("/html/body"){
	add_class("_category")
	
	$("//*[@id='Wrapper']"){
		$("//*[@id='LayoutColumn1']"){
			$("//*[@id='SideCategoryShopByPrice']"){
				attribute("data-ur-set", "toggler")
				$("./h2"){
					add_class("mw_bar1")
					attribute("data-ur-toggler-component", "button")
					insert("div", class: "mw_indicator")
				}
				$("./div"){
					attribute("data-ur-toggler-component", "content")
					$("./ul/li/a"){
						insert("div", class: "mw_arrow")
					}
				}
		    }
		    $("//*[@id='SideShopByBrand']"){
		    	attribute("data-ur-set", "toggler")
				$("./h2"){
					add_class("mw_bar1")
					attribute("data-ur-toggler-component", "button")
					insert("div", class: "mw_indicator")
				}
				$("./div"){
					attribute("data-ur-toggler-component", "content")
					$("./ul/li/a"){
						insert("div", class: "mw_arrow")
					}
				}
		    }
		}
		$("//*[@id='SideNewsletterBox']"){
		remove()
	    }
		$("//*[@id='LayoutColumn2']"){
			$("//*[@id='CategoryHeading']/div/h2"){
				 move_to("//*[@id='Wrapper']", position("top")) 
			}
		}
		$("//*[@id='CategoryContent']"){
		 	attribute("data-ur-set" ,"carousel")
		 	attribute("data-ur-autoscroll" ,"enabled")
		 	insert("div", class: "mw_dot") {
		 		attribute("data-ur-carousel-component" , "dots")
		 	 }
		 	$("//*[@id='frmCompare']/ul"){
		 		attribute("data-ur-carousel-component","scroll_container")
		 		$("./li"){
		 			attribute("data-ur-carousel-component","item")
		 			$("./div[4]"){
		 				remove()
		 			}	
		 	 	}
		    }
		    $("//*[@id='frmCompare']/div"){
		    	remove()
		    }
	    }  
		$("//*[@id='CategoryBreadcrumb']"){
			remove()
		}
		$("//*[@id='LayoutColumn3']"){
			remove()
		}
	}
}
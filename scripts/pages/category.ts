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
		$("//*[@id='LayoutColumn1']"){
			attribute("data-ur-set","tabs")
			attribute("data-ur-closeable","enabled")
			$("//*[@id='SideCategoryShopByPrice']/h2"){
                attribute("data-ur-tabs-component","button")
				attribute("data-ur-tab-id","first")
			}
			$("//*[@id='SideCategoryShopByPrice']/div"){
                attribute("data-ur-tabs-component","content")
				attribute("data-ur-tab-id","first")
			}
			$("//*[@id='SideShopByBrand']/h2"){
                attribute("data-ur-tabs-component","button")
				attribute("data-ur-tab-id","second")
			}
			$("//*[@id='SideShopByBrand']/div"){
                attribute("data-ur-tabs-component","content")
			    attribute("data-ur-tab-id","second")
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
		 	attribute("data-ur-infinite" ,"enabled")
		 	attribute("data-ur-fill" ,"2")
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
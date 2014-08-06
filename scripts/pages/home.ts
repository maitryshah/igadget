 $("/html/body"){
 	add_class("_body")
	 $("//*[@id='HomeFeaturedProducts']/h2/span"){
	      	remove()
	 }
	 $("//*[@id='HomeFeaturedProducts']/div"){
	 	attribute("data-ur-set" ,"carousel")
	 	attribute("data-ur-infinite" ,"enabled")
	 	attribute("data-ur-touch" ,"enabled")
	 	insert("div", class: "mw_dot"){
	 		attribute("data-ur-carousel-component", "dots")
	 	}
	 	$("//*[@id='HomeFeaturedProducts']/div/ul"){
	 		attribute("data-ur-carousel-component","scroll_container")
	 		$("./li"){
	 			attribute("data-ur-carousel-component","item")
	 			$("./div[@class='QuickView']"){
	 				attribute("style","border: 1px solid red;")
	 			}
	 		}
	 	}
	 }
	 $("//*[@id='HomeNewProducts']/h2/span"){
	 	remove()
	 }
	$("//*[@id='HomeNewProducts']/div"){
	 	attribute("data-ur-set" ,"carousel")
	 	attribute("data-ur-infinite" ,"enabled")
	 	attribute("data-ur-touch" ,"enabled")
	 	insert("div", class: "mw_dot ") {
	 		attribute("data-ur-carousel-component" , "dots")
	 	}
	 	$("//*[@id='HomeNewProducts']/div/ul"){
	 		attribute("data-ur-carousel-component","scroll_container")
	 		$("./li"){
	 			attribute("data-ur-carousel-component","item")
	 		}
	 	}
	 }  
	 $("//*[@id='LayoutColumn3']") {
	 	remove()
	 }
}
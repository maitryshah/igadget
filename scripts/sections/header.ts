# $('./body') {
#   insert_top("header", class: "mw-header") {
#     Move stuff here
#   }
# }
$("//div[@id='SearchForm']/form//input[@type='image']") {
  wrap("div", class: "mw_search_btn sprites-search")
  attribute("style", "opacity:0;")
}
$(".//div[@id='Header']") {   
  log("--> execute")
  attribute("data-ur-set", "toggler")
  $("./div[@id='Logo']") {  log("--> execute")
    attribute("class", "clearfix")
  # Move top menu into #Logo container
  move_here("../../../div[@id='TopMenu']", "bottom") { log("--> execute")
  	$(".//li[@class='First']"){
  		add_class("sprites-user")
  		$("./a"){
  			attribute("style", "opacity: 0;")
  		}
  	}	
  	$(".//li[@class='CartLink']"){
  		add_class("sprites-cart")
  		$("./a"){
  			attribute("style", "opacity: 0;")
  		}	
  	}
   # Remove unwanted top menu items from upper menu
    remove(".//li[not(contains(@class, 'CartLink') or contains(@class, 'First'))]")
   }
  }
 insert("div", class: "mw_header_bottom") {
  insert("div", class: "mw_search") {
  # Move search form into container element
  move_here("//div[@id='SearchForm']", "bottom") {
    remove("./p")
 
    $("./form") {
      remove("./label")
      # Change search button background image
      $("./input[@type='image']") {
        wrap("div", class: "mw_search_btn sprites-search")
      }
      $("./input[@type='text']") {
        attribute("placeholder", "Search...")
       }
     }
   }
  }
  
  insert("div", class: "mw_menu_btn sprites-menu", data-ur-toggler-component: "button", data-ur-state: "disabled")
  
 } 
  
  # Move menu items into header
  move_here("../div[@id='Menu']", "bottom") {
  attribute("data-ur-toggler-component", "content")
  attribute("data-ur-state", "diabled")
  # Move "Category List" element on bottom of #Menu element
  move_here("../../div[@id='Wrapper']/div[@class='Left']/div[@id='SideCategoryList']", "bottom")
  $$("li") {
    add_class("mw_bar2")
  }
 }

 
}
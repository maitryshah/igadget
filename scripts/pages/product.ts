$("/html/body"){

	add_class("_product")
	$("//*[@id='Wrapper']"){
		$("//*[@id='LayoutColumn1']"){
			remove()
		}
		$("//*[@id='LayoutColumn2']"){
			remove("//*[@id='ProductBreadcrumb']")
			remove("//*[@id='ProductByCategory']")
			remove("//*[@id='ProductReviews']/a")
			remove("//*[@id='SimilarProductsByCustomerViews']")	
			$("//*[@id='ProductDetails']/div/div[2]/div[3]"){
				remove("//*[@id='ImageScrollNext']")
			}

			$("//*[@id='productDetailsAddToCartForm']"){
				$("//*[@id='productDetailsAddToCartForm']/div/div[3]/div[2]/div/input"){
					remove()
				}
			}
			$("//*[@id='productDetailsAddToCartForm']/div/div[3]/div[2]/div"){
				insert("a", class: "cartbtn"){
					text("Add To Cart")
				}	
			}
		}
		$("//*[@id='LayoutColumn3']"){
			remove()
		}
	}
}
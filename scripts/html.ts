# HTML Transformations go here

$("/html") {
  add_canonical_tag()
  rewrite_links()
  #Rewrite relative image paths to point to original desktop site.
  #absolutize_srcs()
  # Add the mobile meta tags 
  clean_mobile_meta_tags()

  # Remove styles and comments
  #remove_all_styles()
  remove_html_comments()
  absolutize()
  rewrite_aspnet_scripts()
  clean_mobile_meta_tags()
  remove_all_styles()

  add_assets()


  @import "sections/header.ts"
  @import "sections/footer.ts"

  @import "mappings.ts" 
}


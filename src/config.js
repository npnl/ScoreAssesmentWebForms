module.exports = {
  HOST: "http://localhost:4567",

  // Auth Endpoints
  AUTH_URL: "/api/v1/sessions",
  LOGOUT_URL: "/api/v1/sessions/:id",

  // Brand Endpoints
  GET_BRANDS_URL: "/gofood/portal/v1/brands",
  SEARCH_BRANDS_URL: "/gofood/portal/v1/brands?q=:search_string",
  CREATE_BRAND_URL: "/gofood/portal/v1/brands",
  UPDATE_BRANDS_URL: "/gofood/portal/v1/brands",
  BRAND_IMAGE_URL: "/gofood/portal/v1/brands/:id/images",
  RESET_RESTAURANT_IMAGE_TO_BRAND_IMAGE: "/gofood/portal/v1/brands/:id/update_restaurants_image_to_brand_image",

  // Category Endpoints
  GET_CATEGORIES_URL: "/gofood/portal/v1/master_menu_categories",
  CREATE_CATEGORY_URL: "/gofood/portal/v1/master_menu_categories",
  GET_CATEGORY_URL: "/gofood/portal/v1/master_menu_categories/:id",
  UPDATE_CATEGORY_URL: "/gofood/portal/v1/master_menu_categories/:id",
  ACTIVATE_CATEGORY_URL: "/gofood/portal/v1/master_menu_categories/:master_menu_category_id/activate",
  DEACTIVATE_CATEGORY_URL: "/gofood/portal/v1/master_menu_categories/:master_menu_category_id/deactivate",
  SAVE_CATEGORIES_ORDER: "/gofood/portal/v1/master_menu_categories/weights",

  // Menu Item Endpoints
  GET_MENU_ITEMS_URL: "/gofood/portal/v1/master_menu_items",
  CREATE_MENU_ITEM_URL: "/gofood/portal/v1/master_menu_items",
  ACTIVATE_MENU_ITEM_URL: "/gofood/portal/v1/master_menu_items/:master_menu_item_id/activate",
  DEACTIVATE_MENU_ITEM_URL: "/gofood/portal/v1/master_menu_items/:master_menu_item_id/deactivate",
  UPDATE_MENU_ITEM_URL: "/gofood/portal/v1/master_menu_items/:id",
  GET_MENU_ITEM_URL: "/gofood/portal/v1/master_menu_items/:id",

  //Menu Group Endpoints
  GET_MENU_GROUPS_URL: "/gofood/portal/v1/menu_groups",
  CREATE_MENU_GROUP_URL: "/gofood/portal/v1/menu_groups",
  GET_MENU_GROUP_URL: "/gofood/portal/v1/menu_groups/:id",
  UPDATE_MENU_GROUPS_URL: "/gofood/portal/v1/menu_groups/:id",
  GET_MENU_ITEMS_FOR_MENU_GROUP: "/gofood/portal/v1/menu_groups/:id/menu_items",
  GET_MENU_ITEM_FOR_MENU_GROUP: "/gofood/portal/v1/menu_groups/:menuGroupId/menu_items/:menuItemId",
  UPDATE_MENU_ITEM_FOR_MENU_GROUP: "/gofood/portal/v1/menu_groups/:menuGroupId/menu_items/:menuItemId",
  ADD_MENU_ITEMS_TO_MENU_GROUP: "/gofood/portal/v1/menu_groups/:id/menu_items",
  REMOVE_MENU_ITEMS_FROM_MENU_GROUP: "/gofood/portal/v1/menu_groups/:id/menu_items/delete",
  SAVE_GROUP_MENU_ITEMS_ORDER: "/gofood/portal/v1/menu_groups/:id/menu_items/weights",

  //Restaurant Endpoints
  GET_RESTAURANTS: "/gofood/portal/v1/brands/:brand_id/restaurants",

  DEFAULT_ERROR_MESSAGE: "Something went wrong! Try again in sometime!",
  DEFAULT_PAGE_SIZE: 25,
  MAX_DESCRIPTION_LENGTH: 200,

  ACCESS_TOKEN_KEY: "accessToken"
};

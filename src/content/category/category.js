// =================================================================
// Category
// =================================================================
import { create_component, create_component_with_img } from "../../utils.js";

// Functions
function create_slider(parent, item) {
    const container = create_component("div", "category-section-container", parent);
    const header = create_component("div", "category-section-header", container);
    header.textContent = item.header_text;
    const slider = create_component("ul", "category-section-slider", container);
    item.cards.forEach(card => {
        create_category_slider_item(slider, card.img_src);
    });
}

function create_category_slider_item(parent, img_src) {
    const item = create_component("li", "category-section-slider-item", parent);
    const item_img = create_component("img", "", item);
    item_img.src = img_src;
    
    const inner_item = create_component("div", "slider-inner-item", item);
    const inner_item_img = create_component("img", "", inner_item);
    inner_item_img.src = img_src;
    
    const inner_item_canvas = create_component("div", "slider-inner-item-canvas", inner_item);
    const button_container = create_component("div", "button-container", inner_item_canvas);

    const left_button_container = create_component("div", "left-button-container", button_container);
    create_component_with_img("button", "content-play-button", left_button_container, "./content/category/images/play_button.png");
    create_component_with_img("button", "content-add-button", left_button_container, "./content/category/images/add_button.png");
    create_component_with_img("button", "content-like-button", left_button_container, "./content/category/images/like_button.png");
    
    const right_button_container = create_component("div", "right-button-container", button_container);
    create_component_with_img("button", "content-dropdown-button", right_button_container, "./content/category/images/dropdown_button.png");

    const description = create_component("p", "slider-inner-item-description", inner_item_canvas);
    description.innerHTML = "Content Description";
}

function create_category(parent, content) {
    const category_section = create_component("section", "category", parent);
    const slider = create_component("section", "slider", category_section);
    create_slider(slider, content);
}

export {create_category}
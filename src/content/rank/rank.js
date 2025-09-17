// =================================================================
// Rank
// =================================================================
import { create_component, create_component_with_img } from "../../utils.js";

// Functions
function create_rank_section(parent, content) {
    const container = create_component("div", "rank-section-container", parent);
    const header = create_component("div", "rank-section-header", container);
    header.textContent = content.header_text;
    const slider = create_component("ul", "rank-section-slider", container);
    for (var i = 0; i < 6; i++) {
        create_rank_slider_item(slider, content.cards[i].icon_src, content.cards[i].img_src, content.cards[i].inner_img_src);
    };
}

function create_rank_slider_item(parent, icon_src, img_src, inner_img_src) {
    const item = create_component("li", "rank-section-slider-item", parent);
    const rank_icon = create_component("img", "rank-section-slider-item-icon", item);
    rank_icon.src = icon_src;
    const item_img = create_component("img", "rank-section-slider-item-img", item);
    item_img.src = img_src;

    const inner_item = create_component("div", "slider-inner-item", item);
    const inner_item_img = create_component("img", "", inner_item);
    inner_item_img.src = inner_img_src;
    
    const inner_item_canvas = create_component("div", "slider-inner-item-canvas", inner_item);
    const button_container = create_component("div", "button-container", inner_item_canvas);

    const left_button_container = create_component("div", "left-button-container", button_container);
    create_component_with_img("button", "content-play-button", left_button_container, "./content/rank/images/play_button.png");
    create_component_with_img("button", "content-add-button", left_button_container, "./content/rank/images/add_button.png");
    create_component_with_img("button", "content-like-button", left_button_container, "./content/rank/images/like_button.png");
    
    const right_button_container = create_component("div", "right-button-container", button_container);
    create_component_with_img("button", "content-dropdown-button", right_button_container, "./content/rank/images/dropdown_button.png");

    const description = create_component("p", "slider-inner-item-description", inner_item_canvas);
    description.innerHTML = "Content Description";
}

function create_rank(parent, content) {
    const rank = create_component("section", "rank", parent);
    create_rank_section(rank, content);
}

export {create_rank}
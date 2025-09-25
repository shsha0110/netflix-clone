// =================================================================
// Category
// =================================================================
import { create_component } from "../../utils.js";
import { Slider } from "../slider/slider.js";

function create_category(parent, icon_data, section_data, category_index) {
    const category_section = create_component("section", "category", parent);
    const card_width = 214;
    const card_height = 121;
    const card_type = "category";
    let slider = new Slider(category_section, icon_data, section_data, category_index, card_width, card_height, card_type);
}

export {create_category}
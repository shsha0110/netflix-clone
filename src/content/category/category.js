// =================================================================
// Category
// =================================================================
import { create_component, create_component_with_img } from "../../utils.js";
import { Slider } from "../slider.js";

const img_dir = "./content/category/images/";

function create_category(parent, content, category_index) {
    const category_section = create_component("section", "category", parent);
    let slider = new Slider(category_section, content, category_index, 214, 8, img_dir);
}

export {create_category}
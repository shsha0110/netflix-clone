// =================================================================
// Rank
// =================================================================
import { create_component, create_component_with_img } from "../../utils.js";
import { Slider } from "../slider/slider.js"

function create_rank(parent, content, rank_index) {
    const rank_section = create_component("section", "rank", parent);
    const card_width = 220;
    const card_height = 165;
    const card_type = "rank";
    let slider = new Slider(rank_section, content, rank_index, card_width, card_height, card_type);
}

export {create_rank}
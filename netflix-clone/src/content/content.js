import { create_category } from "./category/category.js";
import { create_rank } from "./rank/rank.js";
import { create_component } from "../utils.js";

export function create_content(parent, data) {
    const content = create_component("main", "content", parent);
    create_category(content, data.icons, data.sections[0], 0);
    create_category(content, data.icons, data.sections[1], 1);
    create_rank(content, data.icons, data.sections[2], 0);
    create_category(content, data.icons, data.sections[3], 2);
    create_category(content, data.icons, data.sections[4], 3);
}
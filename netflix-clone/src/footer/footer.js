// =================================================================
// Footer
// =================================================================
import { create_component, create_component_with_img } from "../utils.js";

// Functions
function create_member_link_row(parent, data) {
    const link_row = create_component("tr", "member-link-row", parent);
    data.forEach(elem => {
        const member_link_container = create_component("td", "member-link-container", link_row);
        const member_link = create_component("a", "member-link", member_link_container);
        member_link.innerHTML = elem.text;
        member_link.href = elem.link;
    })
}

export function create_footer(parent, data) {
    const footer = create_component("footer", "footer", parent);
    const social_link_container = create_component("ul", "social-link-container", footer);
    data.social_links.forEach(elem => {
        create_component_with_img("button", elem.class_name, social_link_container, elem.img_src);
    });

    const member_link_table = create_component("table", "member-link-table", footer);
    data.member_links.forEach(elem => {
        create_member_link_row(member_link_table, elem);
    })

    const copyright_container = create_component("ul", "copyright-container", footer);
    data.copyright.forEach(elem => {
        const copyright_item = create_component("span", "copyright-item", copyright_container);
        copyright_item.innerHTML = elem.text;
    })
}